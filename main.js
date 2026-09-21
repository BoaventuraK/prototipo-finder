let files = [
    // PASTAS RAIZ
    { id: 1, parentId: null, name: "Matérias da Faculdade", type: "folder", icon: "📁", color: "transparent", focus: "faculdade", tags: ["universidade", "estudos"] },
    { id: 2, parentId: null, name: "Projetos da Empresa", type: "folder", icon: "📁", color: "transparent", focus: "trabalho", tags: ["trabalho", "dev"] },
    { id: 3, parentId: null, name: "Projetos Pessoais", type: "folder", icon: "📁", color: "transparent", focus: "pessoal", tags: ["side-project", "codigo"] },
    { id: 4, parentId: null, name: "Cursos e Certificados", type: "folder", icon: "📁", color: "transparent", focus: "pessoal", tags: ["educacao"] },
    
    // ARQUIVOS NA RAIZ
    { id: 10, parentId: null, name: "Curriculo_Atualizado.pdf", type: "pdf", icon: "📄", size: 120, date: "2026-01-15", focus: "pessoal", tags: ["carreira", "curriculo"], lastOpened: "2026-09-10" },
    { id: 11, parentId: null, name: "Foto_Paisagem_Viagem.jpg", type: "image", icon: "🖼️", size: 4500, date: "2025-08-21", focus: "pessoal", tags: ["viagem", "fotos"], lastOpened: "2026-02-14" },

    // DENTRO DE Faculdade (ID: 1)
    { id: 101, parentId: 1, name: "Trabalho_Redes_Computadores.pdf", type: "pdf", icon: "📄", size: 1500, date: "2025-12-10", focus: "faculdade", tags: ["projeto", "redes"], lastOpened: "2025-12-11", unused: true },
    { id: 102, parentId: 1, name: "TCC_Rascunho.pdf", type: "pdf", icon: "📄", size: 2100, date: "2026-08-28", focus: "faculdade", tags: ["tcc", "pesquisa"], lastOpened: "2026-09-01" },

    // DENTRO DE Trabalho (ID: 2)
    { id: 201, parentId: 2, name: "script_automacao.py", type: "document", icon: "📝", size: 15, date: "2026-01-20", focus: "trabalho", tags: ["python", "automacao"], lastOpened: "2026-09-18" },
    { id: 202, parentId: 2, name: "config_servidor.yaml", type: "document", icon: "📝", size: 8, date: "2026-02-10", focus: "trabalho", tags: ["infra", "config"], lastOpened: "2026-09-19" },
    { id: 203, parentId: 2, name: "Planilha_Custos_Anuais.pdf", type: "pdf", icon: "📄", size: 900, date: "2026-02-25", focus: "trabalho", tags: ["financeiro", "relatorio"], lastOpened: "2026-03-01" },

    // DENTRO DE Projetos Pessoais (ID: 3)
    { id: 301, parentId: 3, name: "banco_dados.sql", type: "document", icon: "📝", size: 45, date: "2026-01-05", focus: "pessoal", tags: ["database", "sql"], lastOpened: "2026-09-15" },
    { id: 302, parentId: 3, name: "api_backend.ts", type: "document", icon: "📝", size: 112, date: "2026-01-10", focus: "pessoal", tags: ["typescript"], lastOpened: "2026-09-15" },
    { id: 303, parentId: 3, name: "api_backend_OLD.ts", type: "document", icon: "📝", size: 112, date: "2026-01-09", focus: "pessoal", tags: ["backup"], lastOpened: "2026-01-09", duplicateOf: 302 },

    // DENTRO DE Cursos (ID: 4)
    { id: 401, parentId: 4, name: "Apostila_Ingles_Basico.pdf", type: "pdf", icon: "📄", size: 300, date: "2026-02-01", focus: "pessoal", tags: ["idiomas", "ingles"], lastOpened: "2026-08-20" },
    { id: 402, parentId: 4, name: "Certificado_Design_UX.pdf", type: "pdf", icon: "📄", size: 2400, date: "2026-02-15", focus: "pessoal", tags: ["design", "certificado"], lastOpened: "2026-09-05" }
];

let currentFocus = 'all';
let currentView = 'grid';
let network = null;
let contextTargetId = null;

// NAVEGAÇÃO DE PASTAS
let currentFolderId = null;
let pathHistory = [];

document.addEventListener("DOMContentLoaded", () => {
    updateBreadcrumb();
    applyFilters();
    document.addEventListener("click", () => closeContextMenu());
});

/* ================= NAVEGAÇÃO DE PASTAS ================= */
function openFolder(folderId) {
    const folder = files.find(f => f.id === folderId);
    if (!folder) return;
    
    pathHistory.push(folder);
    currentFolderId = folderId;
    updateBreadcrumb();
    applyFilters();
}

function navigateUp() {
    if (pathHistory.length === 0) return;
    pathHistory.pop();
    currentFolderId = pathHistory.length > 0 ? pathHistory[pathHistory.length - 1].id : null;
    updateBreadcrumb();
    applyFilters();
}

function navigateToRoot() {
    pathHistory = [];
    currentFolderId = null;
    updateBreadcrumb();
    applyFilters();
}

function updateBreadcrumb() {
    const bc = document.getElementById('breadcrumb');
    let html = '';
    
    if (pathHistory.length > 0) {
        html += `<button class="breadcrumb-btn" onclick="navigateUp()">Voltar</button>`;
    }
    
    const rootNames = { 'all': 'Todos', 'faculdade': 'Faculdade', 'trabalho': 'Trabalho', 'pessoal': 'Pessoal' };
    html += `<span class="breadcrumb-path" style="cursor:pointer" onclick="navigateToRoot()">/home/${rootNames[currentFocus]}</span>`;
    
    pathHistory.forEach((folder) => {
        html += ` / ${folder.name}`;
    });
    
    bc.innerHTML = html;
}

/* ================= NAVEGAÇÃO E MODOS DE FOCO ================= */
function setView(view, element) {
    currentView = view;
    if(element) {
        document.querySelectorAll('#main-nav li').forEach(li => li.classList.remove('active'));
        element.classList.add('active');
    }
    
    document.getElementById('grid-container').classList.toggle('hidden', view !== 'grid');
    document.getElementById('graph-container').classList.toggle('hidden', view !== 'graph');
    document.getElementById('cleanup-container').classList.toggle('hidden', view !== 'cleanup');
    
    if (view === 'grid') applyFilters();
    if (view === 'graph') initGraph();
    if (view === 'cleanup') renderCleanupView();
}

function setFocusMode(mode, element) {
    currentFocus = mode;
    document.querySelectorAll('#focus-nav li').forEach(li => li.classList.remove('active-focus'));
    element.classList.add('active-focus');
    
    navigateToRoot(); 
}

/* ================= FILTROS E PESQUISA ================= */
function applyFilters() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const typeTerm = document.getElementById('typeFilter').value;

    const filtered = files.filter(f => {
        const matchFocus = currentFocus === 'all' || f.focus === currentFocus;
        const matchSearch = f.name.toLowerCase().includes(searchTerm);
        const matchType = typeTerm === 'all' || f.type === typeTerm;
        
        const matchFolder = searchTerm !== '' ? true : f.parentId === currentFolderId;
        
        return matchFocus && matchSearch && matchType && matchFolder;
    });

    if (currentView === 'grid') renderGrid(filtered);
    if (currentView === 'graph') initGraph(filtered); 
}

/* ================= GRID RENDER ================= */
function renderGrid(data) {
    const grid = document.getElementById('grid-container');
    grid.innerHTML = '';

    if(data.length === 0) {
        grid.innerHTML = '<div style="color:var(--text-muted); grid-column: 1 / -1;">Pasta vazia ou nenhum arquivo encontrado.</div>';
        return;
    }

    data.forEach(file => {
        const div = document.createElement('div');
        div.className = 'file-item';
        
        let iconStyle = '';
        if (file.type === 'folder' && file.color && file.color !== 'transparent') {
            iconStyle = `background-color: ${file.color}; box-shadow: inset 0 0 10px rgba(0,0,0,0.5);`;
        }

        div.innerHTML = `
            <div class="file-icon" style="${iconStyle}">${file.icon}</div>
            <div class="file-name">${file.name}</div>
        `;
        
        div.onclick = () => {
            if (file.type === 'folder') {
                openFolder(file.id);
            } else {
                openInspector(file);
            }
        };
        
        div.oncontextmenu = (e) => {
            e.preventDefault();
            openContextMenu(e, file);
        };
        grid.appendChild(div);
    });
}

/* ================= GRAPH RENDER (VIS.JS) ================= */
function initGraph(data = files) {
    if(currentView !== 'graph') return;
    const container = document.getElementById('graph-container');
    
    const searchTerm = document.getElementById('searchInput').value;
    let graphFiles = data;
    
    if (searchTerm === '' && currentFolderId === null) {
        graphFiles = files.filter(f => currentFocus === 'all' || f.focus === currentFocus);
    }

    let nodesArray = [];
    let edgesArray = [];
    let tagsSet = new Set();

    graphFiles.forEach(file => {
        nodesArray.push({
            id: file.id, label: file.name, shape: 'box',
            color: { background: file.color && file.color !== 'transparent' ? file.color : '#2c2c2f', border: '#444' },
            font: { color: '#e2e2e2', size: 12 }, borderWidth: 1
        });
        file.tags.forEach(t => tagsSet.add(t));
    });

    tagsSet.forEach(tag => {
        nodesArray.push({
            id: 'tag_' + tag, label: '#' + tag, shape: 'dot', size: 12,
            color: { background: '#ff5e62', border: '#ff5e62' },
            font: { color: '#ff7679', size: 12, bold: true }
        });
    });

    graphFiles.forEach(file => {
        file.tags.forEach(tag => {
            edgesArray.push({
                from: file.id, to: 'tag_' + tag,
                color: { color: '#444', opacity: 0.4 }, width: 1
            });
        });
    });

    const graphData = { nodes: new vis.DataSet(nodesArray), edges: new vis.DataSet(edgesArray) };
    const options = { physics: { forceAtlas2Based: { gravitationalConstant: -60, centralGravity: 0.01, springLength: 100 }, solver: 'forceAtlas2Based' } };

    if (network) network.destroy();
    network = new vis.Network(container, graphData, options);

    network.on("click", (params) => {
        if (params.nodes.length > 0 && typeof params.nodes[0] === 'number') {
            openInspector(files.find(f => f.id === params.nodes[0]));
        }
    });
}

/* ================= INSPETOR E IA TAGGER ================= */
function openInspector(file) {
    document.getElementById('inspector-panel').classList.remove('hidden-panel');
    const content = document.getElementById('inspector-content');
    
    let iconStyle = (file.type === 'folder' && file.color) ? `background-color: ${file.color};` : '';
    const tagsHtml = file.tags.map(t => `<span class="tag-chip">#${t}</span>`).join('');

    content.innerHTML = `
        <div class="file-preview-card">
            <div class="icon" style="${iconStyle}">${file.icon}</div>
            <div class="title">${file.name}</div>
        </div>
        <div class="info-row"><span class="info-label">Tipo:</span><span>${file.type.toUpperCase()}</span></div>
        <div class="info-row"><span class="info-label">Tamanho:</span><span>${file.size ? (file.size/1000).toFixed(1) + ' MB' : '--'}</span></div>
        <div class="tags-container"><h4>Tags Associadas</h4>${tagsHtml}</div>
        <button class="btn-action-full" onclick="runAutoTagIA(${file.id})">Analisar Contexto (IA)</button>
    `;
}
function hideInspector() { document.getElementById('inspector-panel').classList.add('hidden-panel'); }

function runAutoTagIA(fileId) {
    const file = files.find(f => f.id === fileId);
    if (!file) return;

    const nameLower = file.name.toLowerCase();
    let newTags = [];

    // IA Genérica analisando pelo nome/extensão base
    if (nameLower.includes('yaml') || nameLower.includes('py') || nameLower.includes('config')) {
        newTags.push("desenvolvimento", "backend", "infra");
    }
    if (nameLower.includes('api') || nameLower.includes('sql') || nameLower.includes('ts')) {
        newTags.push("web", "typescript", "database");
    }
    if (nameLower.includes('ingles') || nameLower.includes('certificado')) {
        newTags.push("estudos", "educacao");
    }
    if (nameLower.includes('tcc') || nameLower.includes('redes')) {
        newTags.push("academico", "universidade");
    }

    let addedCount = 0;
    newTags.forEach(tag => {
        if (!file.tags.includes(tag)) {
            file.tags.push(tag);
            addedCount++;
        }
    });

    if (addedCount > 0) {
        alert(`O modelo analisou o documento e adicionou ${addedCount} novas tags de contexto.`);
        applyFilters();
        openInspector(file);
    } else {
        alert('A IA determinou que as tags atuais já representam completamente o arquivo.');
    }
}

/* ================= MENU DE CONTEXTO ================= */
function openContextMenu(e, file) {
    contextTargetId = file.id;
    const menu = document.getElementById("context-menu");
    const options = document.getElementById("context-options");
    
    let html = '';
    if (file.type === 'folder') {
        html += `<li onclick="openEditFolderModal()">Personalizar Pasta</li>`;
    } else {
        html += `<li onclick="openConvertModal()">Conversor Inteligente</li>`;
    }
    html += `<li style="color: var(--danger)" onclick="deleteFile(${file.id})">Excluir</li>`;
    
    options.innerHTML = html;
    menu.style.left = `${e.clientX}px`;
    menu.style.top = `${e.clientY}px`;
    menu.classList.remove("hidden");
}
function closeContextMenu() { document.getElementById("context-menu").classList.add("hidden"); }

/* ================= MODAIS: CONVERSÃO INTELIGENTE E PASTAS ================= */
function openEditFolderModal() {
    const file = files.find(f => f.id === contextTargetId);
    document.getElementById('folder-icon').value = file.icon;
    document.getElementById('folder-color').value = file.color === 'transparent' ? '#1e1e20' : file.color;
    document.getElementById('modal-folder').classList.remove('hidden');
}

function saveFolder() {
    const file = files.find(f => f.id === contextTargetId);
    file.icon = document.getElementById('folder-icon').value || '📁';
    file.color = document.getElementById('folder-color').value;
    closeModals();
    applyFilters();
    if(document.getElementById('inspector-panel').classList.contains('hidden-panel') === false) openInspector(file);
}

function openConvertModal() {
    const file = files.find(f => f.id === contextTargetId);
    document.getElementById('convert-target-name').textContent = `Arquivo: ${file.name}`;
    
    const select = document.getElementById('convert-format');
    select.innerHTML = '';
    
    if (file.type === 'image') {
        select.innerHTML = `
            <option value="png">PNG (.png)</option>
            <option value="jpg">JPEG (.jpg)</option>
            <option value="webp">WebP (.webp)</option>
        `;
    } else if (file.type === 'pdf') {
        select.innerHTML = `
            <option value="docx">Word (.docx)</option>
            <option value="txt">Texto Simples (.txt)</option>
        `;
    } else if (file.type === 'document') {
        select.innerHTML = `
            <option value="pdf">PDF (.pdf)</option>
            <option value="zip">Compactar (.zip)</option>
        `;
    } else {
        select.innerHTML = `<option value="zip">Compactar (.zip)</option>`;
    }

    document.getElementById('modal-convert').classList.remove('hidden');
}

function executeConversion() {
    const file = files.find(f => f.id === contextTargetId);
    const format = document.getElementById('convert-format').value;
    alert(`O arquivo ${file.name} foi enfileirado para conversão em .${format}.`);
    closeModals();
}

function closeModals() { document.querySelectorAll('.modal').forEach(m => m.classList.add('hidden')); }

function deleteFile(id) {
    if(confirm('Tem certeza que deseja excluir este arquivo?')) {
        files = files.filter(f => f.id !== id);
        applyFilters();
        if(currentView === 'cleanup') renderCleanupView();
        hideInspector();
    }
}

/* ================= LIBERAR ESPAÇO ================= */
function renderCleanupView() {
    const duplicates = files.filter(f => f.duplicateOf);
    const unused = files.filter(f => f.unused);
    
    const dupList = document.getElementById('duplicates-list');
    const unList = document.getElementById('unused-list');
    
    dupList.innerHTML = duplicates.length ? '' : '<p style="color:#666">Nenhum arquivo duplicado encontrado.</p>';
    duplicates.forEach(f => {
        const original = files.find(orig => orig.id === f.duplicateOf);
        dupList.innerHTML += `
            <div class="cleanup-item">
                <div class="info">
                    <span style="font-size:24px">${f.icon}</span>
                    <div>
                        <strong>${f.name}</strong><br>
                        <small style="color:#888">Cópia de: ${original ? original.name : 'Desconhecido'} - ${(f.size/1000).toFixed(1)} MB</small>
                    </div>
                </div>
                <button class="btn-delete" onclick="deleteFile(${f.id})">Apagar Cópia</button>
            </div>
        `;
    });

    unList.innerHTML = unused.length ? '' : '<p style="color:#666">Nenhum arquivo antigo encontrado.</p>';
    unused.forEach(f => {
        unList.innerHTML += `
            <div class="cleanup-item">
                <div class="info">
                    <span style="font-size:24px">${f.icon}</span>
                    <div>
                        <strong>${f.name}</strong><br>
                        <small style="color:#888">Último acesso: ${f.lastOpened} - ${(f.size/1000).toFixed(1)} MB</small>
                    </div>
                </div>
                <button class="btn-delete" onclick="deleteFile(${f.id})">Apagar Arquivo</button>
            </div>
        `;
    });
}
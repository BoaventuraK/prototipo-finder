// Banco de Dados Expandido Completo
let fileSystem = [
    { id: 1, name: "TCC", type: "folder", size: 5000, date: "2023-09-15", focus: "faculdade", tags: ["estudo"], customIcon: "📁", customColor: "transparent", contents: ["capa.pdf", "pesquisa.docx"] },
    { id: 2, name: "Projetos", type: "folder", size: 1024, date: "2023-10-20", focus: "trabalho", tags: ["código"], customIcon: "📁", customColor: "transparent", contents: ["index.html", "app.js"] },
    { id: 3, name: "Artigo.pdf", type: "document", size: 25, date: "2023-10-25", focus: "faculdade", tags: ["estudo"] },
    { id: 4, name: "Relatório.docx", type: "document", size: 15, date: "2023-10-21", focus: "trabalho", tags: ["finanças"] },
    { id: 5, name: "Relatório_Cópia.docx", type: "document", size: 15, date: "2023-10-21", focus: "trabalho", tags: ["finanças"], isDuplicate: true },
    { id: 6, name: "Foto.png", type: "image", size: 3000, date: "2023-10-01", focus: "pessoal", tags: ["lazer"] },
    { id: 7, name: "Instalador.iso", type: "document", size: 2500000, date: "2021-01-01", focus: "pessoal", tags: ["sistema"], unused: true }
];

let currentFocus = 'all';
let isGraphView = false;
let currentSelectedItem = null;

const grid = document.getElementById('file-grid');
const graphView = document.getElementById('graph-view');
const contextMenu = document.getElementById('context-menu');
const tooltip = document.getElementById('folder-preview');

/* ==========================================
   RENDERIZAÇÃO PRINCIPAL (GRID)
   ========================================== */
function renderGrid() {
    const filter = document.getElementById('filter-select').value;
    const sort = document.getElementById('sort-select').value;
    const folderOrder = document.getElementById('folder-order-select').value;

    let filtered = fileSystem.filter(item => {
        const matchType = (filter === 'all' || item.type === filter);
        const matchFocus = (currentFocus === 'all' || item.focus === currentFocus);
        return matchType && matchFocus && !item.isDuplicate;
    });

    filtered.sort((a, b) => {
        if (a.type === 'folder' && b.type !== 'folder') return folderOrder === 'first' ? -1 : 1;
        if (a.type !== 'folder' && b.type === 'folder') return folderOrder === 'first' ? 1 : -1;
        if (sort === 'name') return a.name.localeCompare(b.name);
        if (sort === 'size') return b.size - a.size;
        if (sort === 'date') return new Date(b.date) - new Date(a.date);
    });

    grid.innerHTML = '';
    filtered.forEach(item => {
        const el = document.createElement('div');
        el.className = 'item';

        let iconHtml = '';
        if (item.type === 'folder') {
            const bg = item.customColor !== 'transparent' ? item.customColor : 'transparent';
            iconHtml = `<div class="custom-folder" style="background-color: ${bg};">${item.customIcon}</div>`;

            // Hover de Preview
            el.addEventListener('mouseenter', (e) => showPreview(e, item));
            el.addEventListener('mouseleave', hidePreview);
            el.addEventListener('mousemove', movePreview);
        } else {
            iconHtml = `<div class="icon">${item.type === 'image' ? '🖼️' : '📄'}</div>`;
        }

        el.innerHTML = `
            ${iconHtml}
            <div class="name">${item.name}</div>
            <button class="item-options" onclick="openContext(event, ${item.id})" title="Opções">⋮</button>
        `;
        grid.appendChild(el);
    });
}

/* ==========================================
   PREVIEW DA PASTA NO HOVER
   ========================================== */
function showPreview(e, folder) {
    if (window.innerWidth <= 768) return; // Não abre em mobile
    let contentList = folder.contents ? folder.contents.map(c => `<li>📄 ${c}</li>`).join('') : '<li>Vazia</li>';
    tooltip.innerHTML = `<strong>${folder.name}</strong><ul>${contentList}</ul>`;
    tooltip.classList.remove('hidden');
    movePreview(e);
}

function hidePreview() { tooltip.classList.add('hidden'); }

function movePreview(e) {
    tooltip.style.left = e.pageX + 15 + 'px';
    tooltip.style.top = e.pageY + 15 + 'px';
}

/* ==========================================
   NAVEGAÇÃO EM GRAFO
   ========================================== */
function toggleViewMode() {
    isGraphView = !isGraphView;
    if (isGraphView) {
        grid.classList.add('hidden');
        graphView.classList.remove('hidden');
        renderGraph();
    } else {
        grid.classList.remove('hidden');
        graphView.classList.add('hidden');
        renderGrid();
    }
}

function renderGraph() {
    const container = document.getElementById('graph-container');
    container.innerHTML = '';
    let tagsMap = {};

    fileSystem.forEach(item => {
        if (!item.isDuplicate && (currentFocus === 'all' || item.focus === currentFocus)) {
            if (item.tags) {
                item.tags.forEach(tag => {
                    if (!tagsMap[tag]) tagsMap[tag] = [];
                    tagsMap[tag].push(item);
                });
            }
        }
    });

    for (const [tag, items] of Object.entries(tagsMap)) {
        const node = document.createElement('div');
        node.className = 'graph-node';

        const itemsHtml = items.map(item => {
            let icon = item.type === 'folder' ?
                `<div class="custom-folder" style="background-color:${item.customColor !== 'transparent'?item.customColor:'transparent'}">${item.customIcon}</div>` :
                `<div class="icon">${item.type === 'image' ? '🖼️' : '📄'}</div>`;
            return `<div class="graph-item">${icon}<div>${item.name}</div></div>`;
        }).join('');

        node.innerHTML = `
            <div class="graph-tag">#${tag}</div>
            <div class="graph-links">${itemsHtml}</div>
        `;
        container.appendChild(node);
    }
}

/* ==========================================
   MODOS DE FOCO
   ========================================== */
function setFocus(mode) {
    currentFocus = mode;

    let pathName = mode === 'all' ? 'Início' : mode.charAt(0).toUpperCase() + mode.slice(1);
    document.getElementById('current-path').innerText = `/home/ubuntu/${mode === 'all' ? '' : pathName}`;

    isGraphView ? renderGraph() : renderGrid();
}

/* ==========================================
   OPERAÇÕES DE CONTEXTO E MODAIS
   ========================================== */
function openContext(e, id) {
    e.stopPropagation();
    hidePreview();
    currentSelectedItem = fileSystem.find(f => f.id === id);
    const options = document.getElementById('context-options');
    options.innerHTML = '';

    if (currentSelectedItem.type === 'folder') {
        options.innerHTML = `<li onclick="openFolderModal()">🎨 Personalizar Pasta</li>`;
    } else {
        options.innerHTML = `<li onclick="openConvertModal()">🔄 Converter Arquivo</li>`;
    }

    contextMenu.style.top = e.pageY + 'px';
    contextMenu.style.left = e.pageX + 'px';
    contextMenu.classList.remove('hidden');
}

document.addEventListener('click', () => contextMenu.classList.add('hidden'));

function closeModals() {
    document.querySelectorAll('.modal').forEach(m => m.classList.add('hidden'));
}

function openFolderModal() {
    document.getElementById('folder-icon-input').value = currentSelectedItem.customIcon || '📁';
    document.getElementById('folder-color-input').value = currentSelectedItem.customColor !== 'transparent' ? currentSelectedItem.customColor : '#E95420';
    document.getElementById('modal-folder').classList.remove('hidden');
}

function saveFolderCustomization() {
    currentSelectedItem.customIcon = document.getElementById('folder-icon-input').value;
    currentSelectedItem.customColor = document.getElementById('folder-color-input').value;
    closeModals();
    isGraphView ? renderGraph() : renderGrid();
}

function openConvertModal() {
    document.getElementById('convert-filename').innerText = `Convertendo: ${currentSelectedItem.name}`;
    document.getElementById('modal-convert').classList.remove('hidden');
}

function executeConversion() {
    const format = document.getElementById('convert-format').value;
    alert(`O arquivo ${currentSelectedItem.name} foi convertido para .${format} com sucesso!`);
    closeModals();
}

/* ==========================================
   ABAS E LIBERAR ESPAÇO
   ========================================== */
function switchTab(tab, element) {
    document.querySelectorAll('.sidebar li').forEach(li => li.classList.remove('active'));
    element.classList.add('active');

    const toolbar = document.getElementById('main-toolbar');
    const cleanupView = document.getElementById('cleanup-view');

    if (tab === 'files') {
        toolbar.classList.remove('hidden');
        cleanupView.classList.add('hidden');
        isGraphView ? graphView.classList.remove('hidden') : grid.classList.remove('hidden');
    } else {
        toolbar.classList.add('hidden');
        grid.classList.add('hidden');
        graphView.classList.add('hidden');
        cleanupView.classList.remove('hidden');
        renderCleanup();
    }
}

function renderCleanup() {
    const duplicates = document.getElementById('cleanup-duplicates');
    const unused = document.getElementById('cleanup-unused');
    duplicates.innerHTML = '';
    unused.innerHTML = '';

    fileSystem.forEach(file => {
        if (file.isDuplicate || file.unused) {
            const el = document.createElement('div');
            el.className = 'cleanup-item';
            el.innerHTML = `
                <div>
                    <strong>${file.name}</strong> <br>
                    <small>Tamanho: ${(file.size / 1024).toFixed(2)} MB</small>
                </div>
                <button onclick="removeFile(${file.id})">Remover</button>
            `;
            if (file.isDuplicate) duplicates.appendChild(el);
            else unused.appendChild(el);
        }
    });
}

function removeFile(id) {
    fileSystem = fileSystem.filter(f => f.id !== id);
    renderCleanup();
    isGraphView ? renderGraph() : renderGrid();
    alert("Arquivo removido liberando espaço!");
}

// Inicializa
renderGrid();
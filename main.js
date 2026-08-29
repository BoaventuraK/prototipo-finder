// Simulação de Banco de Dados de Arquivos
const fileSystem = [
    { name: "Projetos", type: "folder", size: 1024, date: "2023-10-20", contents: ["site.html", "app.js", "logo.png"] },
    { name: "Fotos Viagem", type: "folder", size: 5000, date: "2023-09-15", contents: ["img1.jpg", "img2.jpg"] },
    { name: "Relatório.docx", type: "document", size: 25, date: "2023-10-25" },
    { name: "Planilha.xlsx", type: "document", size: 15, date: "2023-10-21" },
    { name: "Wallpaper.png", type: "image", size: 3000, date: "2023-10-01" }
];

const unusedFiles = [
    { name: "instalador_antigo.iso", size: "2.5 GB", lastUsed: "Há 1 ano" },
    { name: "video_backup.mp4", size: "1.2 GB", lastUsed: "Há 8 meses" }
];

// Elementos da DOM
const grid = document.getElementById('file-grid');
const tooltip = document.getElementById('folder-preview');

// Nova Funcionalidade: Filtrar e Ordenar
// Nova Funcionalidade: Filtrar, Ordenar e Agrupar Pastas
function renderGrid() {
    const filter = document.getElementById('filter-select').value;
    const sort = document.getElementById('sort-select').value;
    const folderOrder = document.getElementById('folder-order-select').value; // Novo input

    // 1. Filtro
    let filtered = fileSystem.filter(item => filter === 'all' || item.type === filter);

    // 2. Sort (Ordenação Composta)
    filtered.sort((a, b) => {
        const aIsFolder = a.type === 'folder';
        const bIsFolder = b.type === 'folder';

        // Regra Primária: Agrupamento de Pastas (Primeiro ou Último)
        if (aIsFolder !== bIsFolder) {
            if (folderOrder === 'first') {
                return aIsFolder ? -1 : 1; // Pastas sobem (-1)
            } else {
                return aIsFolder ? 1 : -1; // Pastas descem (1)
            }
        }

        // Regra Secundária: Ordenação do Usuário (aplica-se entre itens do mesmo tipo de grupo)
        if (sort === 'name') return a.name.localeCompare(b.name);
        if (sort === 'size') return b.size - a.size; // Maior primeiro
        if (sort === 'date') return new Date(b.date) - new Date(a.date); // Mais recente primeiro
    });

    grid.innerHTML = '';

    // 3. Renderização na Tela
    filtered.forEach(item => {
        const el = document.createElement('div');
        el.className = 'item';

        let icon = item.type === 'folder' ? '📁' : item.type === 'image' ? '🖼️' : '📄';
        el.innerHTML = `<div class="icon">${icon}</div><div class="name">${item.name}</div>`;

        // Preview da pasta no Hover
        if (item.type === 'folder') {
            el.addEventListener('mouseenter', (e) => showPreview(e, item));
            el.addEventListener('mouseleave', hidePreview);
            el.addEventListener('mousemove', movePreview);
        }

        grid.appendChild(el);
    });
}

// Lógica do Preview de Pasta
function showPreview(e, folder) {
    let contentList = folder.contents.map(c => `<li>📄 ${c}</li>`).join('');
    tooltip.innerHTML = `<strong>${folder.name}</strong><ul>${contentList}</ul>`;
    tooltip.classList.remove('hidden');
    movePreview(e);
}

function hidePreview() {
    tooltip.classList.add('hidden');
}

function movePreview(e) {
    tooltip.style.left = e.pageX + 15 + 'px';
    tooltip.style.top = e.pageY + 15 + 'px';
}

// Nova Funcionalidade: Aba de Liberar Espaço
function renderCleanup() {
    const cleanupList = document.getElementById('cleanup-list');
    cleanupList.innerHTML = '';

    unusedFiles.forEach(file => {
        const el = document.createElement('div');
        el.className = 'cleanup-item';
        el.innerHTML = `
            <div>
                <strong>${file.name}</strong> <br>
                <small>Tamanho: ${file.size} | Último acesso: ${file.lastUsed}</small>
            </div>
            <button onclick="alert('${file.name} removido com sucesso!')">Remover</button>
        `;
        cleanupList.appendChild(el);
    });
}

// Controle de Abas
function switchTab(tab) {
    const fileView = document.getElementById('file-grid');
    const cleanupView = document.getElementById('cleanup-view');
    const toolbar = document.getElementById('main-toolbar');

    if (tab === 'files') {
        fileView.classList.remove('hidden');
        toolbar.classList.remove('hidden');
        cleanupView.classList.add('hidden');
        renderGrid();
    } else if (tab === 'cleanup') {
        fileView.classList.add('hidden');
        toolbar.classList.add('hidden');
        cleanupView.classList.remove('hidden');
        renderCleanup();
    }
}

// Inicialização
renderGrid();
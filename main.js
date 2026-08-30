/* =========================================================
   UBUNTU FILES - PROTÓTIPO
   ========================================================= */


/* =========================================================
   DADOS DOS ARQUIVOS
   ========================================================= */

let files = [

    {
        id: 1,
        name: "Faculdade",
        type: "folder",
        icon: "🎓",
        size: 0,
        date: "2026-08-29",
        focus: "faculdade",
        tags: ["faculdade", "uneb", "estudos"]
    },

    {
        id: 2,
        name: "Projetos",
        type: "folder",
        icon: "📁",
        size: 0,
        date: "2026-08-28",
        focus: "trabalho",
        tags: ["projetos", "programação"]
    },

    {
        id: 3,
        name: "Fotos",
        type: "folder",
        icon: "🖼️",
        size: 0,
        date: "2026-08-20",
        focus: "pessoal",
        tags: ["fotos", "pessoal"]
    },

    {
        id: 4,
        name: "Documentos",
        type: "folder",
        icon: "📂",
        size: 0,
        date: "2026-08-21",
        focus: "all",
        tags: ["documentos"]
    },

    {
        id: 5,
        name: "Trabalho",
        type: "folder",
        icon: "💼",
        size: 0,
        date: "2026-08-25",
        focus: "trabalho",
        tags: ["trabalho", "projetos"]
    },

    {
        id: 6,
        name: "Downloads",
        type: "folder",
        icon: "📥",
        size: 0,
        date: "2026-08-30",
        focus: "all",
        tags: ["downloads"]
    },


    {
        id: 10,
        name: "Trabalho_Final.pdf",
        type: "pdf",
        icon: "📕",
        size: 24500,
        date: "2026-08-28",
        focus: "faculdade",
        tags: ["faculdade", "uneb", "trabalho"]
    },

    {
        id: 11,
        name: "Banco_de_Dados.pdf",
        type: "pdf",
        icon: "📕",
        size: 18300,
        date: "2026-08-26",
        focus: "faculdade",
        tags: ["faculdade", "database", "estudos"]
    },

    {
        id: 12,
        name: "Redes_de_Computadores.pdf",
        type: "pdf",
        icon: "📕",
        size: 32100,
        date: "2026-08-24",
        focus: "faculdade",
        tags: ["faculdade", "redes", "estudos"]
    },

    {
        id: 13,
        name: "Projeto_Robotica.pdf",
        type: "pdf",
        icon: "📕",
        size: 45200,
        date: "2026-08-22",
        focus: "trabalho",
        tags: ["robotica", "ros2", "programação"]
    },

    {
        id: 14,
        name: "Curriculo.pdf",
        type: "pdf",
        icon: "📕",
        size: 5300,
        date: "2026-07-15",
        focus: "pessoal",
        tags: ["curriculo", "trabalho"]
    },


    {
        id: 20,
        name: "Foto_Formatura.jpg",
        type: "image",
        icon: "🖼️",
        size: 4200,
        date: "2026-08-20",
        focus: "pessoal",
        tags: ["fotos", "faculdade", "uneb"]
    },

    {
        id: 21,
        name: "Evento_UNEB.jpg",
        type: "image",
        icon: "🖼️",
        size: 5100,
        date: "2026-08-18",
        focus: "faculdade",
        tags: ["fotos", "uneb", "faculdade"]
    },

    {
        id: 22,
        name: "Robotica.jpg",
        type: "image",
        icon: "🖼️",
        size: 8200,
        date: "2026-08-17",
        focus: "trabalho",
        tags: ["robotica", "fotos", "projetos"]
    },

    {
        id: 23,
        name: "Equipe.jpg",
        type: "image",
        icon: "🖼️",
        size: 7200,
        date: "2026-08-15",
        focus: "trabalho",
        tags: ["equipe", "projetos", "fotos"]
    },

    {
        id: 24,
        name: "Viagem.jpg",
        type: "image",
        icon: "🖼️",
        size: 9300,
        date: "2026-07-20",
        focus: "pessoal",
        tags: ["fotos", "viagem", "pessoal"]
    },

    {
        id: 25,
        name: "Praia.jpg",
        type: "image",
        icon: "🖼️",
        size: 11200,
        date: "2026-07-18",
        focus: "pessoal",
        tags: ["fotos", "viagem", "pessoal"]
    },


    {
        id: 30,
        name: "algoritmos.pdf",
        type: "pdf",
        icon: "📕",
        size: 18200,
        date: "2026-08-12",
        focus: "faculdade",
        tags: ["faculdade", "programação", "estudos"]
    },

    {
        id: 31,
        name: "estrutura_dados.pdf",
        type: "pdf",
        icon: "📕",
        size: 27600,
        date: "2026-08-10",
        focus: "faculdade",
        tags: ["faculdade", "programação", "estudos"]
    },

    // {
    //     id: 32,
    //     name: "apresentacao.pptx",
    //     type: "document",
    //     icon: "📊",
    //     size: 8900,
    //     date: "2026-08-08",
    //     focus: "faculdade",
    //     tags: ["faculdade", "apresentação"]
    // },

    // {
    //     id: 33,
    //     name: "relatorio.docx",
    //     type: "document",
    //     icon: "📄",
    //     size: 4300,
    //     date: "2026-08-05",
    //     focus: "trabalho",
    //     tags: ["trabalho", "relatorio", "projetos"]
    // },

    // {
    //     id: 34,
    //     name: "anotacoes.txt",
    //     type: "document",
    //     icon: "📝",
    //     size: 120,
    //     date: "2026-07-30",
    //     focus: "faculdade",
    //     tags: ["faculdade", "estudos"]
    // },

    // {
    //     id: 35,
    //     name: "codigo_robot.py",
    //     type: "document",
    //     icon: "🐍",
    //     size: 15,
    //     date: "2026-08-29",
    //     focus: "trabalho",
    //     tags: ["programação", "robotica", "python", "ros2"]
    // },

    // {
    //     id: 36,
    //     name: "navigation.yaml",
    //     type: "document",
    //     icon: "⚙️",
    //     size: 8,
    //     date: "2026-08-29",
    //     focus: "trabalho",
    //     tags: ["ros2", "robotica", "programação"]
    // }

];


/* =========================================================
   VARIÁVEIS
   ========================================================= */

let currentFocus = "all";

let currentFileForAction = null;

let selectedTagFile = null;

let graphMode = false;

let graphResizeTimer = null;


/* =========================================================
   INICIALIZAÇÃO
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    renderGrid();

    renderCleanup();

    updateAvailableTags();

    document.addEventListener("click", closeContextMenu);

    window.addEventListener("resize", () => {

        clearTimeout(graphResizeTimer);

        graphResizeTimer = setTimeout(() => {
            if (graphMode && !document.getElementById("graph-view").classList.contains("hidden")) {
                renderGraph();
            }
        }, 120);

    });

});


/* =========================================================
   TROCA DE ABA
   ========================================================= */

function switchTab(tab, element) {

    document
        .querySelectorAll("#sidebar-menu li")
        .forEach(li => li.classList.remove("active"));

    if (element) {
        element.classList.add("active");
    }

    document
        .getElementById("file-grid")
        .classList.toggle("hidden", tab !== "files" || graphMode);

    document
        .getElementById("graph-view")
        .classList.toggle("hidden", tab !== "files" || !graphMode);

    document
        .getElementById("cleanup-view")
        .classList.toggle("hidden", tab !== "cleanup");

    if (tab === "files") {
        renderCurrentView();
    }
}


/* =========================================================
   FOCO
   ========================================================= */

function setFocus(focus) {

    currentFocus = focus;

    document.getElementById("current-path").textContent =
        focus === "all" ?
        "/home/ubuntu" :
        `/home/ubuntu/${focus}`;

    renderCurrentView();
}


/* =========================================================
   FILTROS COMPARTILHADOS ENTRE GRADE E GRAFO
   ========================================================= */

function getVisibleFiles() {

    const filter =
        document.getElementById("filter-select").value;

    const order =
        document.getElementById("folder-order-select").value;

    const sort =
        document.getElementById("sort-select").value;


    const visibleFiles = files.filter(file => {

        const focusMatch =
            currentFocus === "all" ||
            file.focus === currentFocus;

        const typeMatch =
            filter === "all" ||
            file.type === filter;

        return focusMatch && typeMatch;

    });


    return visibleFiles.sort((a, b) => {

        if (order === "first") {
            if (a.type === "folder" && b.type !== "folder") return -1;
            if (a.type !== "folder" && b.type === "folder") return 1;
        }

        if (order === "last") {
            if (a.type === "folder" && b.type !== "folder") return 1;
            if (a.type !== "folder" && b.type === "folder") return -1;
        }

        if (sort === "size") {
            return b.size - a.size;
        }

        if (sort === "date") {
            return new Date(b.date) - new Date(a.date);
        }

        return a.name.localeCompare(b.name, "pt-BR");

    });
}


function renderCurrentView() {

    if (graphMode) {
        renderGraph();
        return;
    }

    renderGrid();
}


/* =========================================================
   RENDER GRID
   ========================================================= */

function renderGrid() {

    const grid = document.getElementById("file-grid");
    const visibleFiles = getVisibleFiles();


    grid.innerHTML = "";


    visibleFiles.forEach(file => {

        const item = document.createElement("div");

        item.className = "item";

        item.dataset.id = file.id;


        let iconHtml;

        if (file.type === "folder") {

            iconHtml = `
                <div
                    class="custom-folder"
                    style="background:${getFolderColor(file)}">
                    ${file.icon}
                </div>
            `;

        } else {

            iconHtml = `
                <div class="icon">
                    ${file.icon}
                </div>
            `;

        }


        const tagsHtml = file.tags
            .map(tag => `<span class="item-tag">#${tag}</span>`)
            .join("");


        item.innerHTML = `

            ${iconHtml}

            <div class="name">
                ${file.name}
            </div>

            <div class="metadata">
                ${formatSize(file.size)}
            </div>

            <div class="item-tags">
                ${tagsHtml}
            </div>

            <button
                class="item-options"
                onclick="event.stopPropagation(); openContextMenu(event, ${file.id})">
                ⋮
            </button>

        `;


        item.addEventListener("dblclick", () => {

            if (file.type === "folder") {

                document.getElementById("current-path")
                    .textContent += "/" + file.name;

            } else {

                alert(`Abrindo: ${file.name}`);

            }

        });


        item.addEventListener("contextmenu", event => {

            event.preventDefault();

            openContextMenu(event, file.id);

        });


        grid.appendChild(item);

    });

}


/* =========================================================
   TAMANHO
   ========================================================= */

function formatSize(size) {

    if (size === 0) {
        return "Pasta";
    }

    if (size < 1000) {
        return `${size} KB`;
    }

    return `${(size / 1000).toFixed(1)} MB`;
}


/* =========================================================
   COR DAS PASTAS
   ========================================================= */

function getFolderColor(file) {

    if (file.color) {
        return file.color;
    }

    return "#e8a317";
}


/* =========================================================
   CONTEXT MENU
   ========================================================= */

function openContextMenu(event, id) {

    event.stopPropagation();

    const file = files.find(f => f.id === id);

    if (!file) return;

    currentFileForAction = id;

    const menu =
        document.getElementById("context-menu");

    const options =
        document.getElementById("context-options");

    options.innerHTML = "";


    if (file.type === "folder") {

        addContextOption(
            "🎨 Personalizar pasta",
            () => openFolderModal(file)
        );

    }


    addContextOption(
        "🏷️ Adicionar tags",
        () => openTagManager(file.id)
    );


    if (file.type !== "folder") {

        addContextOption(
            "🔄 Converter arquivo",
            () => openConvertModal(file)
        );

    }


    addContextOption(
        "🗑️ Excluir",
        () => deleteFile(file.id)
    );


    menu.classList.remove("hidden");

    menu.style.left = `${event.clientX}px`;

    menu.style.top = `${event.clientY}px`;
}


function addContextOption(text, action) {

    const li = document.createElement("li");

    li.textContent = text;

    li.addEventListener("click", event => {

        event.stopPropagation();

        closeContextMenu();

        action();

    });

    document
        .getElementById("context-options")
        .appendChild(li);
}


function closeContextMenu() {

    document
        .getElementById("context-menu")
        .classList.add("hidden");

}


/* =========================================================
   PERSONALIZAR PASTA
   ========================================================= */

function openFolderModal(file) {

    currentFileForAction = file.id;

    document.getElementById("folder-icon-input").value =
        file.icon;

    document.getElementById("folder-color-input").value =
        file.color || "#e8a317";

    document
        .getElementById("modal-folder")
        .classList.remove("hidden");
}


function saveFolderCustomization() {

    const file =
        files.find(f => f.id === currentFileForAction);

    if (!file) return;

    file.icon =
        document.getElementById("folder-icon-input").value ||
        "📁";

    file.color =
        document.getElementById("folder-color-input").value;

    closeModals();

    renderGrid();

}


/* =========================================================
   MODAL TAGS
   ========================================================= */

function openTagManager(fileId = null) {

    const modal =
        document.getElementById("modal-tags");

    const select =
        document.getElementById("tag-file-select");


    select.innerHTML = "";


    files.forEach(file => {

        const option =
            document.createElement("option");

        option.value = file.id;

        option.textContent =
            `${file.icon} ${file.name}`;

        select.appendChild(option);

    });


    if (fileId !== null) {

        select.value = fileId;

    }


    selectedTagFile =
        Number(select.value);


    select.onchange = () => {

        selectedTagFile =
            Number(select.value);

        renderSelectedFileTags();

    };


    renderSelectedFileTags();

    updateAvailableTags();

    modal.classList.remove("hidden");
}


/* =========================================================
   TAGS DO ARQUIVO SELECIONADO
   ========================================================= */

function renderSelectedFileTags() {

    const file =
        files.find(f => f.id === selectedTagFile);

    const container =
        document.getElementById("selected-file-tags");

    container.innerHTML = "";


    if (!file) return;


    file.tags.forEach(tag => {

        const chip =
            document.createElement("span");

        chip.className = "tag-chip";

        chip.innerHTML = `
            #${tag}
            <button onclick="removeTag('${tag}')">
                ×
            </button>
        `;

        container.appendChild(chip);

    });

}


/* =========================================================
   ADICIONAR TAG
   ========================================================= */

function addTagToSelectedFile() {

    const input =
        document.getElementById("new-tag-input");

    let tag =
        input.value.trim().toLowerCase();


    if (!tag) return;


    const file =
        files.find(f => f.id === selectedTagFile);

    if (!file) return;


    tag = tag.replace(/\s+/g, "-");


    if (!file.tags.includes(tag)) {

        file.tags.push(tag);

    }


    input.value = "";

    renderSelectedFileTags();

    updateAvailableTags();

}


/* =========================================================
   REMOVER TAG
   ========================================================= */

function removeTag(tag) {

    const file =
        files.find(f => f.id === selectedTagFile);

    if (!file) return;

    file.tags =
        file.tags.filter(t => t !== tag);

    renderSelectedFileTags();

    updateAvailableTags();

}


/* =========================================================
   TAGS EXISTENTES
   ========================================================= */

function getAllTags() {

    const tags = new Set();

    files.forEach(file => {

        file.tags.forEach(tag => {
            tags.add(tag);
        });

    });

    return [...tags].sort();
}


function updateAvailableTags() {

    const container =
        document.getElementById("available-tags-list");

    if (!container) return;

    container.innerHTML = "";


    getAllTags().forEach(tag => {

        const button =
            document.createElement("button");

        button.className = "available-tag";

        button.textContent = "#" + tag;

        button.onclick = () => {

            document.getElementById("new-tag-input").value = tag;

        };

        container.appendChild(button);

    });

}


/* =========================================================
   SALVAR TAGS
   ========================================================= */

function saveTags() {

    renderGrid();

    if (graphMode) {
        renderGraph();
    }

    closeModals();

}


/* =========================================================
   GRAFO
   ========================================================= */

function toggleViewMode() {

    graphMode = !graphMode;


    const grid =
        document.getElementById("file-grid");

    const graph =
        document.getElementById("graph-view");

    const button =
        document.getElementById("view-mode-button");


    if (graphMode) {

        grid.classList.add("hidden");

        graph.classList.remove("hidden");

        button.innerHTML = "🗂️ Ver arquivos";

        button.setAttribute("aria-pressed", "true");

        renderGraph();

    } else {

        graph.classList.add("hidden");

        grid.classList.remove("hidden");

        button.innerHTML = "🕸️ Ver grafo";

        button.setAttribute("aria-pressed", "false");

    }

}


/* =========================================================
   CONSTRUÇÃO DO GRAFO
   ========================================================= */

function renderGraph() {

    const container =
        document.getElementById("graph-container");

    container.innerHTML = "";

    if (container.clientWidth === 0 || container.clientHeight === 0) {
        return;
    }

    const contextFiles = getVisibleFiles();
    const selectedTag = updateGraphTagOptions(contextFiles);
    const graphFiles = contextFiles.filter(file =>
        file.tags.length > 0 &&
        (selectedTag === "all" || file.tags.includes(selectedTag))
    );

    const graphTags = selectedTag === "all" ?
        [...new Set(graphFiles.flatMap(file => file.tags))].sort((a, b) =>
            a.localeCompare(b, "pt-BR")
        ) :
        [selectedTag];

    const connections = graphFiles.reduce((total, file) =>
        total + file.tags.filter(tag => graphTags.includes(tag)).length, 0
    );

    document.getElementById("graph-info").textContent =
        `${graphFiles.length} ${graphFiles.length === 1 ? "arquivo" : "arquivos"} • ` +
        `${graphTags.length} ${graphTags.length === 1 ? "tag" : "tags"} • ` +
        `${connections} ${connections === 1 ? "conexão" : "conexões"}`;

    if (graphFiles.length === 0) {
        const empty = document.createElement("div");
        empty.className = "graph-empty";
        empty.innerHTML = `
            <span>🔎</span>
            <strong>Nenhum arquivo encontrado</strong>
            <p>Ajuste o foco, o tipo de arquivo ou a tag selecionada.</p>
        `;
        container.appendChild(empty);
        return;
    }

    const width = Math.max(container.clientWidth, 720);
    const rowHeight = 72;
    const height = Math.max(
        container.clientHeight,
        Math.max(graphTags.length, graphFiles.length) * rowHeight + 100
    );
    const tagX = 125;
    const fileX = width - 145;
    const tagPositions = getGraphColumnPositions(graphTags, tagX, height);
    const filePositions = getGraphColumnPositions(graphFiles, fileX, height);

    const canvas = document.createElement("div");
    canvas.className = "graph-canvas";
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.classList.add("graph-svg");
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);
    svg.setAttribute("aria-hidden", "true");
    canvas.appendChild(svg);

    graphFiles.forEach(file => {
        const filePosition = filePositions.get(file);

        file.tags
            .filter(tag => tagPositions.has(tag))
            .forEach(tag => {
                const tagPosition = tagPositions.get(tag);
                const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
                const middleX = (tagPosition.x + filePosition.x) / 2;

                path.setAttribute(
                    "d",
                    `M ${tagPosition.x + 72} ${tagPosition.y} ` +
                    `C ${middleX} ${tagPosition.y}, ${middleX} ${filePosition.y}, ` +
                    `${filePosition.x - 92} ${filePosition.y}`
                );
                path.classList.add("graph-line");
                path.dataset.tag = tag;
                path.dataset.fileId = file.id;
                svg.appendChild(path);
            });
    });

    graphTags.forEach(tag => {
        const position = tagPositions.get(tag);
        const element = createGraphNode("tag", tag, position);

        element.title = `Mostrar somente arquivos com a tag #${tag}`;
        element.addEventListener("click", () => {
            document.getElementById("graph-tag-filter").value = tag;
            renderGraph();
        });
        addGraphHighlightEvents(element, "tag", tag, canvas, graphFiles, graphTags);
        canvas.appendChild(element);
    });

    graphFiles.forEach(file => {
        const position = filePositions.get(file);
        const element = createGraphNode("file", file, position);

        element.title = `${file.name} — clique para gerenciar tags`;
        element.addEventListener("click", () => openTagManager(file.id));
        addGraphHighlightEvents(element, "file", String(file.id), canvas, graphFiles, graphTags);
        canvas.appendChild(element);
    });

    const legend = document.createElement("div");
    legend.className = "graph-legend";
    legend.innerHTML = `
        <span><i class="legend-tag"></i> Tags</span>
        <span><i class="legend-file"></i> Arquivos e pastas</span>
        <small>Passe o mouse sobre um item para destacar suas relações</small>
    `;
    canvas.appendChild(legend);
    container.appendChild(canvas);
}


/* =========================================================
   APOIO AO GRAFO
   ========================================================= */

function updateGraphTagOptions(contextFiles) {

    const select = document.getElementById("graph-tag-filter");
    const previousValue = select.value || "all";
    const tags = [...new Set(contextFiles.flatMap(file => file.tags))]
        .sort((a, b) => a.localeCompare(b, "pt-BR"));

    select.innerHTML = "";

    const allOption = document.createElement("option");
    allOption.value = "all";
    allOption.textContent = "Todas as tags";
    select.appendChild(allOption);

    tags.forEach(tag => {
        const option = document.createElement("option");
        option.value = tag;
        option.textContent = `#${tag}`;
        select.appendChild(option);
    });

    select.value = tags.includes(previousValue) ? previousValue : "all";
    return select.value;
}


function getGraphColumnPositions(items, x, height) {

    const positions = new Map();
    const top = 78;
    const bottom = height - 42;
    const gap = items.length > 1 ? (bottom - top) / (items.length - 1) : 0;

    items.forEach((item, index) => {
        positions.set(item, {
            x,
            y: items.length === 1 ? height / 2 : top + index * gap
        });
    });

    return positions;
}


function createGraphNode(type, value, position) {

    const element = document.createElement("button");
    element.type = "button";
    element.className = `graph-node ${type === "tag" ? "tag-node" : "file-node"}`;
    element.dataset.kind = type;
    element.dataset.value = type === "tag" ? value : value.id;
    element.style.left = `${position.x}px`;
    element.style.top = `${position.y}px`;

    const icon = document.createElement("span");
    icon.className = "node-icon";
    icon.textContent = type === "tag" ? "#" : value.icon;

    const content = document.createElement("span");
    content.className = "node-content";

    const name = document.createElement("span");
    name.className = "node-name";
    name.textContent = type === "tag" ? value : value.name;
    content.appendChild(name);

    if (type === "file") {
        const meta = document.createElement("span");
        meta.className = "node-meta";
        meta.textContent = `${formatSize(value.size)} • ${value.tags.length} ` +
            `${value.tags.length === 1 ? "tag" : "tags"}`;
        content.appendChild(meta);
    }

    element.append(icon, content);
    return element;
}


function addGraphHighlightEvents(element, kind, value, canvas, graphFiles, graphTags) {

    element.addEventListener("mouseenter", () => {
        const relatedFiles = new Set();
        const relatedTags = new Set();

        if (kind === "tag") {
            relatedTags.add(value);
            graphFiles
                .filter(file => file.tags.includes(value))
                .forEach(file => relatedFiles.add(String(file.id)));
        } else {
            relatedFiles.add(value);
            const file = graphFiles.find(item => String(item.id) === value);
            if (!file) return;
            file.tags
                .filter(tag => graphTags.includes(tag))
                .forEach(tag => relatedTags.add(tag));
        }

        canvas.querySelectorAll(".graph-node").forEach(node => {
            const related = node.dataset.kind === "tag" ?
                relatedTags.has(node.dataset.value) :
                relatedFiles.has(node.dataset.value);
            node.classList.toggle("is-dimmed", !related);
            node.classList.toggle("is-highlighted", related);
        });

        canvas.querySelectorAll(".graph-line").forEach(line => {
            const related = kind === "tag" ?
                line.dataset.tag === value :
                line.dataset.fileId === value;
            line.classList.toggle("is-dimmed", !related);
            line.classList.toggle("highlight", related);
        });
    });

    element.addEventListener("mouseleave", () => {
        canvas.querySelectorAll(".graph-node, .graph-line").forEach(item => {
            item.classList.remove("is-dimmed", "is-highlighted", "highlight");
        });
    });
}


/* =========================================================
   LIMPEZA
   ========================================================= */

function renderCleanup() {

    const duplicateContainer =
        document.getElementById("cleanup-duplicates");

    const unusedContainer =
        document.getElementById("cleanup-unused");


    duplicateContainer.innerHTML = "";

    unusedContainer.innerHTML = "";


    const duplicates = [
        files.find(f => f.name === "Evento_UNEB.jpg"),
        files.find(f => f.name === "anotacoes.txt")
    ].filter(Boolean);


    duplicates.forEach(file => {

        const item =
            document.createElement("div");

        item.className = "cleanup-item";

        item.innerHTML = `

            <div>
                ${file.icon}
                <strong>${file.name}</strong>
                <small>
                    ${formatSize(file.size)}
                </small>
            </div>

            <button onclick="deleteFile(${file.id})">
                Excluir
            </button>

        `;

        duplicateContainer.appendChild(item);

    });


    const unused = files
        .filter(file => file.type !== "folder")
        .slice(-3);


    unused.forEach(file => {

        const item =
            document.createElement("div");

        item.className = "cleanup-item";

        item.innerHTML = `

            <div>
                ${file.icon}
                <strong>${file.name}</strong>
                <small>
                    Modificado em ${file.date}
                </small>
            </div>

            <button onclick="deleteFile(${file.id})">
                Excluir
            </button>

        `;

        unusedContainer.appendChild(item);

    });

}


/* =========================================================
   EXCLUIR
   ========================================================= */

function deleteFile(id) {

    const file =
        files.find(f => f.id === id);

    if (!file) return;


    const confirmed =
        confirm(
            `Excluir "${file.name}"?`
        );


    if (!confirmed) return;


    files =
        files.filter(f => f.id !== id);


    renderGrid();

    renderCleanup();

    if (graphMode) {
        renderGraph();
    }

}


/* =========================================================
   CONVERSÃO
   ========================================================= */

function openConvertModal(file) {

    currentFileForAction = file.id;

    document
        .getElementById("convert-filename")
        .textContent =
        `Arquivo: ${file.name}`;


    document
        .getElementById("modal-convert")
        .classList.remove("hidden");

}


function executeConversion() {

    const file =
        files.find(f => f.id === currentFileForAction);

    if (!file) return;


    const format =
        document.getElementById("convert-format").value;


    alert(
        `Protótipo: ${file.name} seria convertido para ${format.toUpperCase()}.`
    );


    closeModals();

}


/* =========================================================
   FECHAR MODAIS
   ========================================================= */

function closeModals() {

    document
        .querySelectorAll(".modal")
        .forEach(modal => {

            modal.classList.add("hidden");

        });

}

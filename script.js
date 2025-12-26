// Base de datos de productos
const products = [
    {
        id: 1,
        name: "Boba Tea Clásico de Té Negro",
        category: "te",
        price: 6.50,
        description: "El clásico bubble tea con té negro de primera calidad, leche cremosa y perlas de tapioca dulces.",
        image: "🧋",
        features: [
            "Té negro premium",
            "Perlas de tapioca",
            "Leche entera",
            "Endulzado al gusto"
        ]
    },
    {
        id: 2,
        name: "Frappé de Fresa con Boba",
        category: "frappe",
        price: 7.99,
        description: "Delicioso frappé de fresa con perlas de tapioca. Perfecto para refrescarte en cualquier momento.",
        image: "🍓",
        features: [
            "Fresas naturales",
            "Hielo triturado",
            "Perlas de boba",
            "Nata montada opcional"
        ]
    },
    {
        id: 3,
        name: "Batido de Mango Tropical",
        category: "batido",
        price: 8.50,
        description: "Batido cremoso de mango con perlas de tapioca y un toque de coco. Sabor tropical irresistible.",
        image: "🥭",
        features: [
            "Mango natural",
            "Leche de coco",
            "Perlas de tapioca",
            "Decoración tropical"
        ]
    },
    {
        id: 4,
        name: "Té Verde Matcha con Boba",
        category: "te",
        price: 7.25,
        description: "Té verde matcha premium con leche y perlas de tapioca. Antioxidante y delicioso.",
        image: "🍵",
        features: [
            "Matcha premium",
            "Leche de almendras",
            "Perlas de tapioca",
            "Bajo en calorías"
        ]
    },
    {
        id: 5,
        name: "Frappé de Chocolate Blanco",
        category: "frappe",
        price: 8.99,
        description: "Frappé cremoso de chocolate blanco con perlas de tapioca. Dulzura en cada sorbo.",
        image: "🤍",
        features: [
            "Chocolate blanco",
            "Hielo triturado",
            "Perlas de boba",
            "Chispas de chocolate"
        ]
    },
    {
        id: 6,
        name: "Smoothie de Frutos Rojos",
        category: "smoothie",
        price: 9.50,
        description: "Smoothie nutritivo de frutos rojos con perlas de tapioca. Rico en antioxidantes.",
        image: "🫐",
        features: [
            "Arándanos y frambuesas",
            "Yogur natural",
            "Perlas de boba",
            "Sin azúcar añadido"
        ]
    },
    {
        id: 7,
        name: "Boba Tea de Taro",
        category: "te",
        price: 7.75,
        description: "Bubble tea de taro con leche y perlas de tapioca. Sabor único y exótico.",
        image: "💜",
        features: [
            "Polvo de taro natural",
            "Leche entera",
            "Perlas de tapioca",
            "Color morado característico"
        ]
    },
    {
        id: 8,
        name: "Refresco de Limón con Boba",
        category: "refresco",
        price: 5.99,
        description: "Refrescante bebida de limón con perlas de tapioca. Perfecta para el calor.",
        image: "🍋",
        features: [
            "Limón natural",
            "Agua carbonatada",
            "Perlas de tapioca",
            "Muy refrescante"
        ]
    },
    {
        id: 9,
        name: "Batido de Plátano y Miel",
        category: "batido",
        price: 8.25,
        description: "Batido cremoso de plátano con miel y perlas de tapioca. Energía natural en cada sorbo.",
        image: "🍌",
        features: [
            "Plátano maduro",
            "Miel natural",
            "Leche entera",
            "Perlas de boba"
        ]
    },
    {
        id: 10,
        name: "Frappé de Vainilla y Caramelo",
        category: "frappe",
        price: 8.75,
        description: "Frappé de vainilla con sirope de caramelo y perlas de tapioca. Delicia dulce irresistible.",
        image: "🍮",
        features: [
            "Vainilla natural",
            "Sirope de caramelo",
            "Hielo triturado",
            "Perlas de boba"
        ]
    },
    {
        id: 11,
        name: "Té de Durazno con Boba",
        category: "te",
        price: 6.99,
        description: "Refrescante té de durazno con perlas de tapioca. Sabor frutal y delicado.",
        image: "🍑",
        features: [
            "Té de durazno",
            "Miel de abeja",
            "Perlas de tapioca",
            "Rodajas de durazno"
        ]
    },
    {
        id: 12,
        name: "Smoothie de Piña Colada",
        category: "smoothie",
        price: 9.99,
        description: "Smoothie tropical de piña colada con perlas de tapioca. Vacaciones en un vaso.",
        image: "🍍",
        features: [
            "Piña natural",
            "Leche de coco",
            "Perlas de boba",
            "Decoración tropical"
        ]
    },
    {
        id: 13,
        name: "Boba Tea de Coco",
        category: "te",
        price: 7.50,
        description: "Bubble tea de coco con leche y perlas de tapioca. Sabor tropical y cremoso.",
        image: "🥥",
        features: [
            "Agua de coco",
            "Leche de coco",
            "Perlas de tapioca",
            "Coco rallado"
        ]
    },
    {
        id: 14,
        name: "Batido de Oreo con Boba",
        category: "batido",
        price: 9.25,
        description: "Batido cremoso de galletas Oreo con perlas de tapioca. Perfecto para los amantes del chocolate.",
        image: "🍪",
        features: [
            "Galletas Oreo",
            "Helado de vainilla",
            "Perlas de boba",
            "Crema batida"
        ]
    },
    {
        id: 15,
        name: "Refresco de Maracuyá con Boba",
        category: "refresco",
        price: 6.75,
        description: "Refrescante bebida de maracuyá con perlas de tapioca. Sabor exótico y ácido.",
        image: "🥤",
        features: [
            "Maracuyá natural",
            "Agua carbonatada",
            "Perlas de tapioca",
            "Muy refrescante"
        ]
    }
];

// Variables globales
let filteredProducts = [...products];
const productsGrid = document.getElementById('productsGrid');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const priceFilter = document.getElementById('priceFilter');
const resetFiltersBtn = document.getElementById('resetFilters');
const modal = document.getElementById('productModal');
const modalContent = document.getElementById('modalProductContent');

// Renderizar productos
function renderProducts(productsToRender) {
    if (productsToRender.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-results">
                <h2>😔 No se encontraron productos</h2>
                <p>Intenta ajustar tus filtros de búsqueda</p>
            </div>
        `;
        return;
    }

    productsGrid.innerHTML = productsToRender.map(product => `
        <div class="product-card" onclick="openModal(${product.id})">
            <div class="product-image">${product.image}</div>
            <div class="product-info">
                <span class="product-category">${getCategoryName(product.category)}</span>
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">$${product.price.toFixed(2)}</span>
                    <button class="btn-view" onclick="event.stopPropagation(); openModal(${product.id})">
                        Ver detalles
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Obtener nombre de categoría
function getCategoryName(category) {
    const categories = {
        'te': 'Té con Boba',
        'frappe': 'Frappé',
        'batido': 'Batido',
        'refresco': 'Refresco',
        'smoothie': 'Smoothie'
    };
    return categories[category] || category;
}

// Filtrar productos
function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
    const selectedPrice = priceFilter.value;

    filteredProducts = products.filter(product => {
        // Filtro de búsqueda
        const matchesSearch = product.name.toLowerCase().includes(searchTerm) ||
                            product.description.toLowerCase().includes(searchTerm);

        // Filtro de categoría
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;

        // Filtro de precio
        let matchesPrice = true;
        if (selectedPrice !== 'all') {
            const [min, max] = selectedPrice.split('-').map(p => 
                p.includes('+') ? Infinity : parseFloat(p)
            );
            matchesPrice = product.price >= min && product.price <= (max || Infinity);
        }

        return matchesSearch && matchesCategory && matchesPrice;
    });

    renderProducts(filteredProducts);
}

// Abrir modal de producto
function openModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    modalContent.innerHTML = `
        <div class="modal-product-image">${product.image}</div>
        <span class="modal-product-category">${getCategoryName(product.category)}</span>
        <h2 class="modal-product-title">${product.name}</h2>
        <div class="modal-product-price">$${product.price.toFixed(2)}</div>
        <p class="modal-product-description">${product.description}</p>
        <ul class="modal-product-features">
            ${product.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
    `;

    modal.classList.add('show');
}

// Cerrar modal
function closeModal() {
    modal.classList.remove('show');
}

// Event listeners
searchInput.addEventListener('input', filterProducts);
categoryFilter.addEventListener('change', filterProducts);
priceFilter.addEventListener('change', filterProducts);
resetFiltersBtn.addEventListener('click', () => {
    searchInput.value = '';
    categoryFilter.value = 'all';
    priceFilter.value = 'all';
    filterProducts();
});

// Cerrar modal al hacer clic fuera o en la X
modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.classList.contains('close')) {
        closeModal();
    }
});

// Cerrar modal con tecla Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
        closeModal();
    }
});

// Inicializar
renderProducts(products);


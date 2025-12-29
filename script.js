// Base de datos de productos - AHORA basada en el menú proporcionado por el usuario.
// Se mantienen tres categorías: \"leche\" (con leche), \"clasicos\" (sodas italianas sin leche)
// y \"alcohol\" (extra de alcohol para cualquier bebida).
const products = [
    // ======================
    // MENÚ CON LECHE
    // ======================
    {
        id: 1,
        name: "Choco berry",
        category: "leche",
        price: 16, // Precio base (tamaño pequeño S)
        sizePrices: { S: 16, M: 20 },
        description: "Perlas de tapiocas, leche, chocolate cacao 70%, frutos rojos. Precio S: 16 Bs / M: 20 Bs.",
        image: "🍫",
        features: [
            "Perlas de tapioca",
            "Leche",
            "Chocolate cacao 70%",
            "Frutos rojos"
        ],
        popular: true
    },
    {
        id: 2,
        name: "Oreo bliss",
        category: "leche",
        price: 16,
        sizePrices: { S: 16, M: 20 },
        description: "Perlas de tapiocas, leche condensada, leche natural, galletas Oreo. Precio S: 16 Bs / M: 20 Bs.",
        image: "🍪",
        features: [
            "Perlas de tapioca",
            "Leche condensada",
            "Leche natural",
            "Galletas Oreo"
        ],
        popular: true
    },
    {
        id: 3,
        name: "Chocolate whispers",
        category: "leche",
        price: 16,
        sizePrices: { S: 16, M: 20 },
        description: "Perlas de tapiocas, leche natural, chocolate cacao 70%, cobertura de chocolate. Precio S: 16 Bs / M: 20 Bs.",
        image: "🍫",
        features: [
            "Perlas de tapioca",
            "Leche natural",
            "Chocolate cacao 70%",
            "Cobertura de chocolate"
        ]
    },
    {
        id: 4,
        name: "Coconut",
        category: "leche",
        price: 16,
        sizePrices: { S: 16, M: 20 },
        description: "Base de tapiocas, leche de coco, leche evaporada, esencia de vainilla, ralladura de coco. Precio S: 16 Bs / M: 20 Bs.",
        image: "🥥",
        features: [
            "Leche de coco",
            "Leche evaporada",
            "Esencia de vainilla",
            "Ralladura de coco"
        ]
    },
    {
        id: 5,
        name: "Caramelo bliss",
        category: "leche",
        price: 16,
        sizePrices: { S: 16, M: 20 },
        description: "Base de tapiocas, leche natural, base de té negro procesado, esencia de caramelo. Precio S: 16 Bs / M: 20 Bs.",
        image: "🍮",
        features: [
            "Leche natural",
            "Té negro procesado",
            "Esencia de caramelo",
            "Perlas de tapioca"
        ]
    },
    {
        id: 6,
        name: "Berry bliss blend",
        category: "leche",
        price: 16,
        sizePrices: { S: 16, M: 20 },
        description: "Base de tapiocas, leche, esencia de frutos rojos, endulzante. Precio S: 16 Bs / M: 20 Bs.",
        image: "🫐",
        features: [
            "Leche",
            "Esencia de frutos rojos",
            "Endulzante",
            "Perlas de tapioca"
        ]
    },
    {
        id: 7,
        name: "Capuccino",
        category: "leche",
        price: 16,
        sizePrices: { S: 16, M: 20 },
        description: "Base de tapiocas, leche natural, shot de café, esencia de vainilla. Precio S: 16 Bs / M: 20 Bs.",
        image: "☕",
        features: [
            "Leche natural",
            "Shot de café",
            "Esencia de vainilla",
            "Perlas de tapioca"
        ]
    },
    {
        id: 8,
        name: "Pie de limón",
        category: "leche",
        price: 16,
        sizePrices: { S: 16, M: 20 },
        description: "Base de tapiocas, galletas trituradas, crema de limón, leche condensada, esencia de vainilla. Precio S: 16 Bs / M: 20 Bs.",
        image: "🍋",
        features: [
            "Galletas trituradas",
            "Crema de limón",
            "Leche condensada",
            "Esencia de vainilla"
        ]
    },

    // ======================
    // MENÚ SODAS ITALIANAS (SIN LECHE)
    // ======================
    {
        id: 9,
        name: "Elixir tropical",
        category: "clasicos",
        price: 16,
        sizePrices: { S: 16, M: 20 },
        description: "Base de perlas explosivas, Seven Up, agua burbujeante, pulpa de maracuyá. Precio S: 16 Bs / M: 20 Bs.",
        image: "🥭",
        features: [
            "Perlas explosivas",
            "Seven Up",
            "Agua burbujeante",
            "Pulpa de maracuyá"
        ],
        popular: true
    },
    {
        id: 10,
        name: "Strawberry drink",
        category: "clasicos",
        price: 16,
        sizePrices: { S: 16, M: 20 },
        description: "Perlas explosivas, Seven Up, agua burbujeante, menta, yerba buena, esencia de frutos rojos. Precio S: 16 Bs / M: 20 Bs.",
        image: "🍓",
        features: [
            "Perlas explosivas",
            "Seven Up",
            "Menta y yerba buena",
            "Esencia de frutos rojos"
        ]
    },
    {
        id: 11,
        name: "Menta drink",
        category: "clasicos",
        price: 16,
        sizePrices: { S: 16, M: 20 },
        description: "Base de perlas explosivas, Seven Up, agua burbujeante, menta, esencia de menta. Precio S: 16 Bs / M: 20 Bs.",
        image: "🌿",
        features: [
            "Perlas explosivas",
            "Seven Up",
            "Menta fresca",
            "Esencia de menta"
        ]
    },
    {
        id: 12,
        name: "Mojito strom",
        category: "clasicos",
        price: 16,
        sizePrices: { S: 16, M: 20 },
        description: "Base de perlas explosivas, Seven Up, agua burbujeante, menta, jarabe comestible azul océano. Precio S: 16 Bs / M: 20 Bs.",
        image: "🌀",
        features: [
            "Perlas explosivas",
            "Seven Up",
            "Menta",
            "Jarabe azul océano"
        ]
    },
    {
        id: 13,
        name: "Bubble Bloom",
        category: "clasicos",
        price: 16,
        sizePrices: { S: 16, M: 20 },
        description: "Perlas explosivas, jugo natural de uva, hielo, hierba buena, Seven Up, agua burbujeante, esencia de fresa. Precio S: 16 Bs / M: 20 Bs.",
        image: "🍇",
        features: [
            "Perlas explosivas",
            "Jugo natural de uva",
            "Seven Up y agua burbujeante",
            "Esencia de fresa"
        ]
    },
    {
        id: 14,
        name: "Café Maracuyá Pop",
        category: "clasicos",
        price: 16,
        sizePrices: { S: 16, M: 20 },
        description: "Perlas explosivas, maracuyá, agua burbujeante, shot de café expreso. Precio S: 16 Bs / M: 20 Bs.",
        image: "☕",
        features: [
            "Perlas explosivas",
            "Maracuyá",
            "Agua burbujeante",
            "Shot de café expreso"
        ]
    },

    // ======================
    // EXTRA CON ALCOHOL
    // ======================
    {
        id: 15,
        name: "Extra alcohol a cualquier bebida",
        category: "alcohol",
        price: 20,
        sizePrices: { S: 20, M: 25 },
        description: "Añade un toque de alcohol a cualquier bebida del menú. Precio S: 20 Bs / M: 25 Bs.",
        image: "🍹",
        features: [
            "Disponible para cualquier bebida",
            "Opción S y M",
            "Ideal para ocasiones especiales"
        ],
        popular: true
    }
]; // Fin del array de productos

// ========================
// NODOS GLOBALES DEL DOM
// ========================

// Variables globales - Referencias a elementos del DOM que se usarán en múltiples funciones
let filteredProducts = [...products]; // Copia del array de productos para filtrado
const productsGrid = document.getElementById('productsGrid'); // Grid donde se muestran los productos
const searchInput = document.getElementById('searchInput'); // Campo de búsqueda
const categoryFilter = document.getElementById('categoryFilter'); // Selector de categoría (con leche / sin leche / con alcohol)
const priceFilter = document.getElementById('priceFilter'); // Selector de rango de precio
const resetFiltersBtn = document.getElementById('resetFilters'); // Botón para resetear filtros
const modal = document.getElementById('productModal'); // Modal de detalles del producto
const modalContent = document.getElementById('modalProductContent'); // Contenido del modal
const popularProducts = document.getElementById('popularProducts'); // Grid de productos populares (inicio)
const contactForm = document.getElementById('contactForm'); // Formulario de contacto
const viewSections = document.querySelectorAll('.view-section'); // Todas las vistas (nodos del semi-árbol)
const navLinks = document.querySelectorAll('.nav-link[data-view]'); // Enlaces de navegación
const logoLink = document.querySelector('.logo'); // Logo que navega a la vista "sobre"

// ========================
// RENDERIZADO DE PRODUCTOS
// ========================

// Renderizar productos - Función que muestra los productos en el grid
function renderProducts(productsToRender) {
    // Verifica si el elemento productsGrid existe
    if (!productsGrid) return;
    
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
                    <span class="product-price">
                        S: ${(product.sizePrices?.S ?? product.price).toFixed(2)} Bs | 
                        M: ${(product.sizePrices?.M ?? product.price).toFixed(2)} Bs
                    </span>
                    <button class="btn-view" onclick="event.stopPropagation(); openModal(${product.id})">
                        Ver detalles
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Renderizar productos populares - Función que muestra solo los productos marcados como populares
function renderPopularProducts() {
    // Verifica si el elemento popularProducts existe (solo está en index.html)
    if (!popularProducts) return;
    
    const popular = products.filter(p => p.popular).slice(0, 6); // Obtiene los primeros 6 productos populares
    
    if (popular.length === 0) {
        popularProducts.innerHTML = '<p>No hay productos populares disponibles.</p>';
        return;
    }

    popularProducts.innerHTML = popular.map(product => `
        <div class="product-card" onclick="openModal(${product.id})">
            <div class="product-image">${product.image}</div>
            <div class="product-info">
                <span class="product-category">${getCategoryName(product.category)}</span>
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">
                        S: ${(product.sizePrices?.S ?? product.price).toFixed(2)} Bs | 
                        M: ${(product.sizePrices?.M ?? product.price).toFixed(2)} Bs
                    </span>
                    <button class="btn-view" onclick="event.stopPropagation(); openModal(${product.id})">
                        Ver detalles
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Obtener nombre de categoría - Convierte el código de categoría a nombre legible en español
function getCategoryName(category) {
    const categories = {
        'clasicos': 'Boba Clásicos',
        'leche': 'Con Leche',
        'alcohol': 'Con Alcohol'
    };
    return categories[category] || category;
}

// Filtrar productos - Función que filtra según búsqueda, categoría y precio
function filterProducts() {
    // Verifica si los elementos necesarios existen
    if (!searchInput || !categoryFilter || !priceFilter) return;
    
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
    const selectedPrice = priceFilter.value;

    filteredProducts = products.filter(product => {
        // Filtro de búsqueda
        const matchesSearch = product.name.toLowerCase().includes(searchTerm) ||
                            product.description.toLowerCase().includes(searchTerm);

        // Filtro de categoría (con leche / sin leche / con alcohol)
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;

        // Filtro de precio (usa el precio pequeño S como referencia)
        let matchesPrice = true;
        if (selectedPrice !== 'all') {
            const [min, max] = selectedPrice.split('-').map(p =>
                p.includes('+') ? Infinity : parseFloat(p)
            );
            // Usa el precio pequeño (S) como referencia para el filtro
            const basePrice = product.sizePrices?.S ?? product.price;

            matchesPrice = basePrice >= min && basePrice <= (max || Infinity);
        }

        return matchesSearch && matchesCategory && matchesPrice;
    });

    renderProducts(filteredProducts);
}

// Abrir modal de producto - Muestra los detalles completos de un producto
function openModal(productId) {
    if (!modal || !modalContent) return;
    
    const product = products.find(p => p.id === productId);
    if (!product) return;

    modalContent.innerHTML = `
        <div class="modal-product-image">${product.image}</div>
        <span class="modal-product-category">${getCategoryName(product.category)}</span>
        <h2 class="modal-product-title">${product.name}</h2>
        <div class="modal-product-price">
            S: ${(product.sizePrices?.S ?? product.price).toFixed(2)} Bs | 
            M: ${(product.sizePrices?.M ?? product.price).toFixed(2)} Bs
        </div>
        <p class="modal-product-description">${product.description}</p>
        <ul class="modal-product-features">
            ${product.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
    `;

    modal.classList.add('show');
}

// Cerrar modal - Oculta la ventana modal
function closeModal() {
    if (!modal) return;
    modal.classList.remove('show');
}

// Manejar formulario de contacto - Envía la información a través de WhatsApp
function handleContactForm(e) {
    if (!contactForm) return;
    
    e.preventDefault(); // Previene el envío por defecto del formulario
    
    // Obtiene los valores del formulario
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // Número de WhatsApp de destino en formato internacional sin signos (+591..., etc.)
    // TODO: Reemplaza este número por el de tu negocio
    const whatsappNumber = '59170000000';

    // Construye el mensaje que se enviará por WhatsApp
    const whatsappMessage =
`Hola, soy ${formData.name}.
Correo: ${formData.email}
Teléfono: ${formData.phone || 'No especificado'}
Asunto: ${formData.subject}

Mensaje:
${formData.message}`;

    // Codifica el mensaje para usarlo en la URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // URL oficial de WhatsApp
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Abre WhatsApp en una nueva pestaña/ventana
    window.open(whatsappUrl, '_blank');
}

// =======================
// SISTEMA DE VISTAS (SPA)
// =======================

/**
 * Cambia la vista activa del semi-árbol principal.
 * @param {string} viewId - ID de la sección que se quiere mostrar (por ejemplo 'view-inicio')
 */
function setActiveView(viewId) {
    // Cambiar visibilidad de las secciones (nodos del árbol)
    viewSections.forEach(section => {
        if (section.id === viewId) {
            section.classList.add('is-active');
        } else {
            section.classList.remove('is-active');
        }
    });

    // Actualizar estado visual de los enlaces de navegación
    navLinks.forEach(link => {
        const linkView = link.getAttribute('data-view');
        if (linkView === viewId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Actualizar hash en la URL (sin recargar la página)
    const simpleHash = viewId.replace('view-', '');
    if (window.location.hash !== `#${simpleHash}`) {
        history.replaceState(null, '', `#${simpleHash}`);
    }

    // Asegurarse de que el grid de productos esté renderizado cuando se entra a esa vista
    if (viewId === 'view-productos' && productsGrid) {
        // Si aún no se ha aplicado ningún filtro, renderizamos todo el catálogo
        if (!productsGrid.innerHTML.trim()) {
            renderProducts(products);
        }
    }
}

// ========================
// MENÚ MÓVIL
// ========================

// Función para toggle del menú móvil
function toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    
    if (navMenu && mobileMenuToggle) {
        navMenu.classList.toggle('active');
        // Cambiar el icono del botón
        if (navMenu.classList.contains('active')) {
            mobileMenuToggle.textContent = '✕';
        } else {
            mobileMenuToggle.textContent = '☰';
        }
    }
}

// Cerrar menú móvil al hacer clic en un enlace
function closeMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    
    if (navMenu && mobileMenuToggle) {
        navMenu.classList.remove('active');
        mobileMenuToggle.textContent = '☰';
    }
}

// Event listeners - Se ejecutan cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    // Inicializa el menú móvil
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    }
    
    // Cerrar menú móvil al hacer clic fuera de él
    document.addEventListener('click', (e) => {
        const navMenu = document.getElementById('navMenu');
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');
        
        if (navMenu && mobileMenuToggle && 
            !navMenu.contains(e.target) && 
            !mobileMenuToggle.contains(e.target) &&
            navMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });
    
    // Cerrar menú móvil al redimensionar la ventana si se vuelve grande
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    });
    
    // Inicializa el grid de productos y filtros
    if (productsGrid && searchInput && categoryFilter && priceFilter && resetFiltersBtn) {
        renderProducts(products);
        
        // Event listeners para filtros
        searchInput.addEventListener('input', filterProducts);
        categoryFilter.addEventListener('change', filterProducts);
        priceFilter.addEventListener('change', filterProducts);
        resetFiltersBtn.addEventListener('click', () => {
            searchInput.value = '';
            categoryFilter.value = 'all';
            priceFilter.value = 'all';
            filterProducts();
        });
    }
    
    // Inicializa productos populares en la vista de inicio
    if (popularProducts) {
        renderPopularProducts();
    }
    
    // Maneja el formulario de contacto
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    // Event listeners para el modal (si existe)
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target.classList.contains('close')) {
                closeModal();
            }
        });
    }
    
    // Cerrar modal con tecla Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.classList.contains('show')) {
            closeModal();
        }
    });

    // ======================
    // Navegación tipo SPA
    // ======================

    // Enlaces del navbar y hero que cambian de vista
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const viewId = link.getAttribute('data-view');
            if (viewId) {
                setActiveView(viewId);
                // Cerrar menú móvil al hacer clic en un enlace
                closeMobileMenu();
            }
        });
    });

    // Botón del hero que apunta a productos
    const heroBtn = document.querySelector('.btn-hero[data-view]');
    if (heroBtn) {
        heroBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const viewId = heroBtn.getAttribute('data-view');
            if (viewId) {
                setActiveView(viewId);
                // Cerrar menú móvil si está abierto
                closeMobileMenu();
            }
        });
    }

    // Logo que lleva a la vista "Sobre nosotros"
    if (logoLink) {
        logoLink.addEventListener('click', (e) => {
            e.preventDefault();
            setActiveView('view-sobre');
            // Cerrar menú móvil si está abierto
            closeMobileMenu();
        });
    }

    // Vista inicial basada en el hash de la URL (fallback a inicio)
    const initialHash = window.location.hash.replace('#', '');
    const initialViewId = initialHash ? `view-${initialHash}` : 'view-inicio';
    const validViewIds = Array.from(viewSections).map(s => s.id);
    setActiveView(validViewIds.includes(initialViewId) ? initialViewId : 'view-inicio');
    
    // ======================
    // Menú desplegable de redes sociales
    // ======================
    const socialMainBtn = document.getElementById('socialMainBtn');
    const redesSociales = document.getElementById('redesSociales');
    
    if (socialMainBtn && redesSociales) {
        // Toggle del menú al hacer clic en el botón principal
        socialMainBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            socialMainBtn.classList.toggle('active');
            redesSociales.classList.toggle('active');
        });
        
        // Cerrar el menú al hacer clic fuera de él
        document.addEventListener('click', (e) => {
            const container = document.querySelector('.redes-sociales-container');
            if (container && !container.contains(e.target) && redesSociales.classList.contains('active')) {
                socialMainBtn.classList.remove('active');
                redesSociales.classList.remove('active');
            }
        });
        
        // Cerrar el menú al hacer clic en un enlace de red social
        const socialLinks = redesSociales.querySelectorAll('.social-link');
        socialLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Opcional: cerrar el menú después de un breve delay para permitir la navegación
                setTimeout(() => {
                    socialMainBtn.classList.remove('active');
                    redesSociales.classList.remove('active');
                }, 100);
            });
        });
        
        // Cerrar el menú con tecla Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && redesSociales.classList.contains('active')) {
                socialMainBtn.classList.remove('active');
                redesSociales.classList.remove('active');
            }
        });
    }
});

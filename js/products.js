// Base de datos de productos
const productos = [
    {
        id: 1,
        name: "Vino Tinto Reserva",
        category: "vinos",
        price: 459.90,
        image: "vino-tinto-reserva.jpg",
        description: "Excelente vino tinto con notas frutales y especiadas, perfecto para carnes rojas.",
        badge: "Bestseller",
        stock: 25
    },
    {
        id: 2,
        name: "Whisky Single Malt 18 años",
        category: "licores",
        price: 1899.90,
        image: "whisky-single-malt.jpg",
        description: "Whisky escocés premium envejecido 18 años, suave y complejo.",
        badge: "Premium",
        stock: 10
    },
    {
        id: 3,
        name: "Cerveza Artesanal IPA",
        category: "cervezas",
        price: 89.90,
        image: "cerveza-ipa.jpg",
        description: "Cerveza artesanal con intenso sabor a lúpulo y notas cítricas.",
        badge: "Nuevo",
        stock: 50
    },
    {
        id: 4,
        name: "Champagne Dom Pérignon",
        category: "champagne",
        price: 2999.90,
        image: "champagne-dom-perignon.jpg",
        description: "El champagne más prestigioso del mundo, perfecto para celebraciones especiales.",
        badge: "Exclusivo",
        stock: 5
    },
    {
        id: 5,
        name: "Vino Blanco Chardonnay",
        category: "vinos",
        price: 329.90,
        image: "vino-blanco-chardonnay.jpg",
        description: "Vino blanco fresco y elegante, ideal para mariscos y pescados.",
        stock: 30
    },
    {
        id: 6,
        name: "Ron Añejo 15 años",
        category: "licores",
        price: 1255.00,
        image: "ron-anejo.jpg",
        description: "Ron premium añejado en barricas de roble, suave y aromático.",
        badge: "Recomendado",
        stock: 15
    },
    {
        id: 7,
        name: "Cerveza Pilsner Premium",
        category: "cervezas",
        price: 65.00,
        image: "cerveza-pilsner.jpg",
        description: "Cerveza rubia ligera y refrescante, perfecta para el verano.",
        stock: 75
    },
    {
        id: 8,
        name: "Prosecco Italiano",
        category: "champagne",
        price: 249.90,
        image: "prosecco-italiano.jpg",
        description: "Espumoso italiano fresco y afrutado, perfecto para aperitivos.",
        stock: 40
    },
    {
        id: 9,
        name: "Vino Rosé Provence",
        category: "vinos",
        price: 387.50,
        image: "vino-rose-provence.jpg",
        description: "Vino rosé elegante de la Provenza francesa, delicado y aromático.",
        stock: 20
    },
    {
        id: 10,
        name: "Vodka Premium Grey Goose",
        category: "licores",
        price: 899.90,
        image: "vodka-grey-goose.jpg",
        description: "Vodka francés ultra premium, destilado cinco veces para máxima pureza.",
        badge: "Premium",
        stock: 18
    },
    {
        id: 11,
        name: "Cerveza Stout Imperial",
        category: "cervezas",
        price: 129.90,
        image: "cerveza-stout.jpg",
        description: "Cerveza negra robusta con notas a café y chocolate, de alta graduación.",
        stock: 35
    },
    {
        id: 12,
        name: "Cava Brut Nature",
        category: "champagne",
        price: 185.00,
        image: "cava-brut-nature.jpg",
        description: "Cava español sin azúcar añadido, elegante y con finas burbujas.",
        stock: 45
    },
    {
        id: 13,
        name: "Vino Malbec Argentino",
        category: "vinos",
        price: 289.90,
        image: "vino-malbec.jpg",
        description: "Vino tinto intenso de Mendoza, con cuerpo y taninos equilibrados.",
        badge: "Oferta",
        stock: 32
    },
    {
        id: 14,
        name: "Tequila Reposado Premium",
        category: "licores",
        price: 950.00,
        image: "tequila-reposado.jpg",
        description: "Tequila 100% agave reposado en barricas, suave y complejo.",
        stock: 22
    },
    {
        id: 15,
        name: "Cerveza Weizen Alemana",
        category: "cervezas",
        price: 77.50,
        image: "cerveza-weizen.jpg",
        description: "Cerveza de trigo alemana tradicional, refrescante y con carácter.",
        stock: 60
    }
];

// Función para obtener todos los productos
function getAllProducts() {
    return productos;
}

// Función para obtener productos por categoría
function getProductsByCategory(category) {
    if (category === 'all') {
        return productos;
    }
    return productos.filter(product => product.category === category);
}

// Función para obtener producto por ID
function getProductById(id) {
    return productos.find(product => product.id === id);
}

// Función para buscar productos
function searchProducts(query) {
    const searchTerm = query.toLowerCase();
    return productos.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );
}

// Función para crear el HTML de una tarjeta de producto
function createProductCard(product) {
    const badge = product.badge ? `<div class="product-badge">${product.badge}</div>` : '';
    
    return `
        <div class="product-card fade-in-up" data-category="${product.category}">
            <div class="product-image">
                <i class="fas fa-wine-bottle"></i>
                ${badge}
            </div>
            <div class="product-info">
                <div class="product-category">${getCategoryName(product.category)}</div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <div class="quantity-selector">
                    <label for="quantity-${product.id}">Cantidad:</label>
                    <div class="quantity-controls">
                        <button type="button" onclick="decreaseProductQuantity(${product.id})" class="quantity-btn">-</button>
                        <input type="number" id="quantity-${product.id}" value="1" min="1" max="${product.stock}" class="quantity-input">
                        <button type="button" onclick="increaseProductQuantity(${product.id})" class="quantity-btn">+</button>
                    </div>
                </div>
                <div class="discount-info" id="discount-info-${product.id}" style="display: none;">
                    <i class="fas fa-tag"></i>
                    <span>¡5% de descuento!</span>
                </div>
                <div class="product-actions">
                    <button class="add-to-cart-btn" onclick="addToCartWithQuantity(${product.id})" ${product.stock === 0 ? 'disabled' : ''}>
                        <i class="fas fa-cart-plus"></i>
                        ${product.stock === 0 ? 'Sin stock' : 'Agregar al carrito'}
                    </button>
                    <button class="view-product-btn" onclick="showProductModal(${product.id})">
                        <i class="fas fa-eye"></i>
                        Ver detalles
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Función para obtener el nombre de la categoría en español
function getCategoryName(category) {
    const categoryNames = {
        'vinos': 'Vinos',
        'licores': 'Licores',
        'cervezas': 'Cervezas',
        'champagne': 'Champagne'
    };
    return categoryNames[category] || category;
}

// Función para renderizar productos
function renderProducts(productsToRender = null) {
    const productsGrid = document.getElementById('products-grid');
    const products = productsToRender || getAllProducts();
    
    if (products.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-products">
                <i class="fas fa-search"></i>
                <p>No se encontraron productos</p>
            </div>
        `;
        return;
    }
    
    productsGrid.innerHTML = products.map(product => createProductCard(product)).join('');
}

// Función para filtrar productos
function filterProducts(category) {
    const products = getProductsByCategory(category);
    renderProducts(products);
    
    // Actualizar botones de filtro
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-filter="${category}"]`).classList.add('active');
}

// Función para mostrar el modal de producto
function showProductModal(productId) {
    const product = getProductById(productId);
    if (!product) return;
    
    const modal = document.getElementById('product-modal');
    const modalBody = modal.querySelector('.product-modal-body');
    
    modalBody.innerHTML = `
        <div class="product-detail">
            <div class="product-detail-image">
                <i class="fas fa-wine-bottle"></i>
            </div>
            <div class="product-detail-info">
                <div class="product-category">${getCategoryName(product.category)}</div>
                <h2>${product.name}</h2>
                <p class="product-description">${product.description}</p>
                <div class="product-price">$${product.price}</div>
                <div class="product-stock">Stock disponible: ${product.stock} unidades</div>
                <div class="quantity-selector">
                    <label for="quantity">Cantidad:</label>
                    <div class="quantity-controls">
                        <button type="button" onclick="decreaseQuantity()" class="quantity-btn">-</button>
                        <input type="number" id="modal-quantity" value="1" min="1" max="${product.stock}">
                        <button type="button" onclick="increaseQuantity()" class="quantity-btn">+</button>
                    </div>
                </div>
                <button class="add-to-cart-btn modal-add-btn" onclick="addToCartFromModal(${product.id})" ${product.stock === 0 ? 'disabled' : ''}>
                    <i class="fas fa-cart-plus"></i>
                    ${product.stock === 0 ? 'Sin stock' : 'Agregar al carrito'}
                </button>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Función para cerrar el modal de producto
function closeProductModal() {
    const modal = document.getElementById('product-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Funciones para controlar la cantidad en el modal
function increaseQuantity() {
    const quantityInput = document.getElementById('modal-quantity');
    const currentValue = parseInt(quantityInput.value);
    const maxValue = parseInt(quantityInput.max);
    
    if (currentValue < maxValue) {
        quantityInput.value = currentValue + 1;
    }
}

function decreaseQuantity() {
    const quantityInput = document.getElementById('modal-quantity');
    const currentValue = parseInt(quantityInput.value);
    const minValue = parseInt(quantityInput.min);
    
    if (currentValue > minValue) {
        quantityInput.value = currentValue - 1;
    }
}

// Función para agregar al carrito desde el modal
function addToCartFromModal(productId) {
    const quantityInput = document.getElementById('modal-quantity');
    const quantity = parseInt(quantityInput.value);
    
    for (let i = 0; i < quantity; i++) {
        addToCart(productId);
    }
    
    closeProductModal();
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Renderizar productos inicialmente
    renderProducts();
    
    // Configurar filtros de categoría
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            filterProducts(filter);
        });
    });
    
    // Configurar tarjetas de categoría
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Si estamos en la página de productos, filtrar directamente
            if (document.getElementById('productos')) {
                filterProducts(category);
                document.getElementById('productos').scrollIntoView({ 
                    behavior: 'smooth' 
                });
            } else {
                // Si no, redirigir a la página de productos con el filtro
                window.location.href = `productos.html?category=${category}`;
            }
        });
    });
    
    // Manejar parámetros URL en página de productos
    if (window.location.pathname.includes('productos.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const category = urlParams.get('category');
        
        if (category && window.productManager) {
            // Pequeño delay para asegurar que los productos se hayan cargado
            setTimeout(() => {
                filterProducts(category);
            }, 100);
        }
    }
    
    // Cerrar modales al hacer clic fuera
    document.getElementById('product-modal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeProductModal();
        }
    });
});

// Funciones para manejar cantidades en productos
function increaseProductQuantity(productId) {
    const quantityInput = document.getElementById(`quantity-${productId}`);
    const currentValue = parseInt(quantityInput.value);
    const maxValue = parseInt(quantityInput.max);
    
    if (currentValue < maxValue) {
        quantityInput.value = currentValue + 1;
        updateDiscountInfo(productId);
    }
}

function decreaseProductQuantity(productId) {
    const quantityInput = document.getElementById(`quantity-${productId}`);
    const currentValue = parseInt(quantityInput.value);
    const minValue = parseInt(quantityInput.min);
    
    if (currentValue > minValue) {
        quantityInput.value = currentValue - 1;
        updateDiscountInfo(productId);
    }
}

// Función para actualizar información de descuento
function updateDiscountInfo(productId) {
    const quantityInput = document.getElementById(`quantity-${productId}`);
    const discountInfo = document.getElementById(`discount-info-${productId}`);
    const quantity = parseInt(quantityInput.value);
    
    if (quantity % 6 === 0 && quantity > 0) {
        discountInfo.style.display = 'block';
    } else {
        discountInfo.style.display = 'none';
    }
}

// Función para calcular precio con descuento
function calculateDiscountedPrice(price, quantity) {
    const baseTotal = price * quantity;
    if (quantity % 6 === 0 && quantity > 0) {
        return baseTotal * 0.95; // 5% de descuento
    }
    return baseTotal;
}

// Función para agregar al carrito con cantidad específica
function addToCartWithQuantity(productId) {
    const quantityInput = document.getElementById(`quantity-${productId}`);
    const quantity = parseInt(quantityInput.value);
    
    if (quantity > 0) {
        // Agregar al carrito la cantidad especificada
        for (let i = 0; i < quantity; i++) {
            addToCart(productId);
        }
        
        // Mostrar mensaje de descuento si aplica
        if (quantity % 6 === 0) {
            window.cart.showNotification(
                `¡Agregado con 5% de descuento por comprar ${quantity} unidades!`, 
                'success'
            );
        }
        
        // Resetear cantidad a 1
        quantityInput.value = 1;
        updateDiscountInfo(productId);
    }
}

// Event listener para cambios en los inputs de cantidad
document.addEventListener('input', function(e) {
    if (e.target.classList.contains('quantity-input')) {
        const productId = e.target.id.replace('quantity-', '');
        updateDiscountInfo(parseInt(productId));
    }
});

// Exportar funciones para uso en otros archivos
window.productManager = {
    getAllProducts,
    getProductsByCategory,
    getProductById,
    searchProducts,
    renderProducts,
    filterProducts,
    showProductModal,
    closeProductModal,
    calculateDiscountedPrice
};
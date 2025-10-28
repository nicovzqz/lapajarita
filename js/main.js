// Funcionalidades principales del sitio
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupMobileMenu();
    setupSearchFunctionality();
    setupSmoothScrolling();
    setupScrollEffects();
    setupContactForm();
    setupAnimations();
    
    // Mensaje de bienvenida inicial
    console.log('🍷 La Pajarita - Ecommerce inicializado correctamente');
}

// Configuración del menú móvil
function setupMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            
            // Cambiar icono del menú
            const icon = menuToggle.querySelector('i');
            if (nav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Cerrar menú al hacer clic en un enlace
        document.querySelectorAll('.nav a').forEach(link => {
            link.addEventListener('click', function() {
                nav.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });

        // Cerrar menú al hacer clic fuera
        document.addEventListener('click', function(e) {
            if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
                nav.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
}

// Configuración de la funcionalidad de búsqueda
function setupSearchFunctionality() {
    const searchBtn = document.querySelector('.search-btn');
    const searchModal = document.getElementById('search-modal');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    const closeSearch = document.querySelector('.close-search');

    if (searchBtn && searchModal) {
        searchBtn.addEventListener('click', function() {
            toggleSearchModal();
        });

        closeSearch?.addEventListener('click', function() {
            toggleSearchModal();
        });

        // Cerrar modal de búsqueda al hacer clic fuera
        searchModal.addEventListener('click', function(e) {
            if (e.target === this) {
                toggleSearchModal();
            }
        });

        // Búsqueda en tiempo real
        if (searchInput) {
            let searchTimeout;
            searchInput.addEventListener('input', function() {
                clearTimeout(searchTimeout);
                const query = this.value.trim();
                
                if (query.length === 0) {
                    searchResults.innerHTML = '';
                    return;
                }

                searchTimeout = setTimeout(() => {
                    performSearch(query);
                }, 300);
            });

            // Búsqueda al presionar Enter
            searchInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    const query = this.value.trim();
                    if (query.length > 0) {
                        performSearch(query);
                    }
                }
            });
        }
    }
}

// Alternar modal de búsqueda
function toggleSearchModal() {
    const modal = document.getElementById('search-modal');
    const searchInput = document.getElementById('search-input');
    
    if (modal.classList.contains('active')) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    } else {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        // Enfocar el input de búsqueda
        setTimeout(() => {
            if (searchInput) {
                searchInput.focus();
            }
        }, 100);
    }
}

// Realizar búsqueda
function performSearch(query) {
    const searchResults = document.getElementById('search-results');
    
    if (!window.productManager) {
        searchResults.innerHTML = '<p class="search-error">Error: Sistema de productos no disponible</p>';
        return;
    }

    const results = window.productManager.searchProducts(query);
    
    if (results.length === 0) {
        searchResults.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <p>No se encontraron productos para "${query}"</p>
                <p>Intenta con otros términos de búsqueda</p>
            </div>
        `;
        return;
    }

    searchResults.innerHTML = results.map(product => `
        <div class="search-result-item" onclick="selectSearchResult(${product.id})">
            <div class="search-result-image">
                <i class="fas fa-wine-bottle"></i>
            </div>
            <div class="search-result-info">
                <div class="search-result-name">${product.name}</div>
                <div class="search-result-price">$${product.price}</div>
            </div>
        </div>
    `).join('');
}

// Seleccionar resultado de búsqueda
function selectSearchResult(productId) {
    toggleSearchModal();
    window.productManager.showProductModal(productId);
}

// Configuración del scroll suave
function setupSmoothScrolling() {
    // Scroll suave para enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Función para ir a la página de productos
function scrollToProducts() {
    window.location.href = 'productos.html';
}

// Configuración de efectos de scroll
function setupScrollEffects() {
    const header = document.querySelector('.header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Efecto de sombra del header
        if (header) {
            if (scrollTop > 50) {
                header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.15)';
            } else {
                header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
            }
        }

        // Animaciones de aparición
        animateOnScroll();
        
        lastScrollTop = scrollTop;
    });
}

// Animaciones al hacer scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.fade-in-up');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('animate');
        }
    });
}

// Configuración del formulario de contacto
function setupContactForm() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obtener datos del formulario
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Validación básica
            if (!name || !email || !message) {
                showNotification('Por favor completa todos los campos', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Por favor ingresa un email válido', 'error');
                return;
            }
            
            // Simular envío del formulario
            submitContactForm(name, email, message);
        });
    }
}

// Validación de email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Enviar formulario de contacto (simulado)
function submitContactForm(name, email, message) {
    const submitBtn = document.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    
    // Mostrar loading
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;
    
    // Simular envío
    setTimeout(() => {
        // Resetear formulario
        document.querySelector('.contact-form').reset();
        
        // Restaurar botón
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Mostrar mensaje de éxito
        showNotification('¡Mensaje enviado correctamente! Te contactaremos pronto.', 'success');
        
        console.log('Formulario enviado:', { name, email, message });
    }, 2000);
}

// Configuración de animaciones
function setupAnimations() {
    // Agregar clase de animación a elementos visibles
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });

    // Observar elementos con animación
    document.querySelectorAll('.fade-in-up, .product-card, .category-card').forEach(el => {
        observer.observe(el);
    });
}

// Mostrar notificaciones (reutiliza la función del carrito)
function showNotification(message, type = 'info') {
    if (window.cart && window.cart.showNotification) {
        window.cart.showNotification(message, type);
    } else {
        // Fallback básico
        alert(message);
    }
}

// Alternar menú móvil (función global)
function toggleMobileMenu() {
    const nav = document.querySelector('.nav');
    if (nav) {
        nav.classList.toggle('active');
    }
}

// Utilidades adicionales
const utils = {
    // Formatear precio
    formatPrice: (price) => {
        return new Intl.NumberFormat('es-ES', {
            style: 'currency',
            currency: 'USD'
        }).format(price);
    },
    
    // Debounce para optimizar eventos
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    // Throttle para scroll events
    throttle: (func, limit) => {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },
    
    // Verificar si es dispositivo móvil
    isMobile: () => {
        return window.innerWidth <= 768;
    },
    
    // Scroll hacia elemento
    scrollToElement: (element, offset = 0) => {
        if (typeof element === 'string') {
            element = document.querySelector(element);
        }
        
        if (element) {
            const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
            const targetPosition = element.offsetTop - headerHeight - offset;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }
};

// Manejo de errores globales
window.addEventListener('error', function(e) {
    console.error('Error en La Pajarita:', e.error);
    // En producción, aquí se podría enviar el error a un servicio de monitoreo
});

// Información del sitio en consola
console.log(`
🍷 La Pajarita - Ecommerce de Bebidas Alcohólicas
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✨ Características:
   • Catálogo interactivo de productos
   • Carrito de compras con localStorage
   • Búsqueda en tiempo real
   • Diseño responsive
   • Interfaz moderna y elegante

🛠️ Tecnologías:
   • HTML5, CSS3, JavaScript ES6+
   • LocalStorage para persistencia
   • Font Awesome para iconos
   • Google Fonts para tipografías

📧 Contacto: info@lapajarita.com
🌐 Sitio: La Pajarita - Bebidas Premium

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`);

// Exportar utilidades y funciones principales
window.lapajarita = {
    utils,
    scrollToProducts,
    toggleSearchModal,
    showNotification,
    toggleMobileMenu
};
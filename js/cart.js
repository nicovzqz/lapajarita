// Carrito de compras
class ShoppingCart {
    constructor() {
        this.items = this.loadCart();
        this.updateCartUI();
    }

    // Cargar carrito desde localStorage
    loadCart() {
        try {
            const cart = localStorage.getItem('lapajarita-cart');
            return cart ? JSON.parse(cart) : [];
        } catch (error) {
            console.error('Error cargando carrito:', error);
            return [];
        }
    }

    // Guardar carrito en localStorage
    saveCart() {
        try {
            localStorage.setItem('lapajarita-cart', JSON.stringify(this.items));
        } catch (error) {
            console.error('Error guardando carrito:', error);
        }
    }

    // Agregar producto al carrito
    addItem(productId, quantity = 1) {
        const product = window.productManager.getProductById(productId);
        if (!product) {
            console.error('Producto no encontrado:', productId);
            return false;
        }

        if (product.stock === 0) {
            this.showNotification('Producto sin stock', 'error');
            return false;
        }

        const existingItem = this.items.find(item => item.id === productId);
        
        if (existingItem) {
            // Verificar stock disponible
            if (existingItem.quantity + quantity > product.stock) {
                this.showNotification('Stock insuficiente', 'error');
                return false;
            }
            existingItem.quantity += quantity;
        } else {
            this.items.push({
                id: productId,
                name: product.name,
                price: product.price,
                category: product.category,
                quantity: quantity,
                image: product.image
            });
        }

        this.saveCart();
        this.updateCartUI();
        this.showNotification('Producto agregado al carrito', 'success');
        return true;
    }

    // Remover producto del carrito
    removeItem(productId) {
        const itemIndex = this.items.findIndex(item => item.id === productId);
        if (itemIndex > -1) {
            this.items.splice(itemIndex, 1);
            this.saveCart();
            this.updateCartUI();
            this.showNotification('Producto removido del carrito', 'info');
        }
    }

    // Actualizar cantidad de producto
    updateQuantity(productId, newQuantity) {
        const item = this.items.find(item => item.id === productId);
        if (!item) return false;

        const product = window.productManager.getProductById(productId);
        if (newQuantity > product.stock) {
            this.showNotification('Stock insuficiente', 'error');
            return false;
        }

        if (newQuantity <= 0) {
            this.removeItem(productId);
        } else {
            item.quantity = newQuantity;
            this.saveCart();
            this.updateCartUI();
        }
        return true;
    }

    // Vaciar carrito
    clearCart() {
        this.items = [];
        this.saveCart();
        this.updateCartUI();
        this.showNotification('Carrito vaciado', 'info');
    }

    // Obtener total del carrito con descuentos aplicados
    getTotal() {
        return this.items.reduce((total, item) => {
            const itemTotal = item.price * item.quantity;
            // Aplicar descuento del 5% si la cantidad es múltiplo de 6
            if (item.quantity % 6 === 0 && item.quantity > 0) {
                return total + (itemTotal * 0.95);
            }
            return total + itemTotal;
        }, 0);
    }

    // Obtener total sin descuentos
    getTotalWithoutDiscount() {
        return this.items.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
    }

    // Obtener total de descuentos aplicados
    getTotalDiscount() {
        return this.getTotalWithoutDiscount() - this.getTotal();
    }

    // Obtener cantidad total de items
    getTotalItems() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }

    // Actualizar UI del carrito
    updateCartUI() {
        this.updateCartCount();
        this.updateCartItems();
        this.updateCartTotal();
    }

    // Actualizar contador del carrito
    updateCartCount() {
        const cartCount = document.getElementById('cart-count');
        const totalItems = this.getTotalItems();
        
        if (cartCount) {
            cartCount.textContent = totalItems;
            cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
        }
    }

    // Actualizar items del carrito
    updateCartItems() {
        const cartItemsContainer = document.getElementById('cart-items');
        if (!cartItemsContainer) return;

        if (this.items.length === 0) {
            cartItemsContainer.innerHTML = `
                <div class="empty-cart">
                    <i class="fas fa-shopping-cart"></i>
                    <p>Tu carrito está vacío</p>
                    <p>Agrega algunos productos para continuar</p>
                </div>
            `;
            return;
        }

        cartItemsContainer.innerHTML = this.items.map(item => {
            const hasDiscount = item.quantity % 6 === 0 && item.quantity > 0;
            const itemSubtotal = item.price * item.quantity;
            const discountedPrice = hasDiscount ? itemSubtotal * 0.95 : itemSubtotal;
            
            return `
                <div class="cart-item">
                    <div class="cart-item-image">
                        <i class="fas fa-wine-bottle"></i>
                    </div>
                    <div class="cart-item-info">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">$${item.price.toFixed(2)} c/u</div>
                        ${hasDiscount ? `
                            <div class="cart-item-discount">
                                <i class="fas fa-tag"></i>
                                5% de descuento aplicado
                            </div>
                        ` : ''}
                    </div>
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="cart.updateQuantity(${item.id}, ${item.quantity - 1})">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn" onclick="cart.updateQuantity(${item.id}, ${item.quantity + 1})">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                    <div class="cart-item-total">
                        ${hasDiscount ? `
                            <div class="original-price">$${itemSubtotal.toFixed(2)}</div>
                            <div class="discounted-price">$${discountedPrice.toFixed(2)}</div>
                        ` : `
                            <div class="item-total">$${discountedPrice.toFixed(2)}</div>
                        `}
                    </div>
                    <button class="remove-item" onclick="cart.removeItem(${item.id})" title="Eliminar producto">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `;
        }).join('');
    }

    // Actualizar total del carrito
    updateCartTotal() {
        const cartTotal = document.getElementById('cart-total');
        if (cartTotal) {
            const totalWithDiscount = this.getTotal();
            const totalWithoutDiscount = this.getTotalWithoutDiscount();
            const discount = this.getTotalDiscount();
            
            cartTotal.textContent = totalWithDiscount.toFixed(2);
            
            // Mostrar información de descuento si hay alguno
            const cartFooter = document.querySelector('.cart-footer');
            const existingDiscountInfo = cartFooter.querySelector('.discount-summary');
            
            if (discount > 0) {
                if (!existingDiscountInfo) {
                    const discountSummary = document.createElement('div');
                    discountSummary.className = 'discount-summary';
                    discountSummary.innerHTML = `
                        <div class="discount-line">
                            <span>Subtotal:</span>
                            <span>$${totalWithoutDiscount.toFixed(2)}</span>
                        </div>
                        <div class="discount-line">
                            <span>Descuento (5%):</span>
                            <span class="discount-amount">-$${discount.toFixed(2)}</span>
                        </div>
                    `;
                    cartFooter.insertBefore(discountSummary, cartFooter.querySelector('.cart-total'));
                } else {
                    existingDiscountInfo.innerHTML = `
                        <div class="discount-line">
                            <span>Subtotal:</span>
                            <span>$${totalWithoutDiscount.toFixed(2)}</span>
                        </div>
                        <div class="discount-line">
                            <span>Descuento (5%):</span>
                            <span class="discount-amount">-$${discount.toFixed(2)}</span>
                        </div>
                    `;
                }
            } else if (existingDiscountInfo) {
                existingDiscountInfo.remove();
            }
        }
    }

    // Mostrar/ocultar modal del carrito
    toggleModal() {
        const modal = document.getElementById('cart-modal');
        const isActive = modal.classList.contains('active');
        
        if (isActive) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        } else {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            this.updateCartUI();
        }
    }

    // Proceder al checkout
    proceedToCheckout() {
        if (this.items.length === 0) {
            this.showNotification('El carrito está vacío', 'error');
            return;
        }

        // Redirigir a la página de checkout con los datos del carrito
        window.location.href = 'pages/checkout.html';
    }

    // Procesar checkout (simulado)
    processCheckout() {
        // Mostrar loading
        const modal = document.getElementById('cart-modal');
        const cartContent = modal.querySelector('.cart-content');
        
        cartContent.innerHTML = `
            <div class="checkout-loading">
                <div class="loading">
                    <i class="fas fa-spinner"></i>
                    <p>Procesando compra...</p>
                </div>
            </div>
        `;

        // Simular proceso de pago
        setTimeout(() => {
            cartContent.innerHTML = `
                <div class="checkout-success">
                    <div class="success-icon">
                        <i class="fas fa-check-circle"></i>
                    </div>
                    <h3>¡Compra exitosa!</h3>
                    <p>Tu pedido ha sido procesado correctamente.</p>
                    <p><strong>Número de orden:</strong> #LP${Date.now()}</p>
                    <p>Recibirás un email con los detalles del pedido.</p>
                    <button class="close-success-btn" onclick="cart.closeCheckoutSuccess()">
                        Cerrar
                    </button>
                </div>
            `;

            // Vaciar carrito después del checkout
            this.items = [];
            this.saveCart();
            this.updateCartCount();

        }, 2000);
    }

    // Cerrar modal de éxito del checkout
    closeCheckoutSuccess() {
        this.toggleModal();
        this.showNotification('¡Gracias por tu compra!', 'success');
    }

    // Mostrar notificaciones
    showNotification(message, type = 'info') {
        // Remover notificación anterior si existe
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // Crear nueva notificación
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <i class="fas fa-${this.getNotificationIcon(type)}"></i>
            <span>${message}</span>
        `;

        // Estilos de la notificación
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${this.getNotificationColor(type)};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 10px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.2);
            z-index: 3000;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-weight: 500;
            animation: slideInRight 0.3s ease-out;
        `;

        document.body.appendChild(notification);

        // Remover notificación después de 3 segundos
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease-in';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }, 3000);
    }

    // Obtener icono para notificación
    getNotificationIcon(type) {
        const icons = {
            'success': 'check-circle',
            'error': 'exclamation-circle',
            'info': 'info-circle',
            'warning': 'exclamation-triangle'
        };
        return icons[type] || 'info-circle';
    }

    // Obtener color para notificación
    getNotificationColor(type) {
        const colors = {
            'success': '#10b981',
            'error': '#ef4444',
            'info': '#3b82f6',
            'warning': '#f59e0b'
        };
        return colors[type] || '#3b82f6';
    }
}

// Inicializar carrito
const cart = new ShoppingCart();

// Funciones globales para el HTML
function addToCart(productId) {
    cart.addItem(productId);
}

function toggleCart() {
    cart.toggleModal();
}

function clearCart() {
    if (cart.items.length === 0) {
        cart.showNotification('El carrito ya está vacío', 'info');
        return;
    }
    
    const confirmClear = confirm('¿Estás seguro de que quieres vaciar el carrito?');
    if (confirmClear) {
        cart.clearCart();
    }
}

function proceedToCheckout() {
    cart.proceedToCheckout();
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Cerrar modal del carrito al hacer clic fuera
    const cartModal = document.getElementById('cart-modal');
    if (cartModal) {
        cartModal.addEventListener('click', function(e) {
            if (e.target === this) {
                cart.toggleModal();
            }
        });
    }

    // Agregar estilos para las animaciones de notificaciones
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(100px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        @keyframes slideOutRight {
            from {
                opacity: 1;
                transform: translateX(0);
            }
            to {
                opacity: 0;
                transform: translateX(100px);
            }
        }

        .checkout-loading, .checkout-success {
            text-align: center;
            padding: 3rem 2rem;
        }

        .success-icon i {
            font-size: 4rem;
            color: #10b981;
            margin-bottom: 1rem;
        }

        .checkout-success h3 {
            font-family: var(--font-primary);
            color: var(--primary-color);
            margin-bottom: 1rem;
        }

        .checkout-success p {
            margin-bottom: 0.5rem;
            color: var(--text-light);
        }

        .close-success-btn {
            background: var(--primary-color);
            color: white;
            border: none;
            padding: 1rem 2rem;
            border-radius: 10px;
            cursor: pointer;
            margin-top: 1.5rem;
            transition: var(--transition);
        }

        .close-success-btn:hover {
            background: var(--accent-color);
        }
    `;
    document.head.appendChild(style);
});

// Exportar carrito para uso global
window.cart = cart;
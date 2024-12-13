// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function formatCurrency(amount) {
    return new Intl.NumberFormat("es-DO", {
      style: "currency",
      currency: "DOP",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
      .format(amount)
      .replace("DOP", "RD$")
      .trim();
  }
  
function updateCart() {
    const cartContent = document.getElementById('cart-content');
    const cartCount = document.getElementById('cart-count');
    
    if (cart.length === 0) {
        cartContent.innerHTML = `
            <div class="cart-empty">
                <h2>Tu carrito está vacío</h2>
                <p>¿Por qué no agregas algunos productos deliciosos?</p>
                <a href="menu.html" class="continue-shopping">
                    <i class="fas fa-arrow-left"></i> Continuar Comprando
                </a>
            </div>
        `;
        cartCount.textContent = '';
        localStorage.setItem("cart", JSON.stringify(cart));
        return;
    }

    let total = 0;
    let itemsHtml = '<div class="cart-items">';
    
    cart.forEach((item, index) => {
        const itemTotal = parseFloat(item.price.replace('RD$ ', '')) * item.quantity;
        total += itemTotal;
        
        itemsHtml += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="item-details">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                </div>
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${index}, -1)">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${index}, 1)">+</button>
                </div>
                <div class="item-price">RD$ ${itemTotal}</div>
                <button class="remove-btn" onclick="removeItem(${index})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
    });

    itemsHtml += '</div>';
    
    // Add summary
    itemsHtml += `
        <div class="cart-summary">
            <div class="summary-item">
                <span>Subtotal:</span>
                <span>RD$ ${total}</span>
            </div>
            <div class="summary-item">
                <span>Impuestos (18%):</span>
                <span>RD$ ${(total * 0.18).toFixed(2)}</span>
            </div>
            <div class="summary-item summary-total">
                <span>Total:</span>
                <span>${formatCurrency(total * 1.18)}</span>
            </div>
            <button class="checkout-btn" onclick="checkout()">Proceder al Pago</button>
            <a href="menu.html" class="continue-shopping">
                <i class="fas fa-arrow-left"></i> Continuar Comprando
            </a>
        </div>
    `;

    cartContent.innerHTML = itemsHtml;
    cartCount.textContent = `(${cart.length})`;
    
    // Update localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateQuantity(index, change) {
    cart[index].quantity = Math.max(1, cart[index].quantity + change);
    updateCart();
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

function checkout() {
    alert("Pago realizado. ¡Gracias por tu compra!");
    cart = [];
    updateCart();
}

// Initial cart update when page loads
document.addEventListener('DOMContentLoaded', updateCart);

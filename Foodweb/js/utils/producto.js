function loadProduct() {
    const params = new URLSearchParams(window.location.search);
    const productId = parseInt(params.get("id"));
    const product = getProductById(productId);

    if (!product) {
        window.location.href = "menu.html";
        return;
    }

    const productDetail = document.getElementById("productDetail");
    productDetail.innerHTML = `
        <div class="product-grid">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h1 class="product-title">${product.name}</h1>
                <div class="product-price">${product.price}</div>
                <p class="product-description">${product.longDescription || product.description}</p>
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateQuantity(-1)">-</button>
                    <span id="quantity">1</span>
                    <button class="quantity-btn" onclick="updateQuantity(1)">+</button>
                </div>
                <button class="add-to-cart" onclick="addToCart(${JSON.stringify(product).replace(/"/g, "&quot;")})">
                    Agregar al Carrito
                </button>
            </div>
        </div>
    `;
}

function updateQuantity(change) {
    const quantitySpan = document.getElementById("quantity");
    let quantity = parseInt(quantitySpan.textContent);
    quantity = Math.max(1, quantity + change);
    quantitySpan.textContent = quantity;
}

function addToCart(item) {
    const quantity = parseInt(document.getElementById("quantity").textContent);
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find((i) => i.id === item.id);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ ...item, quantity });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("¡Producto agregado al carrito!");
}

// Load product details when page loads
document.addEventListener('DOMContentLoaded', loadProduct);

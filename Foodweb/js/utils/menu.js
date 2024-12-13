function createMenuItems() {
    const menuGrid = document.getElementById("menuGrid");
    menuGrid.innerHTML = "";
    
    menuItems.forEach((item) => {
        const menuItem = document.createElement("div");
        menuItem.className = `menu-item show`;
        menuItem.dataset.category = item.category;
     
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <div class="price">${item.price}</div>
                <span class="category-tag">${item.category}</span>
                <div class="item-actions" style="margin-top: 15px; display: flex; gap: 10px;">
                    <a href="producto.html?id=${item.id}" class="view-details" style="padding: 5px 10px; background: var(--secondary-color); color: white; text-decoration: none; border-radius: 5px;">
                        Ver Detalles
                    </a>
                    <button onclick="addToCart(${JSON.stringify(item).replace(/"/g, "&quot;")})" style="padding: 5px 10px; background: var(--primary-color); color: white; border: none; border-radius: 5px; cursor: pointer;">
                        Agregar al Carrito
                    </button>
                </div>
            </div>
        `;
        
        menuGrid.appendChild(menuItem);
    });
}

function addToCart(item) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find((i) => i.id === item.id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("¡Producto agregado al carrito!");
}

function filterMenu(category) {
    const items = document.querySelectorAll(".menu-item");
    items.forEach((item) => {
        if (category === "todos" || item.dataset.category === category) {
            item.classList.add("show");
        } else {
            item.classList.remove("show");
        }
    });
}

function handleSearch(searchTerm) {
    const filteredItems = searchProducts(searchTerm);
    const menuGrid = document.getElementById("menuGrid");
    menuGrid.innerHTML = "";

    if (filteredItems.length === 0) {
        menuGrid.innerHTML = `
            <div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 20px;">
                <p>No se encontraron resultados para "${searchTerm}"</p>
            </div>
        `;
        return;
    }

    filteredItems.forEach(item => {
        const menuItem = document.createElement("div");
        menuItem.className = `menu-item show`;
        menuItem.dataset.category = item.category;

        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <div class="price">${item.price}</div>
                <span class="category-tag">${item.category}</span>
                <div class="item-actions" style="margin-top: 15px; display: flex; gap: 10px;">
                    <a href="producto.html?id=${item.id}" class="view-details" style="padding: 5px 10px; background: var(--secondary-color); color: white; text-decoration: none; border-radius: 5px;">
                        Ver Detalles
                    </a>
                    <button onclick="addToCart(${JSON.stringify(item).replace(/"/g, "&quot;")})" style="padding: 5px 10px; background: var(--primary-color); color: white; border: none; border-radius: 5px; cursor: pointer;">
                        Agregar al Carrito
                    </button>
                </div>
            </div>
        `;

        menuGrid.appendChild(menuItem);
    });
}

// Initialize menu when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize menu
    createMenuItems();

    // Add filter functionality
    const filterButtons = document.querySelectorAll(".filter-btn");
    filterButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            filterButtons.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            filterMenu(btn.dataset.category);
            document.getElementById('searchInput').value = ''; // Clear search when filtering
        });
    });

    // Add search functionality
    const searchInput = document.getElementById('searchInput');
    let searchTimeout;

    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            const searchTerm = e.target.value.trim();
            if (searchTerm) {
                handleSearch(searchTerm);
                // Reset filter buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                filterButtons[0].classList.add('active');
            } else {
                createMenuItems();
            }
        }, 300);
    });
});

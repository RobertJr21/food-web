/* Aca solo seria agregar mas productos al array menuItems y reemplazar las imagenes de placeholder.com por las imagenes reales de los productos. */
const menuItems = [
  {
    id: 1,
    name: "Pizza Margarita",
    category: "pizzas",
    price: "RD$ 500",
    description: "Tomate, mozzarella y albahaca fresca",
    image: "imagenes/Pizzas/pizza_margarita.jpg",
    longDescription:
      "Una deliciosa pizza tradicional italiana con salsa de tomate, mozzarella fresca y hojas de albahaca. Perfectamente horneada en horno de piedra.",
  },
  {
    id: 2,
    name: "Hamburguesa Clásica",
    category: "hamburguesas",
    price: "RD$ 450",
    description: "Carne de res, lechuga, tomate",
    image: "imagenes/Hamburguesas/hamburguesa_clasica.jpg",
    longDescription:
      "Una hamburguesa clásica con carne de res jugosa, lechuga fresca y tomate. Servida en un pan suave y esponjoso.",
  },
  {
    id: 3,
    name: "Tacos al Pastor",
    category: "tacos",
    price: "RD$ 350",
    description: "Cerdo marinado, piña, cilantro",
    image: "imagenes/Tacos/tacos_al_pastor.jpg",
    longDescription:
      "Tacos tradicionales mexicanos con cerdo marinado, piña dulce y cilantro fresco. Servidos en tortillas de maíz.",
  },
  {
    id: 4,
    name: "Burrito de Pollo",
    category: "burritos",
    price: "RD$ 400",
    description: "Pollo, arroz, frijoles, pico de gallo",
    image: "imagenes/Burritos/burrito_de_pollo.jpg",
    longDescription:
      "Un burrito lleno de sabor con pollo tierno, arroz, frijoles y pico de gallo. Envueltos en una tortilla de harina suave.",
  },
  {
    id: 5,
    name: "La Bandera",
    category: "tipicos",
    price: "RD$ 300",
    description: "Arroz, habichuelas y carne guisada",
    image: "imagenes/Platillos dominicanos/bandera_dominicana.jpg",
    longDescription:
      "El plato típico dominicano con arroz blanco, habichuelas guisadas y carne guisada. Un clásico que no puede faltar.",
  },
  {
    id: 6,
    name: "Mangú Tres Golpes",
    category: "tipicos",
    price: "RD$ 250",
    description: "Mangú con huevos, queso y salami",
    image: "imagenes/Platillos dominicanos/mangu_tres_golpes.jpg",
    longDescription:
      "Un desayuno tradicional dominicano con mangú, huevos fritos, queso frito y salami. Una explosión de sabores.",
  },
  {
    id: 7,
    name: "Morir Soñando",
    category: "bebidas",
    price: "RD$ 150",
    description: "Bebida tradicional de leche y naranja",
    image: "imagenes/Bebidas/morir_soñando.jpg",
    longDescription:
      "Una bebida refrescante y cremosa hecha con leche y jugo de naranja. Perfecta para cualquier momento del día.",
  },
  {
    id: 8,
    name: "Pizza Pepperoni",
    category: "pizzas",
    price: "RD$ 600",
    description: "Pepperoni premium y queso fundido",
    image: "imagenes/Pizzas/pizza_con_pepperoni.jpg",
    longDescription:
      "Una deliciosa pizza con abundante pepperoni y queso mozzarella derretido.",
  },
  {
    id: 9,
    name: "Hamburguesa BBQ",
    category: "hamburguesas",
    price: "RD$ 500",
    description: "Con salsa BBQ y aros de cebolla",
    image: "imagenes/Hamburguesas/hamburguesa_bbq.jpg",
    longDescription:
      "Sabrosa hamburguesa con nuestra salsa BBQ especial y aros de cebolla crujientes.",
  },
  {
    id: 10,
    name: "Pizza Vegetariana",
    category: "pizzas",
    price: "RD$ 550",
    description: "Vegetales frescos y queso",
    image: "imagenes/Pizzas/pizza_vegetariana.jpg",
    longDescription:
      "Pizza vegetariana con variedad de vegetales frescos y queso mozzarella.",
  },
  {
    id: 11,
    name: "Hamburguesa Mexicana",
    category: "hamburguesas",
    price: "RD$ 575",
    description: "Con guacamole y jalapeños",
    image: "imagenes/Hamburguesas/hamburguesa_mexicana.jpg",
    longDescription:
      "Hamburguesa picante con guacamole fresco, jalapeños y queso derretido.",
  },
  {
    id: 12,
    name: "Chimi Dominicano",
    category: "tipicos",
    price: "RD$ 200",
    description: "Hamburguesa dominicana tradicional",
    image: "imagenes/Platillos dominicanos/chimi_dominicano.jpg",
    longDescription:
      "El auténtico chimichurri dominicano, preparado con carne sazonada, repollo y salsa especial en pan de agua.",
  },
  {
    id: 13,
    name: "Sancocho",
    category: "tipicos",
    price: "RD$ 450",
    description: "Sopa tradicional dominicana",
    image: "imagenes/Platillos dominicanos/sancocho_dominicano.jpg",
    longDescription:
      "Delicioso sancocho dominicano con siete carnes, tubérculos y verduras, servido con arroz blanco y aguacate.",
  },
  {
    id: 14,
    name: "Pizza Suprema",
    category: "pizzas",
    price: "RD$ 750",
    description: "Pizza cargada con todo",
    image: "imagenes/Pizzas/pizza_suprema.jpg",
    longDescription:
      "Pizza suprema con pepperoni, jamón, pimientos, champiñones, aceitunas y extra queso mozzarella.",
  },
  {
    id: 15,
    name: "Hamburguesa Doble",
    category: "hamburguesas",
    price: "RD$ 650",
    description: "Doble carne y doble queso",
    image: "imagenes/Hamburguesas/hamburguesa_doble_carne.jpg",
    longDescription:
      "Hamburguesa doble con dos tortas de carne jugosa, doble queso cheddar, tocino y nuestra salsa especial.",
  },
  {
    id: 16,
    name: "Tacos de Pescado",
    category: "tacos",
    price: "RD$ 375",
    description: "Pescado fresco, repollo y salsa especial",
    image: "imagenes/Tacos/tacos_de_pescado.jpg",
    longDescription: "Tacos de pescado fresco empanizado, servidos con repollo rallado, salsa de chipotle y limón.",
  },
  {
    id: 17,
    name: "Tacos de Camarón",
    category: "tacos",
    price: "RD$ 400",
    description: "Camarones salteados con ajo y limón",
    image: "imagenes/Tacos/tacos_con_camarones.jpg",
    longDescription: "Deliciosos tacos de camarón salteados con ajo y limón, servidos con pico de gallo y aguacate.",
  },
  {
    id: 18,
    name: "Burrito Vegetariano",
    category: "burritos",
    price: "RD$ 350",
    description: "Vegetales, guacamole y frijoles",
    image: "imagenes/Burritos/burrito_vegetariano.jpg",
    longDescription: "Burrito saludable lleno de vegetales frescos, guacamole cremoso y frijoles refritos.",
  },
  {
    id: 19,
    name: "Burrito de Carne",
    category: "burritos",
    price: "RD$ 425",
    description: "Carne asada, queso y guacamole",
    image: "imagenes/Burritos/burrito_de_carne.jpg",
    longDescription: "Burrito abundante con carne asada, queso derretido, guacamole y pico de gallo.",
  },
  {
    id: 20,
    name: "Chinola Natural",
    category: "bebidas",
    price: "RD$ 125",
    description: "Jugo natural de chinola",
    image: "imagenes/Bebidas/jugo_de_chinola.jpg",
    longDescription: "Refrescante jugo natural de chinola, endulzado al gusto.",
  },
  {
    id: 21,
    name: "Batida de Zapote",
    category: "bebidas",
    price: "RD$ 175",
    description: "Batida cremosa de zapote",
    image: "imagenes/Bebidas/batida_de_zapote.jpg",
    longDescription: "Deliciosa batida cremosa hecha con zapote maduro y leche.",
  }
];

// Función para obtener productos por categoría
function getProductsByCategory(category) {
  if (category === "todos") return menuItems;
  return menuItems.filter((item) => item.category === category);
}

// Función para obtener un producto por ID
function getProductById(id) {
  return menuItems.find((item) => item.id === id);
}

// Función para buscar productos
function searchProducts(searchTerm) {
  searchTerm = searchTerm.toLowerCase();
  return menuItems.filter(item => 
    item.name.toLowerCase().includes(searchTerm) ||
    item.description.toLowerCase().includes(searchTerm) ||
    item.category.toLowerCase().includes(searchTerm) ||
    item.longDescription.toLowerCase().includes(searchTerm)
  );
}

// Ejemplo de uso:
// searchProducts("pizza") - encontrará todas las pizzas
// searchProducts("pollo") - encontrará items con pollo
// searchProducts("tipicos") - encontrará comida típica

class Flower {
  constructor(name, colour, age) {
    this.name = name;
    this.colour = colour;
    this.age = age;
  }
}

class FlowerCollection {
  constructor() {
    this.flowers = [];
  }

  addFlower(flower) {
    if (flower instanceof Flower) {
      this.flowers.push(flower);
    } else {
      throw new Error('Only Flower objects can be added to the collection');
    }
  }

  // Optional: method to add flower by properties
  addFlowerByDetails(name, colour, age) {
    const flower = new Flower(name, colour, age);
    this.addFlower(flower);
  }
}

// kirk it up 
const flowerCollection = new FlowerCollection();

// Create instances for each flower
const sunflower = new Flower('Zonnebloemen', 'Yellow', 3);
const redTulip = new Flower('Rode Tulpen', 'Red', 2);
const cactus = new Flower('Cactus in pot', 'Green', 30); // Assuming days old
const specialGrass = new Flower('Speciaal deze maand', 'Green', 1);
const purpleAllium = new Flower('Paarse Allium Bloemen', 'Purple', 4);
const succulents = new Flower('Vetbloemen', 'Green', 7);

// Add them to the collection
flowerCollection.addFlower(sunflower);
flowerCollection.addFlower(redTulip);
flowerCollection.addFlower(cactus);
flowerCollection.addFlower(specialGrass);
flowerCollection.addFlower(purpleAllium);
flowerCollection.addFlower(succulents);

document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.FlowerCollection img');
  images.forEach(img => {
    const name = img.alt && img.alt.trim() ? img.alt.trim() : img.src;
    // Assuming default colour and age since not provided in HTML
    flowerCollection.addFlowerByDetails(name, 'Unknown', 0);
  });

  console.log('Loaded flowers:', flowerCollection.flowers);
});

const addBtn = document.querySelector(".addFlowerBtn");
const fileInput = document.getElementById("flowerPicker");
const container = document.querySelector(".assortiment-figure");

// Load saved flowers on page load
window.addEventListener("DOMContentLoaded", () => {
  let saved = JSON.parse(localStorage.getItem("flowers")) || [];

  // If no saved flowers exist, import static HTML flowers into localStorage
  if (saved.length === 0) {
    document.querySelectorAll(".assortiment-figure .flower").forEach(flower => {
      const img = flower.querySelector("img").src;
      const price = flower.querySelector("figcaption").innerHTML; // <-- FIXED
      const isBig = flower.classList.contains("big");

      saved.push({ img, price, big: isBig });
    });

    localStorage.setItem("flowers", JSON.stringify(saved));
  }

  // Remove static HTML flowers
  container.innerHTML = "";

  // Load all flowers from localStorage
  saved.forEach((flower, index) => {
    addFlowerToGrid(flower.img, flower.price, index, flower.big);
  });
});

// Open file picker when button is clicked
addBtn.addEventListener("click", () => {
  fileInput.click();
});

// When user selects an image
fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];
  if (!file) return;

  const price = prompt("Enter the caption (use <br> for new lines):"); // <-- FIXED
  const makeBig = confirm("Do you want this flower to be BIG?");

  const reader = new FileReader();

  reader.onload = function (event) {
    const base64Image = event.target.result;

    // Save to localStorage
    const saved = JSON.parse(localStorage.getItem("flowers")) || [];
    saved.push({ img: base64Image, price, big: makeBig });
    localStorage.setItem("flowers", JSON.stringify(saved));

    // Add to page
    addFlowerToGrid(base64Image, price, saved.length - 1, makeBig);
  };

  reader.readAsDataURL(file);
  fileInput.value = "";
});

// Add flower to grid
function addFlowerToGrid(imgSrc, price, index, isBig) {
  const figure = document.createElement("div");
  figure.classList.add("flower");
  figure.dataset.index = index;

  if (isBig) {
    figure.classList.add("big");
  }

  const img = document.createElement("img");
  img.src = imgSrc;
  img.width = isBig ? 370 : 150;
  img.height = isBig ? 390 : 150;

  const caption = document.createElement("figcaption");
  caption.innerHTML = price ? price : "No price"; // <-- FIXED

  // Add to cart button
  const addBtn = document.createElement("button");
  addBtn.classList.add("add-to-cart-btn");
  addBtn.textContent = "Add to cart";
  addBtn.addEventListener('click', () => {
    const name = price.split('<br>')[0].trim() || 'Flower';
    addToCart(name, price, imgSrc);
  });

  // Delete button
  const delBtn = document.createElement("button");
  delBtn.classList.add("delete-btn");
  delBtn.textContent = "✖";

  delBtn.addEventListener("click", () => {
    deleteFlower(index);
    figure.remove();
  });

  figure.appendChild(img);
  figure.appendChild(caption);
  figure.appendChild(addBtn);
  figure.appendChild(delBtn);
  container.appendChild(figure);
}

// Delete flower from localStorage
function deleteFlower(index) {
  let saved = JSON.parse(localStorage.getItem("flowers")) || [];
  saved.splice(index, 1);
  localStorage.setItem("flowers", JSON.stringify(saved));

  rebuildGrid();
}

// Rebuild grid after deletion
function rebuildGrid() {
  container.innerHTML = "";

  const saved = JSON.parse(localStorage.getItem("flowers")) || [];

  saved.forEach((flower, index) => {
    addFlowerToGrid(flower.img, flower.price, index, flower.big);
  });
}

// Shopping Cart functionality
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(name, price, imgSrc) {
  // Extract numeric price
  const priceMatch = price.match(/€(\d+(?:,\d+)?)/);
  const numericPrice = priceMatch ? parseFloat(priceMatch[1].replace(',', '.')) : 0;

  const item = {
    name: name,
    price: numericPrice,
    image: imgSrc,
    quantity: 1
  };

  // Check if item already in cart
  const existing = cart.find(i => i.name === name && i.image === imgSrc);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push(item);
  }

  saveCart();
  alert(`${name} added to cart!`);
}

function calculateTotal() {
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function loadCart() {
  const orderSummary = document.querySelector('.order-summary');
  if (!orderSummary) return; // Not on cart page

  let html = '<h3>Shopping Cart</h3>';
  if (cart.length === 0) {
    html += '<p>Your cart is empty.</p>';
  } else {
    cart.forEach((item, index) => {
      const subtotal = (item.price * item.quantity).toFixed(2);
      html += `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.name}" width="50" height="50">
          <div class="item-details">
            <span class="item-name">${item.name}</span>
            <span class="item-price">€${item.price.toFixed(2)}</span>
            <div class="quantity-controls">
              <button onclick="changeQuantity(${index}, -1)">-</button>
              <span class="quantity">${item.quantity}</span>
              <button onclick="changeQuantity(${index}, 1)">+</button>
            </div>
            <span class="subtotal">Subtotal: €${subtotal}</span>
            <button onclick="removeFromCart(${index})">Remove</button>
          </div>
        </div>
      `;
    });
  }

  const total = calculateTotal();
  html += `<p><strong>Total: €${total.toFixed(2)}</strong></p>`;

  orderSummary.innerHTML = html;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  loadCart();
}

function changeQuantity(index, delta) {
  cart[index].quantity += delta;
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }
  saveCart();
  loadCart();
}

// Add click listeners to flower images
document.addEventListener('DOMContentLoaded', () => {
  // For static flowers
  document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const flowerDiv = btn.closest('.flower');
      const figcaption = flowerDiv.querySelector('figcaption');
      const img = flowerDiv.querySelector('img');
      const name = figcaption ? figcaption.textContent.split('<br>')[0].trim() : img.alt;
      const price = figcaption ? figcaption.innerHTML : '€0,-';
      addToCart(name, price, img.src);
    });
  });

  // Load cart if on cart page
  loadCart();
});
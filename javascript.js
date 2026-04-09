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

  addFlowerByDetails(name, colour, age) {
    const flower = new Flower(name, colour, age);
    this.addFlower(flower);
  }
}

const flowerCollection = new FlowerCollection();

const sunflower = new Flower('Zonnebloemen', 'Yellow', 3);
const redTulip = new Flower('Rode Tulpen', 'Red', 2);
const cactus = new Flower('Cactus in pot', 'Green', 30);
const specialGrass = new Flower('Speciaal deze maand', 'Green', 1);
const purpleAllium = new Flower('Paarse Allium Bloemen', 'Purple', 4);
const succulents = new Flower('Vetbloemen', 'Green', 7);

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
    flowerCollection.addFlowerByDetails(name, 'Unknown', 0);
  });


});

const addBtn = document.querySelector(".addFlowerBtn");
const fileInput = document.getElementById("flowerPicker");
const container = document.querySelector(".assortiment-figure");

window.addEventListener("DOMContentLoaded", () => {
  if (container) {
    let saved = JSON.parse(localStorage.getItem("flowers")) || [];

    if (saved.length === 0) {
      document.querySelectorAll(".assortiment-figure .flower").forEach(flower => {
        const img = flower.querySelector("img").src;
        const price = flower.querySelector("figcaption").innerHTML;
        const isBig = flower.classList.contains("big");

        saved.push({ img, price, big: isBig });
      });

      localStorage.setItem("flowers", JSON.stringify(saved));
    }

    container.innerHTML = "";

    saved.forEach((flower, index) => {
      addFlowerToGrid(flower.img, flower.price, index, flower.big);
    });
  }
});

if (addBtn) {
  addBtn.addEventListener("click", () => {
    fileInput.click();
  });
}

if (fileInput) {
  fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];
  if (!file) return;

  const price = prompt("Enter the caption (use <br> for new lines):");
  const makeBig = confirm("Do you want this flower to be BIG?");

  const reader = new FileReader();

  reader.onload = function (event) {
    const base64Image = event.target.result;

    const saved = JSON.parse(localStorage.getItem("flowers")) || [];
    saved.push({ img: base64Image, price, big: makeBig });
    localStorage.setItem("flowers", JSON.stringify(saved));

    addFlowerToGrid(base64Image, price, saved.length - 1, makeBig);
  };

  reader.readAsDataURL(file);
  fileInput.value = "";
  });
}

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
  caption.innerHTML = price ? price : "No price";

  const addBtn = document.createElement("button");
  addBtn.classList.add("add-to-cart-btn");
  addBtn.textContent = "Add to cart";
  addBtn.addEventListener('click', () => {
    const name = price.split('<br>')[0].trim() || 'Flower';
    addToCart(name, price, imgSrc);
  });

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

function deleteFlower(index) {
  let saved = JSON.parse(localStorage.getItem("flowers")) || [];
  saved.splice(index, 1);
  localStorage.setItem("flowers", JSON.stringify(saved));

  rebuildGrid();
}

function rebuildGrid() {
  container.innerHTML = "";

  const saved = JSON.parse(localStorage.getItem("flowers")) || [];

  saved.forEach((flower, index) => {
    addFlowerToGrid(flower.img, flower.price, index, flower.big);
  });
}

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(name, price, imgSrc) {
  const priceMatch = price.match(/€\s*(\d+(?:,\d+)?)/);
  const numericPrice = priceMatch ? parseFloat(priceMatch[1].replace(',', '.')) : 0;

  const item = {
    name: name,
    price: numericPrice,
    image: imgSrc,
    quantity: 1
  };

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
  if (!orderSummary) return;

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

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const flowerDiv = btn.closest('.flower');
      const figcaption = flowerDiv.querySelector('figcaption');
      const img = flowerDiv.querySelector('img');
      const name = figcaption ? figcaption.innerHTML.split('<br>')[0].trim() : img.alt;
      const price = figcaption ? figcaption.innerHTML : '€0,-';
      addToCart(name, price, img.src);
    });
  });

  loadCart();
});
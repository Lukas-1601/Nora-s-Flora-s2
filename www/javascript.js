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

// Items/Products
const spoon = new Flower('Spoon', 'Silver', 0);
const backpack = new Flower('Backpack', 'Black', 0);
const candle = new Flower('Candle', 'White', 0);
const hammer = new Flower('Hammer', 'Brown', 0);
const pillow = new Flower('Pillow', 'White', 0);
const bicycle = new Flower('Bicycle', 'Red', 0);
const notebook = new Flower('Notebook', 'Blue', 0);
const keychain = new Flower('Keychain', 'Silver', 0);
const umbrella = new Flower('Umbrella', 'Black', 0);
const mug = new Flower('Mug', 'White', 0);
const flashlight = new Flower('Flashlight', 'Black', 0);
const toothbrush = new Flower('Toothbrush', 'Blue', 0);
const ladder = new Flower('Ladder', 'Yellow', 0);
const clock = new Flower('Clock', 'Black', 0);
const scissors = new Flower('Scissors', 'Silver', 0);
const wallet = new Flower('Wallet', 'Brown', 0);
const tennisBall = new Flower('Tennis ball', 'Yellow', 0);
const paintbrush = new Flower('Paintbrush', 'Brown', 0);
const mirror = new Flower('Mirror', 'Silver', 0);
const stapler = new Flower('Stapler', 'Black', 0);
const helmet = new Flower('Helmet', 'White', 0);
const guitar = new Flower('Guitar', 'Brown', 0);
const remoteControl = new Flower('Remote control', 'Black', 0);
const waterBottle = new Flower('Water bottle', 'Blue', 0);
const ruler = new Flower('Ruler', 'Yellow', 0);
const vase = new Flower('Vase', 'White', 0);
const calculator = new Flower('Calculator', 'Black', 0);
const blanket = new Flower('Blanket', 'Blue', 0);
const sunglasses = new Flower('Sunglasses', 'Black', 0);
const doorHandle = new Flower('Door handle', 'Silver', 0);
const fryingPan = new Flower('Frying pan', 'Black', 0);
const tapeMeasure = new Flower('Tape measure', 'Yellow', 0);
const mousePad = new Flower('Mouse pad', 'Gray', 0);
const lantern = new Flower('Lantern', 'Black', 0);
const bookcase = new Flower('Bookcase', 'Brown', 0);
const camera = new Flower('Camera', 'Black', 0);
const dice = new Flower('Dice', 'White', 0);
const skateboard = new Flower('Skateboard', 'Red', 0);
const thermometer = new Flower('Thermometer', 'Red', 0);
const flowerpot = new Flower('Flowerpot', 'Brown', 0);
const snowGlobe = new Flower('Snow globe', 'White', 0);
const corkscrew = new Flower('Corkscrew', 'Silver', 0);
const binoculars = new Flower('Binoculars', 'Black', 0);
const whistle = new Flower('Whistle', 'Silver', 0);
const compass = new Flower('Compass', 'Silver', 0);
const chessPiece = new Flower('Chess piece', 'White', 0);
const paperclip = new Flower('Paperclip', 'Silver', 0);
const hairbrush = new Flower('Hairbrush', 'Pink', 0);
const alarmClock = new Flower('Alarm clock', 'Black', 0);
const towel = new Flower('Towel', 'White', 0);
const shovel = new Flower('Shovel', 'Brown', 0);
const magnet = new Flower('Magnet', 'Red', 0);
const necklace = new Flower('Necklace', 'Gold', 0);
const drumstick = new Flower('Drumstick', 'Brown', 0);
const teapot = new Flower('Teapot', 'White', 0);
const globe = new Flower('Globe', 'Blue', 0);
const backpackClip = new Flower('Backpack clip', 'Black', 0);
const toyCar = new Flower('Toy car', 'Red', 0);
const extensionCord = new Flower('Extension cord', 'Black', 0);
const basket = new Flower('Basket', 'Brown', 0);
const windowBlind = new Flower('Window blind', 'White', 0);
const soapDispenser = new Flower('Soap dispenser', 'White', 0);
const coatHanger = new Flower('Coat hanger', 'Wood', 0);
const earphones = new Flower('Earphones', 'Black', 0);
const pictureFrame = new Flower('Picture frame', 'Brown', 0);
const gardenHose = new Flower('Garden hose', 'Green', 0);
const cuttingBoard = new Flower('Cutting board', 'Brown', 0);
const screwdriver = new Flower('Screwdriver', 'Black', 0);
const cookieJar = new Flower('Cookie jar', 'White', 0);
const lamp = new Flower('Lamp', 'White', 0);
const plushToy = new Flower('Plush toy', 'Brown', 0);
const filingCabinet = new Flower('Filing cabinet', 'Gray', 0);
const coffeeGrinder = new Flower('Coffee grinder', 'Black', 0);
const beachBall = new Flower('Beach ball', 'Colorful', 0);
const apron = new Flower('Apron', 'White', 0);
const rubberBand = new Flower('Rubber band', 'Red', 0);
const snowShovel = new Flower('Snow shovel', 'Red', 0);
const inkPen = new Flower('Ink pen', 'Black', 0);
const wrench = new Flower('Wrench', 'Silver', 0);
const bookmark = new Flower('Bookmark', 'Yellow', 0);
const bell = new Flower('Bell', 'Gold', 0);
const wateringCan = new Flower('Watering can', 'Green', 0);
const cushion = new Flower('Cushion', 'Blue', 0);
const telescope = new Flower('Telescope', 'Black', 0);
const lunchbox = new Flower('Lunchbox', 'Blue', 0);
const battery = new Flower('Battery', 'Black', 0);
const doormat = new Flower('Doormat', 'Brown', 0);
const iron = new Flower('Iron', 'Black', 0);
const sewingNeedle = new Flower('Sewing needle', 'Silver', 0);
const frisbee = new Flower('Frisbee', 'Red', 0);
const birdhouse = new Flower('Birdhouse', 'Brown', 0);
const chessboard = new Flower('Chessboard', 'Black', 0);
const tripod = new Flower('Tripod', 'Black', 0);
const yoyo = new Flower('Yo-yo', 'Yellow', 0);
const squeegee = new Flower('Squeegee', 'Blue', 0);
const paddle = new Flower('Paddle', 'Brown', 0);
const measuringCup = new Flower('Measuring cup', 'White', 0);
const clayPot = new Flower('Clay pot', 'Brown', 0);
const toolbox = new Flower('Toolbox', 'Red', 0);
const windChime = new Flower('Wind chime', 'Silver', 0);

flowerCollection.addFlower(sunflower);
flowerCollection.addFlower(redTulip);
flowerCollection.addFlower(cactus);
flowerCollection.addFlower(specialGrass);
flowerCollection.addFlower(purpleAllium);
flowerCollection.addFlower(succulents);

// Add all items to collection
flowerCollection.addFlower(spoon);
flowerCollection.addFlower(backpack);
flowerCollection.addFlower(candle);
flowerCollection.addFlower(hammer);
flowerCollection.addFlower(pillow);
flowerCollection.addFlower(bicycle);
flowerCollection.addFlower(notebook);
flowerCollection.addFlower(keychain);
flowerCollection.addFlower(umbrella);
flowerCollection.addFlower(mug);
flowerCollection.addFlower(flashlight);
flowerCollection.addFlower(toothbrush);
flowerCollection.addFlower(ladder);
flowerCollection.addFlower(clock);
flowerCollection.addFlower(scissors);
flowerCollection.addFlower(wallet);
flowerCollection.addFlower(tennisBall);
flowerCollection.addFlower(paintbrush);
flowerCollection.addFlower(mirror);
flowerCollection.addFlower(stapler);
flowerCollection.addFlower(helmet);
flowerCollection.addFlower(guitar);
flowerCollection.addFlower(remoteControl);
flowerCollection.addFlower(waterBottle);
flowerCollection.addFlower(ruler);
flowerCollection.addFlower(vase);
flowerCollection.addFlower(calculator);
flowerCollection.addFlower(blanket);
flowerCollection.addFlower(sunglasses);
flowerCollection.addFlower(doorHandle);
flowerCollection.addFlower(fryingPan);
flowerCollection.addFlower(tapeMeasure);
flowerCollection.addFlower(mousePad);
flowerCollection.addFlower(lantern);
flowerCollection.addFlower(bookcase);
flowerCollection.addFlower(camera);
flowerCollection.addFlower(dice);
flowerCollection.addFlower(skateboard);
flowerCollection.addFlower(thermometer);
flowerCollection.addFlower(flowerpot);
flowerCollection.addFlower(snowGlobe);
flowerCollection.addFlower(corkscrew);
flowerCollection.addFlower(binoculars);
flowerCollection.addFlower(whistle);
flowerCollection.addFlower(compass);
flowerCollection.addFlower(chessPiece);
flowerCollection.addFlower(paperclip);
flowerCollection.addFlower(hairbrush);
flowerCollection.addFlower(alarmClock);
flowerCollection.addFlower(towel);
flowerCollection.addFlower(shovel);
flowerCollection.addFlower(magnet);
flowerCollection.addFlower(necklace);
flowerCollection.addFlower(drumstick);
flowerCollection.addFlower(teapot);
flowerCollection.addFlower(globe);
flowerCollection.addFlower(backpackClip);
flowerCollection.addFlower(toyCar);
flowerCollection.addFlower(extensionCord);
flowerCollection.addFlower(basket);
flowerCollection.addFlower(windowBlind);
flowerCollection.addFlower(soapDispenser);
flowerCollection.addFlower(coatHanger);
flowerCollection.addFlower(earphones);
flowerCollection.addFlower(pictureFrame);
flowerCollection.addFlower(gardenHose);
flowerCollection.addFlower(cuttingBoard);
flowerCollection.addFlower(screwdriver);
flowerCollection.addFlower(cookieJar);
flowerCollection.addFlower(lamp);
flowerCollection.addFlower(plushToy);
flowerCollection.addFlower(filingCabinet);
flowerCollection.addFlower(coffeeGrinder);
flowerCollection.addFlower(beachBall);
flowerCollection.addFlower(apron);
flowerCollection.addFlower(rubberBand);
flowerCollection.addFlower(snowShovel);
flowerCollection.addFlower(inkPen);
flowerCollection.addFlower(wrench);
flowerCollection.addFlower(bookmark);
flowerCollection.addFlower(bell);
flowerCollection.addFlower(wateringCan);
flowerCollection.addFlower(cushion);
flowerCollection.addFlower(telescope);
flowerCollection.addFlower(lunchbox);
flowerCollection.addFlower(battery);
flowerCollection.addFlower(doormat);
flowerCollection.addFlower(iron);
flowerCollection.addFlower(sewingNeedle);
flowerCollection.addFlower(frisbee);
flowerCollection.addFlower(birdhouse);
flowerCollection.addFlower(chessboard);
flowerCollection.addFlower(tripod);
flowerCollection.addFlower(yoyo);
flowerCollection.addFlower(squeegee);
flowerCollection.addFlower(paddle);
flowerCollection.addFlower(measuringCup);
flowerCollection.addFlower(clayPot);
flowerCollection.addFlower(toolbox);
flowerCollection.addFlower(windChime);

document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.FlowerCollection img');
  images.forEach(img => {
    const name = img.alt && img.alt.trim() ? img.alt.trim() : img.src;
    flowerCollection.addFlowerByDetails(name, 'Unknown', 0);
  });


});

const searchInput = document.getElementById("flower-search");
const resultsList = document.getElementById("flower-results-list");
const previewItems = document.querySelectorAll(".flower-preview-item");

function renderFlowerResults() {
  const query = (searchInput?.value || "").trim().toLowerCase();

  previewItems.forEach((item) => {
    const label = item.textContent.toLowerCase();
    const matches = !query || label.includes(query);
    item.classList.toggle("is-hidden", !matches);
  });

  if (resultsList) {
    resultsList.innerHTML = "";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (searchInput) {
    searchInput.addEventListener("input", renderFlowerResults);
  }

  renderFlowerResults();
});

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

function showForm(form) {
    document.querySelectorAll(".form").forEach(f => f.classList.remove("active"));
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));

    document.getElementById(form).classList.add("active");
    event.target.classList.add("active");
}

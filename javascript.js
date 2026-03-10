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

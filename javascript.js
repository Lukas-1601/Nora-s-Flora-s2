class FlowerCollection {
  constructor() {
    this.flowers = [];
  }

  addFlower(name) {
    this.flowers.push(name);
  }
}

// populate the collection when the page is ready
const flowerCollection = new FlowerCollection();

document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.FlowerCollection img');
  images.forEach(img => {
    const name = img.alt && img.alt.trim() ? img.alt.trim() : img.src;
    flowerCollection.addFlower(name);
  });

  console.log('Loaded flowers:', flowerCollection.flowers);
});

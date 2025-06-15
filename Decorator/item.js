class Item {
    constructor(itemName, itemCost) {
      this.itemName = itemName;
      this.itemCost = itemCost;
    }
  
    showDetails() {
      console.log(`${this.itemName} is priced at $${this.itemCost}`);
    }
}

class SilverItem {
    constructor( baseItem ){
        this.itemName = `Silver ${baseItem.itemName}`
        this.price = baseItem.itemCost + 200;
    }
}

class GoldenItem {
    constructor(baseItem){
        this.itemName = `Gold ${baseItem.itemName}`;
        this.itemCose = baseItem.itemCose + 500;
        this.waterproof = true;
    }

    showDetails() {
        console.log(`${this.itemName} is priced at $${this.itemCost}`);
      }
}
  
  module.exports = Item;
  
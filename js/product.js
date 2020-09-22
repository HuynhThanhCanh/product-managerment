var readlineSync = require("readline-sync");
var textColor = require("chalk");

class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  input() {
    this.id = `SP${Date.now()}`;
    console.log(`${textColor.yellow("ID: ")} ${this.id}`);
    this.name = readlineSync.question(textColor.yellow("Nhập tên sản phẩm: "));
    this.price = readlineSync.question(textColor.yellow("Nhập giá bán: "));
  }

  output() {
    console.log(`${textColor.yellow("ID: ")} ${this.id}`);
    console.log(`${textColor.yellow("Tên sản phẩm: ")} ${this.name}`);
    console.log(`${textColor.yellow("Giá bán: ")} ${this.price} VNĐ`);
  }
}

module.exports = Product;

var textColor = require("chalk");
//
var Product = require("./product");

class ProductList {
  constructor() {
    this.list = [];
  }

  createFakeData() {
    if (this.list.length > 0) {
      return;
    }
    for (let i = 0; i < 10; i++) {
      let a = new Product(`SP${i}`, `Sản phẩm trưng bày không bán.`, Math.round(Math.random() * 100000 + 10000), 50);
      this.list.push(a);
    }
  }

  inputList() {
    let pro = new Product();
    pro.input();
    if (!Number(pro.price) || !Number(pro.count)) {
      console.log(textColor.red.bold("CÓ GÌ ĐÓ KHÔNG ĐÚNG Ở ĐÂY, MỜI THAO TÁC LẠI!"));
      return;
    }
    this.list.push(pro);
    console.log(textColor.cyan.bold("THÊM THÀNH CÔNG!"));
  }

  outputList() {
    if (this.list.length === 0) {
      console.log(`${textColor.yellow("Danh sách trống!")}`);
      return;
    }
    for (let pro of this.list) {
      pro.output();
      console.log(textColor.yellow("====================================="));
    }
    console.log(textColor.cyan.bold("HIỂN THỊ THÀNH CÔNG!"));
  }

  filterProductById(id) {
    let filterPro = this.list.filter(function (pro) {
      return pro.id === id;
    });
    return filterPro;
  }

  removeProductById(id) {
    this.list = this.list.filter(function (pro) {
      return pro.id !== id;
    });
  }

  //Search product in product list
  searchProductById(id) {
    for (let pro of this.list) {
      if (id === pro.id) {
        return pro;
      }
    }
    return null;
  }

  checkCountProduct(pro) {
    if (pro.count > 0) return true;
    return false;
  }
}

module.exports = ProductList;

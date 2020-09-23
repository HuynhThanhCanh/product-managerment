var ProductLits = require("./product-list");
var textColor = require("chalk");
//

class Cart {
  constructor() {
    this.listCart = [];
  }

  outputCart() {
    if (this.listCart.length === 0) {
      console.log(`${textColor.yellow("Giỏ hàng trống!")}`);
      return;
    }
    for (let pro of this.listCart) {
      console.log(`${textColor.yellow("ID: ")} ${pro.id}`);
      console.log(`${textColor.yellow("Tên sản phẩm: ")} ${pro.name}`);
      console.log(`${textColor.yellow("Giá bán: ")} ${pro.price}`);
      console.log(textColor.yellow("====================================="));
    }
  }

  addToCart(proList, idPro) {
    if (proList.searchProductById(idPro) === null) {
      console.log(`${textColor.red("Sản phẩm không tồn tại trong cửa hàng!")}`);
      return;
    }

    let pro = proList.searchProductById(idPro);
    if (!proList.checkCountProduct(pro)) {
      console.log(`${textColor.red("Sản phẩm tạm thời hết hàng, vui lòng quay lại sau!")}`);
      return;
    }
    this.listCart.push(pro);
    pro.count--;
  }

  //Search product in Cart
  searchProductById(id) {
    for (let pro of this.listCart) {
      if (id === pro.id) {
        return pro;
      }
    }
    return null;
  }

  removeFormCart(proList, idPro) {
    let proInCart = this.searchProductById(idPro);
    if (proInCart === null) {
      console.log(`${textColor.red("Sản phẩm không tồn tại trong giỏ hàng!")}`);
      return;
    }
    // push in product list again
    let proInProductList = proList.searchProductById(idPro);
    proInProductList.count++;
    //remove pro in cart
    this.listCart = this.listCart.filter(function (pro) {
      return pro.id !== idPro;
    });
  }
}

module.exports = Cart;

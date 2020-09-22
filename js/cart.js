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

  pushProductInCart(proList, idPro) {
    //push
    let pro = proList.filterProductById(idPro);
    if (pro.length === 0) {
      console.log(`${textColor.red("Sản phẩm không tồn tại trong cửa hàng!")}`);
      return;
    }
    this.listCart.push(pro[0]);
    //remove product in ProductLits
    proList.removeProductById(idPro);
  }

  removeProductInCart(proList, idPro) {
    // push in product loist again
    let product = this.listCart.filter(function (pro) {
      return pro.id === idPro;
    });
    if (product.length === 0) {
      console.log(`${textColor.red("Sản phẩm không tồn tại trong giỏ hàng!")}`);
      return;
    }
    proList.list.push(product[0]);
    //remove pro in cart
    this.listCart = this.listCart.filter(function (pro) {
      return pro.id !== idPro;
    });
  }
}

module.exports = Cart;

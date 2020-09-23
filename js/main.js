var readlineSync = require("readline-sync");
var textColor = require("chalk");
//
var ProductList = require("./product-list");
var Carts = require("./cart");

class Main {
  constructor() {
    this.productList = new ProductList();
    this.carts = new Carts();
  }

  menu() {
    console.log("0. Nhập dữ liệu giả.");
    console.log("1. Nhập sản phẩm mới.");
    console.log("2. Xuất danh sách sản phẩm.");
    console.log("3. Xem giỏ hàng.");
    console.log("4. Thêm sản phẩm mới vào giỏ hàng.");
    console.log("5. Xóa sản phẩm khỏi giỏ hàng.");
  }

  chooseMenu() {
    let i = readlineSync.question("Mời bạn chọn chức năng: ");
    return i;
  }

  run() {
    let continuee = 1;
    do {
      this.menu();
      let select = this.chooseMenu();
      switch (select) {
        case "0": {
          this.productList.createFakeData();
          console.log(textColor.green("THÀNH CÔNG!"));
          break;
        }
        case "1": {
          this.productList.inputList();
          break;
        }
        case "2": {
          this.productList.outputList();
          break;
        }
        case "3": {
          this.carts.outputCart();
          break;
        }
        case "4": {
          let id = readlineSync.question("Nhập id sản phẩm muốn thêm vào giỏ hàng: ");
          this.carts.addToCart(this.productList, id);
          break;
        }
        case "5": {
          let id = readlineSync.question("Nhập id sản phẩm muốn xóa khỏi giỏ hàng: ");
          this.carts.removeFormCart(this.productList, id);
          break;
        }
        default:
          console.log(textColor.red.bold("THÔNG BÁO: CHỨC NĂNG NÀY KHÔNG TỒN TẠI!"));
      }
      continuee = readlineSync.question(
        textColor.yellow.bold("Bạn có muốn tiếp tục chương trình(Nhấn phím 1 để tiếp tục, nhấn phím bất kỳ để thoát): ")
      );
    } while (continuee == 1);
  }
}

let main = new Main();
main.run();

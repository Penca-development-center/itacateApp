import { Component, OnInit } from "@angular/core";
import {
  NavController,
  ToastController,
  ModalController,
} from "@ionic/angular";
import { Storage } from "@ionic/storage";
@Component({
  selector: "app-cart",
  templateUrl: "./cart.page.html",
  styleUrls: ["./cart.page.scss"],
})
export class CartPage implements OnInit {
  public itemsCarrito: any = [];
  public total = 0;
  public cantidad = 0;

  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private storage: Storage
  ) {
    this.listItems();
  }

  ionViewWillEnter() {
    this.listItems();
  }

  listItems() {
    this.storage
      .get("carrito")
      .then((items: any) => {
        if (items.length > 0) {
          this.itemsCarrito = items;
          console.log("carrito", this.itemsCarrito);
          this.cantidad = items.cantidad;
          this.storage
            .get("totalCanasta")
            .then((total: number) => {
              this.total = total;
            })
            .catch((error) => console.error(error));
        } else {
          console.log({ message: "Aun no tienes items en tu carrito" });
        }
      })
      .catch((error) => console.error(error));
  }

  clearItems() {
    this.itemsCarrito = [];
    this.total = 0;
    this.storage.set("carrito", []);
    this.storage.set("totalCanasta", 0);
  }

  ngOnInit() {}

  increase(index: number) {
    // this.cantidad += 1;
    console.log(index);
    console.log((this.itemsCarrito[index].cantidad += 1));
    console.log(this.itemsCarrito[index].nombre);
    this.total += this.itemsCarrito[index].precio;
  }
  decrease(index: number) {
    // this.cantidad -= 1;
    console.log(index);
    console.log((this.itemsCarrito[index].cantidad -= 1));
    console.log(this.itemsCarrito[index].nombre);
    this.total -= this.itemsCarrito[index].precio;
    if (this.itemsCarrito[index].cantidad === 0) {
      console.log(
        `alcanzo el 0, se borrará el producto: ${this.itemsCarrito[index].nombre}`
      );

      this.itemsCarrito.splice(index);
    }
  }

  checkout() {
    this.dismiss();
    this.navCtrl.navigateForward("/checkout");
  }

  dismiss() {
    this.modalCtrl.dismiss({
      dismissed: true,
    });
  }
}

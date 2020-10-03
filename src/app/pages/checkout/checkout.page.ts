import { Component, OnInit } from "@angular/core";
import { Storage } from "@ionic/storage";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.page.html",
  styleUrls: ["./checkout.page.scss"],
})
export class CheckoutPage implements OnInit {
  constructor(private navCtrl: NavController, private storage: Storage) {
    this.cargarPrecio;
  }
  private precioOrden = 0;
  ngOnInit() {}

  ionViewWillLoad() {
    this.cargarPrecio();
  }

  cargarPrecio() {
    this.storage
      .get("orden")
      .then((orden: any) => {
        this.precioOrden = orden.totalOrden;
      })
      .catch((error) => console.error);
  }

  atras() {
    this.navCtrl.navigateForward("/restaurant-menu");
  }

  proceedToPay() {
    //Agui se hará el proceso de pago.
  }
}

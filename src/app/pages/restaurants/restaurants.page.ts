import { Component, OnInit } from "@angular/core";
import { NavController, ModalController } from "@ionic/angular";
import { CartPage } from "../../modals/cart/cart.page";
import { ProductsService } from "../../services/products.service";

@Component({
  selector: "app-restaurants",
  templateUrl: "./restaurants.page.html",
  styleUrls: ["./restaurants.page.scss"],
})
export class RestaurantsPage implements OnInit {
  public productos: any = [];
  textoBuscar = "";
  constructor(
    private navCtrl: NavController,
    private productsService: ProductsService,
    private modalCtrl: ModalController
  ) {
    this.llenarProductos();
  }

  llenarProductos() {
    this.productsService
      .getAllProducts()
      .then((menu: any) => {
        this.productos = menu;
      })
      .catch((error) => console.error(error));
    console.log(this.productos);
  }
  ionViewWillEnter() {
    this.llenarProductos();
  }

  buscar(ev: any) {
    const texto = ev.detail.value;
    this.textoBuscar = texto;
  }

  ionViewWillLeave() {
    this.productos = [];
  }

  ngOnInit() {}

  atras() {
    this.navCtrl.navigateForward("/tab");
  }

  async showCart() {
    const modal = await this.modalCtrl.create({ component: CartPage });
    await modal.dismiss();
    await modal.present();
  }

  showMenu() {
    this.navCtrl.navigateForward("/restaurant-menu");
  }
}

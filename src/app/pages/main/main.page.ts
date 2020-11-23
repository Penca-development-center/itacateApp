import { Component, OnInit } from "@angular/core";
import {
  NavController,
  ToastController,
  ModalController,
} from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { CartPage } from "../../modals/cart/cart.page";
import { ProductsService } from "../../services/products.service";
@Component({
  selector: "app-main",
  templateUrl: "./main.page.html",
  styleUrls: ["./main.page.scss"],
})
export class MainPage implements OnInit {
  public productos: any = [];
  userName: string;
  textoBuscar = "";
  constructor(
    private navCtrl: NavController,
    private storage: Storage,
    private modalCtrl: ModalController,
    private productsService: ProductsService,
    private toastCtrl: ToastController
  ) {
    this.setName();
    this.llenarProductos();
  }

  ionViewWillEnter() {
    this.setName();
    this.llenarProductos();
  }
  setName() {
    this.storage
      .get("user")
      .then((user: any) => {
        if (user) {
          this.userName = user.nombre;
          console.log({user});
        } else {
          console.log("nose");
        }
      })
      .catch((err) => this.presentToast(err));
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

  buscar(ev: any) {
    console.log(ev);
    this.textoBuscar = ev.detail.value;
  }
  ionViewWillLeave() {
    this.productos = [];
  }
  ngOnInit() {}

  async showCart() {
    const modal = await this.modalCtrl.create({ component: CartPage });
    await modal.dismiss();
    await modal.present();
  }

  goToRestaurant() {
    this.navCtrl.navigateForward("/restaurants");
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 1500 });
    await toast.present();
  }
}

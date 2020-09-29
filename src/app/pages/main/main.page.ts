import { Component, OnInit } from "@angular/core";
import {
  NavController,
  ToastController,
  ModalController,
} from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { CartPage } from "../../modals/cart/cart.page";
@Component({
  selector: "app-main",
  templateUrl: "./main.page.html",
  styleUrls: ["./main.page.scss"],
})
export class MainPage implements OnInit {
  userName: string;
  constructor(
    private navCtrl: NavController,
    private storage: Storage,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController
  ) {
    this.setName();
  }

  ionViewWillEnter() {
    this.setName();
  }
  setName() {
    this.storage
      .get("user")
      .then((user: any) => {
        this.userName = user.nombre_usuario;
      })
      .catch((err) => this.presentToast(err));
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

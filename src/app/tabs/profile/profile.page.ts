import { Component, OnInit } from "@angular/core";
import {
  NavController,
  ToastController,
  ModalController,
} from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { PrivacyPage } from "../../modals/privacy/privacy.page";
import { InfoPage } from "../../modals/info/info.page";
import { CartPage } from "../../modals/cart/cart.page";
import { FaqsPage } from "../../modals/faqs/faqs.page";
import { PaymentsPage } from "../../modals/payments/payments.page";
import { VerDireccionesPage } from "../../modals/ver-direcciones/ver-direcciones.page";
@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"],
})
export class ProfilePage implements OnInit {
  userName: string;
  userMail: string;
  userNumber: string;
  constructor(
    private navCtrl: NavController,
    private storage: Storage,
    private toastCtrl: ToastController,
    private modalCtrl: ModalController
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
        this.userMail = user.correo_usuario;
        this.userNumber = user.telefono_usuario;
      })
      .catch((err) => this.presentToast(err));
  }
  ngOnInit() {}

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 1500 });
    await toast.present();
  }

  async editInfo() {
    const modal = await this.modalCtrl.create({ component: InfoPage });
    await modal.dismiss();
    await modal.present();
  }

  async editDirections() {
    const modal = await this.modalCtrl.create({
      component: VerDireccionesPage,
    });
    await modal.dismiss();
    await modal.present();
  }

  async editPayment() {
    const modal = await this.modalCtrl.create({ component: PaymentsPage });
    await modal.dismiss();
    await modal.present();
  }
  async showOrders() {
    const modal = await this.modalCtrl.create({ component: CartPage });
    await modal.dismiss();
    await modal.present();
  }
  async showPrivacy() {
    const modal = await this.modalCtrl.create({ component: PrivacyPage });
    await modal.dismiss();
    await modal.present();
  }
  async showFaq() {
    const modal = await this.modalCtrl.create({ component: FaqsPage });
    await modal.dismiss();
    await modal.present();
  }
  closeSession() {
    this.storage
      .remove("user")
      .then((res: any) => {
        this.navCtrl.navigateForward("/home");
      })
      .catch((error) => {
        this.presentToast(error);
      });
  }
}

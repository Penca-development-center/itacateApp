import { Component, OnInit } from "@angular/core";
import {
  NavController,
  ToastController,
  ModalController,
} from "@ionic/angular";

import { AgregarTarjetasPage } from "../agregar-tarjetas/agregar-tarjetas.page";
@Component({
  selector: "app-payments",
  templateUrl: "./payments.page.html",
  styleUrls: ["./payments.page.scss"],
})
export class PaymentsPage implements OnInit {
  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {}

  finish() {
    this.modalCtrl.dismiss({
      dismissed: true,
    });
  }

  async addCards() {
    await this.modalCtrl.dismiss({ dimsmiss: true });
    const modal = await this.modalCtrl.create({
      component: AgregarTarjetasPage,
    });
    await modal.dismiss();
    await modal.present();
  }
}

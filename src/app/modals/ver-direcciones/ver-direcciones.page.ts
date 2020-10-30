import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { AgregarDireccionesPage } from "../../modals/agregar-direcciones/agregar-direcciones.page";

@Component({
  selector: "app-ver-direcciones",
  templateUrl: "./ver-direcciones.page.html",
  styleUrls: ["./ver-direcciones.page.scss"],
})
export class VerDireccionesPage implements OnInit {
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}
  finish() {
    this.modalCtrl.dismiss({ dimsmiss: true });
  }

  async addDirections() {
    await this.modalCtrl.dismiss({ dimsmiss: true });
    const modal = await this.modalCtrl.create({
      component: AgregarDireccionesPage,
    });
    await modal.dismiss();
    await modal.present();
  }
}

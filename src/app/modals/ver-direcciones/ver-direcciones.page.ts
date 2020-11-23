import { Component, OnInit } from "@angular/core";
import { ModalController, ToastController } from "@ionic/angular";
import { AgregarDireccionesPage } from "../../modals/agregar-direcciones/agregar-direcciones.page";
import { UpdateService } from "../../services/update.service";
import { Storage } from "@ionic/storage";

@Component({
  selector: "app-ver-direcciones",
  templateUrl: "./ver-direcciones.page.html",
  styleUrls: ["./ver-direcciones.page.scss"],
})
export class VerDireccionesPage implements OnInit {
  public arrAdrdress: any = [];
  constructor(
    private modalCtrl: ModalController,
    private storage: Storage,
    private updtateS: UpdateService,
    private toastCtrl: ToastController
  ) {
    this.updtateS.getUserAddress()
      .then((address: any) => {
        // console.log(address);
        address.map((record: any) => {
          this.arrAdrdress.push(record);
          console.log(record);
        });

        console.log(this.arrAdrdress);
      })
    .catch(error => console.error(error));
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 1700
    });
    await toast.present();
  }

  ngOnInit() { }

  setDefualtAddress(direccion) {
    console.log(direccion);
    this.storage.set("direccion", direccion);
    this.modalCtrl.dismiss({ dimsmiss: true });
  }

  deleteAddress(idDireccion) {
    console.log(idDireccion);
    this.updtateS.deleteUserAddress(idDireccion)
      .then((response: any) => {
        if (response) { 
          console.log(response);
          this.presentToast("Direccion borrada");
          this.modalCtrl.dismiss({ dimsmiss: true });
        }
      })
      .catch(error => console.error(error));
  }

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

import { Component, OnInit } from "@angular/core";
import {
  ModalController,
  NavController,
  AlertController,
} from "@ionic/angular";
@Component({
  selector: "app-modal-reg",
  templateUrl: "./modal-reg.page.html",
  styleUrls: ["./modal-reg.page.scss"],
})
export class ModalRegPage implements OnInit {
  public path: any = "../../assets/icon/cierre-gris.svg";
  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {}

  async registerMail() {
    const alert = await this.alertCtrl.create({
      header: "Regustro con correo",
      message: "Rellena los campos",
      inputs: [
        {
          name: "name",
          type: "text",
          placeholder: "escribe tu nombre",
        },
        {
          name: "mail",
          type: "text",
          placeholder: "escribe tu correo",
        },
        {
          name: "password",
          type: "password",
          placeholder: "escribe tu contraseña",
        },
      ],
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
        },
        {
          text: "Registrarme",
          handler: (credentials) => {
            console.log(credentials);
          },
        },
      ],
    });
    await alert.present();
  }

  dismiss() {
    this.modalCtrl.dismiss({
      dismissed: true,
    });
  }

  login() {
    this.modalCtrl.dismiss({
      dismissed: true,
    });
    this.navCtrl.navigateForward("/login");
  }
}

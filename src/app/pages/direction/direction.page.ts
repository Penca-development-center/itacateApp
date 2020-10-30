import { Component, OnInit } from "@angular/core";
import { Storage } from "@ionic/storage";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";

import {
  NavController,
  AlertController,
  ToastController,
} from "@ionic/angular";

import { DirectionsService } from "../../services/directions.service";

@Component({
  selector: "app-direction",
  templateUrl: "./direction.page.html",
  styleUrls: ["./direction.page.scss"],
})
export class DirectionPage implements OnInit {
  directionForm: FormGroup;
  constructor(
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private directionService: DirectionsService,
    private storage: Storage,
    private formBuilder: FormBuilder
  ) {
    this.directionForm = this.formBuilder.group({
      calle: new FormControl("", Validators.compose([Validators.required])),
      numero: new FormControl("", Validators.compose([Validators.required])),
      colonia: new FormControl("", Validators.compose([Validators.required])),
      localidad: new FormControl("", Validators.compose([Validators.required])),
      municipio: new FormControl("", Validators.compose([Validators.required])),
      referencia: new FormControl(
        "",
        Validators.compose([Validators.required])
      ),
    });
  }

  ngOnInit() {}
  saveDirection(direction) {
    this.directionForm.reset();
    console.log(direction);
    this.storage
      .get("user")
      .then((usuario: any) => {
        const direccion = {
          cliente: usuario.id_usuario,
          calle: direction.calle,
          numero: direction.numero,
          colonia: direction.colonia,
          localidad: direction.localidad,
          municipio: direction.municipio,
          referencia: direction.referencia,
        };
        this.directionService
          .saveDirection(direccion)
          .then((response: any) => {
            if (response) {
              this.storage.set("isLocationSet", true);
              this.navCtrl.navigateForward("/tab");
            }
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => {
        console.error(err);
      });
  }
  finish() {
    this.storage.set("isLocationSet", true);
    this.navCtrl.navigateForward("/tab");
    this.presentToast(
      "No has dado tu dirección, tendrás que configurala más tarde"
    );
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 1700 });
    await toast.present();
  }
}

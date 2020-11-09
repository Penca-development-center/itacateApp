import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import {
  NavController,
  ModalController,
  ToastController,
  AlertController,
} from "@ionic/angular";

import { Storage } from "@ionic/storage";
import { UpdateService } from "../../services/update.service";
@Component({
  selector: "app-info",
  templateUrl: "./info.page.html",
  styleUrls: ["./info.page.scss"],
})
export class InfoPage implements OnInit {
  private userId: any;
  editForm: FormGroup;
  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private formBuilder: FormBuilder,
    private storage: Storage,
    private updateS: UpdateService
  ) {
    this.editForm = this.formBuilder.group({
      userName: new FormControl(
        "",
        Validators.compose([Validators.required, Validators.minLength(3)])
      ),
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.email,
        ])
      ),
      phoneNumber: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(10),
        ])
      ),

      password: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(5)
        ])
      ),
    });

    this.updateS.getUserInfo()
      .then((user: any) => {
        console.log(user);
        this.userId = user.id_usuario;
      })
      .catch(error => console.error(error));
  }


  ngOnInit() {}

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 1500,
    });
    await toast.present();
  }

  ionViewVillEnter() {
    this.updateS.getUserInfo()
      .then((user: any) => {
        console.log(user);
        this.userId = user.id_usuario;
      })
      .catch(error => console.error(error));
  }

  ionViewWillLeave() {
    this.editForm.reset();
  }

  doUpdateInfo(updates) {
    console.log(updates);
    const userInfoU = {
      id : this.userId,
      nombre: updates.userName,
      correo: updates.email,
      telefono: updates.phoneNumber,
      passs: updates.password
    };
    this.updateS.updateUserInfo(userInfoU)
      .then((updateInfo: any) => {
        if (updateInfo) {
          const user = {
            id: userInfoU.id,
            nombre: userInfoU.nombre,
            correo: userInfoU.correo,
            telefono: userInfoU.telefono,
          };
          this.storage.set("user", user);
          this.navCtrl.navigateForward("/tab/start");
          this.dismiss();
        }
      })
      .catch(error => console.error(error));
  }

  dismiss() {
    this.editForm.reset();
    this.modalCtrl.dismiss({
      dismissed: true,
    });
  }
}

import { Component } from "@angular/core";
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
import { ModalRegPage } from "../pages/modal-reg/modal-reg.page";
import { RegisterService } from "../services/register.service";
import { Storage } from "@ionic/storage";
@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  registerForm: FormGroup;
  matchFlag = false;

  // validationMessages = {
  //   userName: [
  //     { type: "required", message: "Porfavor ingrese su correp" },
  //     { type: "email", message: "Porfavor ingerese un correo valido" },
  //     { type: "minLength", message: "El correo es muy corto" },
  //   ],
  //   email: [
  //     { type: "required", message: "Porfavor ingrese su correp" },
  //     { type: "email", message: "Porfavor ingerese un correo valido" },
  //     { type: "minLength", message: "El correo es muy corto" },
  //   ],

  //   phoneNumber: [
  //     { type: "required", message: "Porfavor ingrese su correp" },
  //     { type: "email", message: "Porfavor ingerese un correo valido" },
  //     { type: "minLength", message: "El correo es muy corto" },
  //   ],

  //   password: [
  //     { type: "required", message: "Porfavor escriba su contraseña" },
  //     {
  //       type: "minlength",
  //       message: "La contraseña debe de ser de minimo 5 caracteres",
  //     },
  //   ],

  //   passwordR: [
  //     { type: "required", message: "Porfavor escriba su contraseña" },
  //     {
  //       type: "minlength",
  //       message: "La contraseña debe de ser de minimo 5 caracteres",
  //     },
  //   ],
  // };

  errorMessage = "";

  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController,
    private storage: Storage,
    private alertCtrl: AlertController,
    private formBuilder: FormBuilder,
    private registerService: RegisterService
  ) {
    this.registerForm = this.formBuilder.group({
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
        Validators.compose([Validators.required, Validators.minLength(5)])
      ),
      // passwordR: new FormControl(

      //   "",
      //   Validators.compose([Validators.required, Validators.minLength(5)])
      // ),
    });
  }

  async presentModal() {
    const modal = await this.modalCtrl.create({ component: ModalRegPage });
    await modal.dismiss();
    await modal.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 1500,
    });
    await toast.present();
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertCtrl.create({
      header,
      message,
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
          cssClass: "secondary",
          handler: (blah) => {
            console.log("Confirm Cancel: blah");
          },
        },
        {
          text: "Recuperar contraseña",
          handler: () => {
            console.log("Redirigiendo a la recuperacion de contraseña");
          },
        },
      ],
    });
    await alert.present();
  }

  ionViewVillEnter() {
    this.registerForm.reset();
  }

  validatePassword(credentials) {
    const userInfo = credentials;
    console.log(credentials);

    this.registerService
      .checkUser(userInfo)
      .then((response: any) => {
        if (response) {
          this.registerService.doRegister(userInfo)
            .then((response: any) => {
              console.log(response);
              const user = {
                id_usuario: response.insertId,
                nombre: userInfo.userName,
                correo: userInfo.email,
                telefono: userInfo.phoneNumber
              };
              this.storage.set("user", user);
              this.navCtrl.navigateForward("/tab");
              this.registerForm.reset();
          } );
        }
      })
      .catch(error => console.error(error));
  }

  login() {
    this.navCtrl.navigateForward("/login");
  }
  register() {
    this.navCtrl.navigateForward("/register");
  }
  registerAlt() {
    this.presentModal();
  }
}

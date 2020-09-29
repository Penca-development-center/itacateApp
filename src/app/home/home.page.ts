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
      passwordR: new FormControl(
        "",
        Validators.compose([Validators.required, Validators.minLength(5)])
      ),
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
    this.registerForm.reset();
    const password = credentials.password;
    const password2 = credentials.passwordR;
    const info = credentials;
    if (password === password2) {
      console.log(info);
      const infoReg = {
        userName: info.userName,
        email: info.email,
        phoneNumber: info.phoneNumber,
        password: info.password,
      };
      this.registerService
        .checkUser(infoReg)
        .then((response: any) => {
          if (response.code == 1506) {
            this.presentAlert(
              `Error: ${response.code}`,
              "Atención el usuario ya ha sido registrado. ¿Quieres recuperar tu contraseña?"
            );
          } else if (response.code == 1507) {
            this.registerService
              .doRegister(infoReg)
              .then((respuesta: any) => {
                if (respuesta) {
                  this.navCtrl.navigateForward("/tab");
                }
              })
              .catch((error) => {
                console.log(error);
              });
          }
        })
        .catch((err) => console.error(err));
    } else {
      this.presentToast("Las contraseñas no coinciden, intente de nuevo.");
    }
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

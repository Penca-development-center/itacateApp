import { Component, OnInit } from "@angular/core";
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
import { LoginService } from "../../services/login.service";
import { Storage } from "@ionic/storage";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  constructor(
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private loginService: LoginService,
    private storage: Storage,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.email,
        ])
      ),
      password: new FormControl(
        "",
        Validators.compose([Validators.required, Validators.minLength(5)])
      ),
    });
  }

  ngOnInit() {}

  loginFacebook() {
    this.navCtrl.navigateForward("/tab");
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 1500,
    });
    await toast.present();
  }

  loginMail(credentials) {
    this.loginService
      .doLogIn(credentials)
      .then((res: any) => {
        // this.errorMessage = "";
        this.presentToast("Accediendo");
        console.log(res);
        const user = {
          id_usuario: res.id_usuario,
          nombre: res.nombre_usuario,
          correo: res.correo_usuario,
          telefono: res.telefono_usuario
        };
        this.storage.set("user", user);
        this.navCtrl.navigateForward("/tab");
      })
      .catch((err) => {
        // this.errorMessage = err;
        this.presentToast(err);
      });

    this.loginForm.reset();
  }

  atras() {
    this.navCtrl.navigateBack("/home");
  }
}

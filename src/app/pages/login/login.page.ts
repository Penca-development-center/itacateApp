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
  ModalController
} from "@ionic/angular";
import { LoginService } from "../../services/login.service";
import { DirectionsService } from "../../services/directions.service";
import { AgregarDireccionesPage } from "../../modals/agregar-direcciones/agregar-direcciones.page";
import { Storage } from "@ionic/storage";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  public id = 0;

  constructor(
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController,
    private loginService: LoginService,
    private dirService: DirectionsService,
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
        this.id = res.id_usuario;
        const user = {
          id_usuario: res.id_usuario,
          nombre: res.nombre_usuario,
          correo: res.correo_usuario,
          telefono: res.telefono_usuario
        };
        this.storage.set("user", user);
        this.dirService.getDirections(this.id)
          .then((dir: any) => {
            console.log(dir[0]);
            console.log(dir === []);

            if (dir === []) {
              this.presentToast("No tienes una direccion asignada peorfavor agreglala");
              this.addDirections();
            } else {
              this.storage.set("direccion", dir[0]);
              this.navCtrl.navigateForward("/tab");
            }
            // this.storage.set("direccion", dir);
            // this.navCtrl.navigateForward("/tab");
          })
          .catch(error => console.error(error));
      })
      .catch((err) => {
        // this.errorMessage = err;
        this.presentToast(err);
      });

    this.loginForm.reset();
  }

  async addDirections() {
    const modal = await this.modalCtrl.create({component: AgregarDireccionesPage});
    await modal.dismiss();
    await modal.present();
  }

  atras() {
    this.navCtrl.navigateBack("/home");
  }
}

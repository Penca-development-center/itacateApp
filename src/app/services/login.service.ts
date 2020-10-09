import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Storage } from "@ionic/storage";
import { ToastController } from "@ionic/angular";
@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor(private http: HttpClient, private storage: Storage, private toastCtrl: ToastController) { }
  
  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 1700
    });

    await toast.present();
  }

  doLogIn(userCredentials) {
    return new Promise((accept, reject) => {
      const userDetails = userCredentials;
      const url: string = "http://192.168.0.7:3568/acceso/cliente";
      this.http
        .post(
          url,
          { userDetails },
          {
            headers: new HttpHeaders({ "content-Type": "application/json" }),
          }
        )
        .subscribe((loginToken: any) => {
          if (loginToken) {
            accept(loginToken);
            console.log(loginToken);
            this.presentToast(loginToken.id_usuario);
          } else {
            reject({
              message: "Login incorrecto",
            });

            this.presentToast("servicio no disponible, intente mas tarde");
          }
        });
    });
  }
}

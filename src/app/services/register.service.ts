import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient, private toastCtrl: ToastController) { }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 1700
    });

    await toast.present();
  }

  checkUser(userInfo: any) {
    return new Promise((accept, reject) => {
      const url = 'http://192.168.0.8:3568/registro/verficar';
      const user = {
        email: userInfo.email,
      };

      this.http
        .post(
          url,
          {
            user,
          },
          {
            headers: new HttpHeaders({ 'content-Type': 'application/json' }),
          }
        )
        .subscribe((usuario: any) => {
          console.log(usuario.code === 6);
          if (usuario.code === 6) {
            accept({message: 'usuario disponible', code: 7 });
          } else {
            reject({ message: 'usuario ya existente', code:  5});
          }
        });
    });
  }

  doRegister(userInfo: any) {
    return new Promise((accept, reject) => {
      const registerInfo = userInfo;
      const url = 'http://192.168.0.8:3568/registro';
      this.http
        .post(
          url,
          {
            registerInfo,
          },
          {
            headers: new HttpHeaders({ 'content-Type': 'application/json' }),
          }
        )
        .subscribe(
          (response: any) => {
            if (response) {
              accept(response);

            } else {
              reject({ message: 'Error intente más tarde.' });
            }
          },
          (error: any) => {
            console.error(error);
            reject({ error: error.status, message: error.message });
          }
        );
    });
  }
}

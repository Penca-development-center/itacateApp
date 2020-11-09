import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class NofiticacionesService {

  constructor(private http: HttpClient, private toastCtrl: ToastController) { }

    async presentToast(message) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 1700
    });

    await toast.present();
  }

  sendNotification(notification: any) {
    return new Promise((accept, reject) => {
      const url = "http://localhost:3568/notificaciones/nueva";

      this.http
        .post(
          url,
          {
            notification
          },
          {
          headers: new HttpHeaders({
          "content-Type": "application/json",
        }),
          }).subscribe((response) => {
            if (response) {
              accept(response);
            } else {
              reject({messages: 'error desconocido, intente mas tarde'});
            }
      });
    });
  }
}

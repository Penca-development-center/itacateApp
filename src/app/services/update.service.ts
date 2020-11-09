import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Storage } from "@ionic/storage";
@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private http: HttpClient, private toastCtrl: ToastController, private storage: Storage) { }

  getUserInfo() {
    return new Promise((accept, reject) => {
      this.storage.get("user")
        .then((user: any) => { 
          const id_usuario = user.id_usuario;
          const url = "http://localhost:3568/actualizar/obtenerDatos";
          this.http.post(
            url,
            {
              id_usuario
            },
            {
              headers: new HttpHeaders({ 'content-Type': 'application/json' }),
            }
          )
            .subscribe((userInfo: any) => {
              if (userInfo) {
                accept(userInfo);
              } else {
                reject({message: 'usuario no encontrado'});
              }
            });
        })
        .catch(error => console.error(error));
    });
  }

  updateUserInfo(userInfo) {
    return new Promise((accept, reject) => {
      const url = "http://localhost:3568/actualizar/actualizarDatos";
      const userDetails = userInfo;
      this.http.post(
        url,
        {
          userDetails
        },

        {
          headers: new HttpHeaders({ 'content-Type': 'application/json' }),
        }
      ).subscribe((updateDetails: any) => {
        if (updateDetails) {
          accept(updateDetails);
        } else {
          reject({ message: 'error desconocido' });
        }
      });
    });
  }

  getUserAddress() {
      return new Promise((accept, reject) => {
      this.storage.get("user")
        .then((user: any) => { 
          const id_usuario = user.id_usuario;
          const url = "http://localhost:3568/actualizar/obtenerDireccion";
          this.http.post(
            url,
            {
              id_usuario
            },
            {
              headers: new HttpHeaders({ 'content-Type': 'application/json' }),
            }
          )
            .subscribe((userInfo: any) => {
              if (userInfo) {
                accept(userInfo);
              } else {
                reject({message: 'usuario no encontrado'});
              }
            });
        })
        .catch(error => console.error(error));
    });
  }

  updateUserAddress(userDirection) { 
    return new Promise((accept, reject) => {
      const url = "http://localhost:3568/actualizar/actualizarDireccion";
      const userDetails = userDirection;
      this.http.post(
        url,
        {
          userDetails
        },

        {
          headers: new HttpHeaders({ 'content-Type': 'application/json' }),
        }
      ).subscribe((updateDetails: any) => {
        if (updateDetails) {
          accept(updateDetails);
        } else {
          reject({ message: 'error desconocido' });
        }
      });
    });
  }
}

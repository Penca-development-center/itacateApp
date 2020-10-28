import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class PedidosService {

  async presentToast(message) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 1700
    });

    await toast.present();
  }

  constructor(private http: HttpClient, private toastCtrl: ToastController) { }
  addPedido(pedido) {
    return new Promise((accept, reject) => {
      const url = "http://localhost:3568/pedidos/agregar";
      this.http.post(
        url,
        {
          pedido
        },
        {
          headers: new HttpHeaders({
          "content-Type": "application/json",
        }),
        })
        .subscribe((response: any) => {
          if (response) {
            this.presentToast('Pedido agregado, se te entrgare en tiempo');
            accept(response);
          } else {
            reject({ message: 'No se ha podido agregar el pedido, intente más tarde' });
            this.presentToast('No se ha podido agregar el pedido, intente más tarde');
          }
      });
    });
  }
}

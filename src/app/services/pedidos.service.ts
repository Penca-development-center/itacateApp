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
      const url = "http://192.168.0.8:3568/pedidos/agregar";
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
            this.presentToast('Pedido agregado, se te entrgara en tiempo');
            accept(response);
            console.log(response);
          } else {
            reject({ message: 'No se ha podido agregar el pedido, intente más tarde' });
            this.presentToast('No se ha podido agregar el pedido, intente más tarde');
          }
      });
    });
  }

  addPedidoProductos(itemPedido) {
        return new Promise((accept, reject) => {
      const url = "http://192.168.0.8:3568/pedidos/agregarDetalles";
      this.http.post(
        url,
        {
          itemPedido
        },
        {
          headers: new HttpHeaders({
          "content-Type": "application/json",
        }),
      })
      .subscribe((response: any) => {
          if (response) {
            this.presentToast('Pedido agregado, se te entrgara en tiempo');
            accept(response);
            console.log(response);
          } else {
            reject({ message: 'No se ha podido agregar el pedido, intente más tarde' });
            this.presentToast('No se ha podido agregar el pedido, intente más tarde');
          }
      });
    });
  }

  viewPedido(id_usuario) {
    return new Promise((accept, reject) => {
      const url = "http://192.168.0.8:3568/pedidos/ver";
      this.http
        .post(
          url,
          {
            id_usuario
          }, 
          {
            headers: new HttpHeaders({
              "content-Type": "application/json" 
            }),
          }
        )
        .subscribe((response: any) => {
          if (response) {
            accept(response);
            console.log(response);
          } else {
            reject({ message: 'No se ha encontrado tu pedido' });
            this.presentToast('No se ha encontrado tu pedido');
          }          
        }); 
    });
  }
}

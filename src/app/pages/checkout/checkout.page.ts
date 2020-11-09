import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController, LoadingController, ToastController, AlertController } from '@ionic/angular';
import { PedidosService } from '../../services/pedidos.service';
import { NofiticacionesService } from '../../services/nofiticaciones.service';
import * as moment from 'moment';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  constructor(private navCtrl: NavController,
              private storage: Storage,
              private loadCtrl: LoadingController,
              private toastCtrl: ToastController,
              private alertCtrl: AlertController,
              private pedidosService: PedidosService,
              private notSer:NofiticacionesService,
  ){
    this.cargarPrecio();
  }
  public precioOrden: any = 0;
  ngOnInit() {}

    async presentLoading(message: string) {
    const loading = await this.loadCtrl.create({
      cssClass: 'loader',
      message,
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }


  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 1700,
    });
    toast.present();
  }

  async presentAlertConfirm() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Realizado!',
      message: 'Enhorabuena <strong>Su pago se ha realizado con éxito.</strong>!!!',
      buttons: [
{
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            this.precioOrden = 0;
            this.atras();
          }
        }
      ]
    });

    await alert.present();
  }

  ionViewWillLoad() {
    this.cargarPrecio();
  }

  cargarPrecio() {
    this.storage
      .get('orden')
      .then((orden: any) => {
        this.precioOrden = orden.totalOrden;
        console.log(orden);
      })
      .catch((error) => console.error);
  }

  atras() {
    this.navCtrl.navigateForward('/restaurant-menu');
  }

  // proceedToPay() {
  //   // Agui se hará el proceso de pago.
  //   this.presentLoading('Espera');
  //   setTimeout(() => {

  //     this.storage.get("carrito")
  //     .then((info:any)=> {
  //       this.pedidosService.addPedido(info);
  //       console.log("listo");
  //     })
  //     .catch(error => console.error(error));
  //     this.storage.set("orden", { items: 0, totalOrden: 0 });
  //     this.storage.set("carrito", []);
  //     this.storage.set("totalCanasta", 0);
  //     this.presentAlertConfirm();
  //   }, 2200);
  // }

  sendNotification() {
    this.storage
      .get("user")
      .then((user: any) => {
        const fecha = Date.now();
        const cliente = user.id_usuario;
        const notification = {
          valor: 'Nueva orden',
          tipo: 'orden nueva',
          status: 'nueva',
          hora: moment(fecha).format("hh:mm a"),
          fecha: moment(fecha).format("MMM D YYYY"),
          cliente
        };

        this.notSer.sendNotification(notification)
          .then((response: any) => {
            if (response) {
              console.log(response);
            }
          })
          .catch(error => console.error(error));
      })
      .catch(error => console.error(error));
  }
}

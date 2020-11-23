import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController, LoadingController, ToastController, AlertController, ModalController} from '@ionic/angular';
import { NofiticacionesService } from '../../services/nofiticaciones.service';
import { VerDireccionesPage } from "../../modals/ver-direcciones/ver-direcciones.page";
import { PedidosService } from "../../services/pedidos.service";
import * as moment from 'moment';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  public defaultAddress: any = {
    id: 0,
    calle: "",
    numero: 0,
    colonia: "",
    referencia: "",
    localidad: "",
    municipio: ""
  };

  public defaultAddresLength = 0;

  public order: any = {
    id_usuario: 0,
    id_direccion: 0,
    id_transaccion: "",
    metodo_pago: '',
    fecha: "",
    hora: "",
    items: 0,
    precio: 0
  };

  public orderItem:any  = {
    id: 0,
    id_transaccion: "",
    nombre: "",
    cantidad: 0,
    precio: 0,
    descripcion: "",
    totalProducto: 0,
    seccion: "",
    categoria: ""
  };

  public orderItems: any = [];
  public detailsArr: any = [];
  public totalItems = 0;
  public precioOrden = 0.00;

  constructor(private navCtrl: NavController,
              private storage: Storage,
              private loadCtrl: LoadingController,
              private toastCtrl: ToastController,
              private alertCtrl: AlertController,
              private modalCtrl: ModalController,
              private notSer: NofiticacionesService,
              private pedidosService: PedidosService
  ) {
    this.cargarDireccion();
    this.cargarCarrito();
  }

  ngOnInit() { }

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

  async presentAlertConfirm(transaction: string) {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Realizado!',
      message: `Su orden se ha pedido, puede rastrearla con el numero: ${transaction}`,
      buttons: [
        {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            this.order = {
              id_usuario: 0,
              id_direccion: 0,
              id_transaccion: "",
              metodo_pago: '',
              fecha: "",
              hora: "",
              items: 0,
              precio: 0
            };
            this.orderItems = [];
            this.detailsArr = [];
            this.totalItems = 0;
            this.precioOrden = 0.00;
            this.atras();
          }
        }
      ]
    });

    await alert.present();
  }

  ionViewWillLoad() {
    this.cargarDireccion();
    this.cargarCarrito();
  }

  cargarCarrito() {
    this.storage
      .get("carrito").then((itemsOrder: any) => {
        console.log(itemsOrder);
        this.orderItems = itemsOrder;
        this.totalItems = this.orderItems.length;

        this.orderItems.forEach((counter) => {
          this.precioOrden += counter.totalProducto;
        });

        console.log(this.precioOrden);
      })
      .catch(error => console.error(error));
  }

  cargarDireccion() {
    this.storage.get("direccion")
      .then((address: any) => {
        console.log(address);
        if (address) {
          this.defaultAddress.id = address.id_direccion;
          this.order.id_usuario = address.id_usuario;
          this.order.id_direccion = address.id_direccion;
          this.defaultAddress.calle = address.calle;
          this.defaultAddress.numero = address.numero;
          this.defaultAddress.colonia = address.colonia;
          this.defaultAddress.referencia = address.referencia;
          this.defaultAddress.localidad = address.localidad;
          this.defaultAddress.municipio = address.municipio;

          this.defaultAddresLength = Object.keys(this.defaultAddress).length;
        } else {
          this.cambiar();
        }

      })
      .catch(error => console.error(error));
  }

  async cambiar() {
    const modal = await this.modalCtrl.create({
      component: VerDireccionesPage,
    });

    const { data } = await modal.onWillDismiss();
    console.log(data);
    await modal.dismiss();
    await modal.present();
  }

  atras() {
    this.storage.set("carrito", []);
    this.storage.set("totalCanasta", 0);
    this.navCtrl.navigateForward('/restaurant-menu');
  }

  change(ev) {
    console.log(ev.detail.value);
    this.order.metodo_pago = ev.detail.value;
  }

  doOrder() {
    const fecha = Date.now();
    this.order.hora = moment(fecha).format("hh:mm a"),
    this.order.fecha = moment(fecha).format("MMM D YYYY");
    this.order.items = this.orderItems.length;
    this.order.precio = this.precioOrden;
    this.order.id_transaccion = `itacate-order${Math.floor(Math.random() * 100) + 1}`;
    this.orderDetails(this.order.id_transaccion);
    this.pedidosService
      .addPedido(this.order)
      .then((res: any) => {
      console.log(res);
      })
      .catch(error => console.log(error));
  }

  orderDetails(transactionId) {
    console.log(this.order);
    this.detailsArr = [];
    console.log("Detalles de tu orden" + transactionId);
    this.orderItems.map((item: any) => {
      this.orderItem = {
        id: item.id,
        id_transaccion: transactionId,
        nombre: item.nombre,
        cantidad: item.cantidad,
        precio: item.precio,
        descripcion: item.descripcion,
        totalProducto: item.totalProducto,
        seccion: item.seccion,
        categoria: item.categoria
      };
      this.detailsArr.push(this.orderItem);
      console.log(this.detailsArr);
      this.pedidosService
      .addPedidoProductos(this.detailsArr)
      .then((res: any) => {
        console.log(res);
        this.presentAlertConfirm(transactionId);
      })
      .catch(error => console.log(error));
  });
  }
}

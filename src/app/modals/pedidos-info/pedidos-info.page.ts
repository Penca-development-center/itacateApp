import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { PedidosService } from '../../services/pedidos.service';

@Component({
  selector: 'app-pedidos-info',
  templateUrl: './pedidos-info.page.html',
  styleUrls: ['./pedidos-info.page.scss'],
})
export class PedidosInfoPage implements OnInit {
  public pedidos: any = [];
  public pedidosAceptados: any = [];
  public pedidosEnCamino: any = [];
  public pedidosCancelados: any = [];
  public pedidosEntregados: any = [];
  private id_usuario = 0;
  constructor(private modalCtrl: ModalController, private pedidosService: PedidosService, private storage: Storage) {
    this.llenarPedidos();
    }

  ngOnInit() {
  }

  llenarPedidos() {
    // Servicio que muestra los pedidos del usuario y su estatus.
    this.storage.get('user')
      .then((user: any) => {
        this.id_usuario = user.id_usuario;
        this.pedidosService.viewPedido(this.id_usuario)
          .then((res: any) => {
            res.map((item: any) => {
              console.log(item)
            });
          })
          .catch(error => console.error(error));
      })
      .catch(error => console.error(error));
  }
  vaciorPedidos() {
    this.pedidos = [];
    this.id_usuario = 0;
  }

  ionViewWillEnter() {
    this.llenarPedidos();
  }
  ionViewWillLeave() {
    this.vaciorPedidos();
  }

  close() {
    this.modalCtrl.dismiss();
  }

}

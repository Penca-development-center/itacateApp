import { Component, OnInit } from '@angular/core';
import { ModalController } from "@ionic/angular";
import { PedidosService } from "../../services/pedidos.service";

@Component({
  selector: 'app-pedidos-info',
  templateUrl: './pedidos-info.page.html',
  styleUrls: ['./pedidos-info.page.scss'],
})
export class PedidosInfoPage implements OnInit {
  public pedidos: any = [];
  constructor(private modalCtrl: ModalController, private pedidosService: PedidosService) { 
    this.llenarPedidos();
    }

  ngOnInit() {
  }

  llenarPedidos() {
    // Servicio que muestra los pedidos del usuario y su estatus.
  }
  vaciorPedidos() {
    this.pedidos = [];
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

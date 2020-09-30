import { Component, OnInit } from "@angular/core";
import { NavController, ModalController } from "@ionic/angular";
import { CartPage } from "../../modals/cart/cart.page";

@Component({
  selector: "app-restaurants",
  templateUrl: "./restaurants.page.html",
  styleUrls: ["./restaurants.page.scss"],
})
export class RestaurantsPage implements OnInit {
  public productos: any = [];
  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController
  ) {
    this.llenarProductos();
  }

  llenarProductos() {
    this.productos = [
      {
        id: "1",
        categoria: "sano",
        seccion: "entradas",
        nombre: "ensalada de uva y vino tinto",
        foto: "../../../assets/icon/itacate-platillos.svg",
        descripcion: "Ensalada con uvas, lechuga y fresas. Aderezada con ",
        precio: 35,
      },
      {
        id: "2",
        categoria: "sopas",
        seccion: "entradas",
        nombre: "crema de Elote",
        foto: "../../../assets/icon/itacate-platillos.svg",
        descripcion: "lorem ipsum dolor sit amet",
        precio: 20,
      },
      {
        id: "3",
        categoria: "sopas",
        seccion: "entradas",
        nombre: "sopa de coliflor",
        foto: "../../../assets/icon/itacate-platillos.svg",
        descripcion: "lorem ipsum dolor sit amet, con coliflor.",
        precio: 25,
      },
      {
        id: "4",
        categoria: "reposteria",
        seccion: "reposteria",
        nombre: "pastel de queso",
        foto: "../../../assets/icon/itacate-platillos.svg",
        descripcion: "Pastel de queso y choclolate",
        precio: 20,
      },
      {
        id: "5",
        categoria: "reposteria",
        seccion: "reposteria",
        nombre: "fresas con crema",
        foto: "../../../assets/icon/itacate-platillos.svg",
        descripcion: "Fresas con crema",
        precio: 15,
      },
      {
        id: "6",
        categoria: "reposteria",
        seccion: "reposteria",
        nombre: "helado de chocolate",
        foto: "../../../assets/icon/itacate-platillos.svg",
        descripcion: "Helado sabor chocolate",
        precio: 15,
      },
      {
        id: "7",
        categoria: "cafe",
        seccion: "bebidas",
        nombre: "Café americano",
        foto: "../../../assets/icon/itacate-platillos.svg",
        descripcion: "cafe expresso rebajado con agua",
        precio: 23,
      },
      {
        id: "8",
        categoria: "bebidas",
        seccion: "bebidas",
        nombre: "cerveza",
        foto: "../../../assets/icon/itacate-platillos.svg",
        descripcion: "cerveza",
        precio: 40,
      },
      {
        id: "9",
        categoria: "bebidas",
        seccion: "bebidas",
        nombre: "refresco",
        foto: "../../../assets/icon/itacate-platillos.svg",
        descripcion: "refresco",
        precio: 23,
      },
      {
        id: "10",
        categoria: "mexicana",
        seccion: "huevos",
        nombre: "Huevos divorciados",
        foto: "../../../assets/icon/itacate-platillos.svg",
        descripcion: "lorem ipsum dolor sit amet",
        precio: 70,
      },
      {
        id: "11",
        categoria: "mexicana",
        seccion: "huevos",
        nombre: "Huevos a la mexicana",
        foto: "../../../assets/icon/itacate-platillos.svg",
        descripcion: "lorem ipsun",
        precio: 70,
      },
      {
        id: "12",
        categoria: "mexicana",
        seccion: "huevos",
        nombre: "huevos escalfados",
        foto: "../../../assets/icon/itacate-platillos.svg",
        descripcion: "lorem ipsum dolor sit amet",
        precio: 45,
      },
      {
        id: "13",
        categoria: "mariscos",
        seccion: "mariscos",
        nombre: "camarones a la diabla",
        foto: "../../../assets/icon/itacate-platillos.svg",
        descripcion: "lorem ipsum dolor sit amet",
        precio: 49,
      },
      {
        id: "14",
        categoria: "mariscos",
        seccion: "mariscos",
        nombre: "caldo de camaron",
        foto: "../../../assets/icon/itacate-platillos.svg",
        descripcion: "lorem ipsum dolor sit amet",
        precio: 56,
      },
      {
        id: "15",
        categoria: "mariscos",
        seccion: "mariscos",
        nombre: "coctel de camaron",
        foto: "../../../assets/icon/itacate-platillos.svg",
        descripcion: "lorem ipsum dolor sit amet",
        precio: 70,
      },
    ];
  }
  ionViewWillEnter() {
    this.llenarProductos();
  }

  buscar(ev: any) {
    let productoBuscar = ev.detail.value;
    this.productos.filter((producto) => {
      if (producto.nombre.includes(productoBuscar)) {
        console.log(producto);
      } else if (producto.categoria.includes(productoBuscar)) {
        console.log(producto);
      } else if (producto.seccion.includes(productoBuscar)) {
        console.log(producto);
      }
    });

    // return this.productos.filter(producto => {
    //   return (
    //     producto.nombre.includes(productoBuscar) ||
    //     producto.categoria.includes(productoBuscar) ||
    //     producto.seccion.includes(productoBuscar)
    //   );
    // });
  }
  ionViewWillLeave() {
    this.productos = [];
  }

  ngOnInit() {}

  atras() {
    this.navCtrl.navigateForward("/tab");
  }

  async showCart() {
    const modal = await this.modalCtrl.create({ component: CartPage });
    await modal.dismiss();
    await modal.present();
  }

  showMenu() {
    this.navCtrl.navigateForward("/restaurant-menu");
  }
}

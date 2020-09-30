import { Component, OnInit } from "@angular/core";
import { NavController, ModalController } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { CartPage } from "../../modals/cart/cart.page";
@Component({
  selector: "app-restaurant-menu",
  templateUrl: "./restaurant-menu.page.html",
  styleUrls: ["./restaurant-menu.page.scss"],
})
export class RestaurantMenuPage implements OnInit {
  public menuItems: any = [];
  public entradas: any = [];
  public postres: any = [];
  public bebidas: any = [];
  public huevos: any = [];
  public mariscos: any = [];
  public carrito: any = [];
  public category: any = "reposteria";
  public total: number = 0;
  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private storage: Storage
  ) {
    this.llenarMenu();
  }

  llenarMenu() {
    this.menuItems = [
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

    console.log(this.menuItems);

    const arrSopas = this.menuItems.filter(
      (sopa) => sopa.seccion === "entradas"
    );
    this.entradas = arrSopas;
    console.log(arrSopas);

    const arrPostres = this.menuItems.filter(
      (postre) => postre.seccion === "reposteria"
    );
    this.postres = arrPostres;
    console.log(arrPostres);

    const arrBebidas = this.menuItems.filter(
      (bebida) => bebida.seccion === "bebidas"
    );
    this.bebidas = arrBebidas;
    console.log(arrBebidas);

    const arrHuevos = this.menuItems.filter(
      (huevo) => huevo.seccion === "huevos"
    );
    this.huevos = arrHuevos;
    console.log(arrHuevos);

    const arrMariscos = this.menuItems.filter(
      (marisco) => marisco.seccion === "mariscos"
    );
    this.mariscos = arrMariscos;
    console.log(arrMariscos);
  }

  ionViewWillEnter() {
    this.llenarMenu();
  }

  ionViewWillLeave() {
    this.clearMenu();
  }

  clearMenu() {
    this.menuItems = [];
    this.entradas = [];
    this.postres = [];
    this.bebidas = [];
    this.huevos = [];
    this.mariscos = [];
  }

  agregarCarrito(producto) {
    this.carrito.push(producto);
    console.log(producto);
  }

  ngOnInit() {}

  segmentChanged(ev: any) {
    console.log("Segment changed", ev);
    console.log(this.category);
    const total = this.carrito.length;
    console.log(total);
    this.carrito.map((item) => {
      console.log(item.precio);
    });
  }

  atras() {
    this.navCtrl.navigateForward("/restaurants");
  }

  async showCart() {
    this.storage.set("carrito", this.carrito);
    const modal = await this.modalCtrl.create({ component: CartPage });
    await modal.dismiss();
    await modal.present();
  }
}

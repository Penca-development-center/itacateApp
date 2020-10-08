import { Component, OnInit } from "@angular/core";
import { NavController, ModalController } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { CartPage } from "../../modals/cart/cart.page";
import { ProductsService } from "../../services/products.service";
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
  textoBuscar = "";
  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private productsService: ProductsService,
    private storage: Storage
  ) {
    this.llenarMenu();
  }

  llenarMenu() {
    this.carrito = [];
    // this.productsService
    //   .getAllProducts()
    //   .then((menu: any) => {
    //     this.menuItems = menu;
    //   })
    //   .catch((error) => console.error(error));

    this.menuItems = [
      {
        id: "1",
        categoria: "sano",
        seccion: "entradas",
        nombre: "ensalada de uva y vino tinto",
        foto: "../../../assets/icon/itacate-platillos.svg",
        descripcion: "Ensalada con uvas, lechuga y fresas. Aderezada con ",
        precio: 35,
        cantidad: 0,
        totalProducto: 0,
      },
      {
        id: "2",
        categoria: "sopas",
        seccion: "entradas",
        nombre: "crema de Elote",
        foto: "../../../assets/icon/itacate-platillos.svg",
        descripcion: "lorem ipsum dolor sit amet",
        precio: 20,
        cantidad: 0,
        totalProducto: 0,
      },
      {
        id: "3",
        categoria: "sopas",
        seccion: "entradas",
        nombre: "sopa de coliflor",
        foto: "../../../assets/icon/itacate-platillos.svg",
        descripcion: "lorem ipsum dolor sit amet, con coliflor.",
        precio: 25,
        cantidad: 0,
        totalProducto: 0,
      },
      {
        id: "4",
        categoria: "reposteria",
        seccion: "reposteria",
        nombre: "pastel de queso",
        foto: "../../../assets/icon/itacate-platillos.svg",
        descripcion: "Pastel de queso y choclolate",
        precio: 20,
        cantidad: 0,
        totalProducto: 0,
      },
      {
        id: "5",
        categoria: "reposteria",
        seccion: "reposteria",
        nombre: "fresas con crema",
        foto: "../../../assets/icon/itacate-platillos.svg",
        descripcion: "Fresas con crema",
        precio: 15,
        cantidad: 0,
        totalProducto: 0,
      },
      {
        id: "6",
        categoria: "reposteria",
        seccion: "reposteria",
        nombre: "helado de chocolate",
        foto: "../../../assets/icon/itacate-platillos.svg",
        descripcion: "Helado sabor chocolate",
        precio: 15,
        cantidad: 0,
        totalProducto: 0,
      },
      {
        id: "7",
        categoria: "cafe",
        seccion: "bebidas",
        nombre: "Café americano",
        foto: "../../../assets/icon/itacate-platillos.svg",
        descripcion: "cafe expresso rebajado con agua",
        precio: 23,
        cantidad: 0,
        totalProducto: 0,
      },
      {
        id: "8",
        categoria: "bebidas",
        seccion: "bebidas",
        nombre: "cerveza",
        foto: "../../../assets/icon/itacate-platillos.svg",
        descripcion: "cerveza",
        precio: 40,
        cantidad: 0,
        totalProducto: 0,
      },
      {
        id: "9",
        categoria: "bebidas",
        seccion: "bebidas",
        nombre: "refresco",
        foto: "../../../assets/icon/itacate-platillos.svg",
        descripcion: "refresco",
        precio: 23,
        cantidad: 0,
        totalProducto: 0,
      },
      {
        id: "10",
        categoria: "mexicana",
        seccion: "huevos",
        nombre: "Huevos divorciados",
        foto: "../../../assets/icon/itacate-platillos.svg",
        descripcion: "lorem ipsum dolor sit amet",
        precio: 70,
        cantidad: 0,
        totalProducto: 0,
      },
      {
        id: "11",
        categoria: "mexicana",
        seccion: "huevos",
        nombre: "Huevos a la mexicana",
        foto: "../../../assets/icon/itacate-platillos.svg",
        descripcion: "lorem ipsun",
        precio: 70,
        cantidad: 0,
        totalProducto: 0,
      },
      {
        id: "12",
        categoria: "mexicana",
        seccion: "huevos",
        nombre: "huevos escalfados",
        foto: "../../../assets/icon/itacate-platillos.svg",
        descripcion: "lorem ipsum dolor sit amet",
        precio: 45,
        cantidad: 0,
        totalProducto: 0,
      },
      {
        id: "13",
        categoria: "mariscos",
        seccion: "mariscos",
        nombre: "camarones a la diabla",
        foto: "../../../assets/icon/itacate-platillos.svg",
        descripcion: "lorem ipsum dolor sit amet",
        precio: 49,
        cantidad: 0,
        totalProducto: 0,
      },
      {
        id: "14",
        categoria: "mariscos",
        seccion: "mariscos",
        nombre: "caldo de camaron",
        foto: "../../../assets/icon/itacate-platillos.svg",
        descripcion: "lorem ipsum dolor sit amet",
        precio: 56,
        cantidad: 0,
        totalProducto: 0,
      },
      {
        id: "15",
        categoria: "mariscos",
        seccion: "mariscos",
        nombre: "coctel de camaron",
        foto: "../../../assets/icon/itacate-platillos.svg",
        descripcion: "lorem ipsum dolor sit amet",
        precio: 70,
        cantidad: 0,
        totalProducto: 0,
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

  agregarCarrito(producto: any) {
    let item = producto;
    console.log(item);
    item.cantidad += 1;
    this.total += item.precio;
    item.totalProducto = item.precio * item.cantidad;
    if (item.cantidad === 1) {
      this.carrito.push(item);
      console.log("Producto Agregado");
      console.log(this.carrito);
    } else {
      console.log(this.carrito.indexOf(producto));
    }
  }

  ngOnInit() {}

  segmentChanged(ev: any) {
    console.log("Segment changed", ev);
    console.log(this.category);
  }

  atras() {
    this.navCtrl.navigateForward("/restaurants");
    this.clearMenu();
  }

  async showCart() {
    this.storage.set("carrito", this.carrito);
    this.storage.set("totalCanasta", this.total);
    this.carrito = [];
    this.total = 0;
    const modal = await this.modalCtrl.create({ component: CartPage });
    await modal.dismiss();
    await modal.present();
  }
}

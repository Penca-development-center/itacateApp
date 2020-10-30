import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { LocationGuard } from "./guards/location.guard";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "register",
    loadChildren: () =>
      import("./pages/register/register.module").then(
        (m) => m.RegisterPageModule
      ),
  },
  {
    path: "login",
    loadChildren: () =>
      import("./pages/login/login.module").then((m) => m.LoginPageModule),
  },
  {
    path: "direction",
    loadChildren: () =>
      import("./pages/direction/direction.module").then(
        (m) => m.DirectionPageModule
      ),
  },
  {
    path: "main",
    loadChildren: () =>
      import("./pages/main/main.module").then((m) => m.MainPageModule),
    canActivate: [LocationGuard],
  },
  {
    path: "restaurants",
    loadChildren: () =>
      import("./pages/restaurants/restaurants.module").then(
        (m) => m.RestaurantsPageModule
      ),
  },
  {
    path: "menus",
    loadChildren: () =>
      import("./pages/menus/menus.module").then((m) => m.MenusPageModule),
  },
  {
    path: "checkout",
    loadChildren: () =>
      import("./pages/checkout/checkout.module").then(
        (m) => m.CheckoutPageModule
      ),
  },
  {
    path: "promo",
    loadChildren: () =>
      import("./tabs/promo/promo.module").then((m) => m.PromoPageModule),
  },
  {
    path: "help",
    loadChildren: () =>
      import("./tabs/help/help.module").then((m) => m.HelpPageModule),
  },
  {
    path: "profile",
    loadChildren: () =>
      import("./tabs/profile/profile.module").then((m) => m.ProfilePageModule),
  },
  {
    path: "tab",
    loadChildren: () =>
      import("./pages/tab/tab.module").then((m) => m.TabPageModule),
  },
  {
    path: 'info',
    loadChildren: () => import('./modals/info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'restaurant-menu',
    loadChildren: () => import('./pages/restaurant-menu/restaurant-menu.module').then( m => m.RestaurantMenuPageModule)
  },
  {
    path: 'ver-direcciones',
    loadChildren: () => import('./modals/ver-direcciones/ver-direcciones.module').then( m => m.VerDireccionesPageModule)
  },
  {
    path: 'agregar-direcciones',
    loadChildren: () => import('./modals/agregar-direcciones/agregar-direcciones.module').then( m => m.AgregarDireccionesPageModule)
  },
  {
    path: 'agregar-tarjetas',
    loadChildren: () => import('./modals/agregar-tarjetas/agregar-tarjetas.module').then( m => m.AgregarTarjetasPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

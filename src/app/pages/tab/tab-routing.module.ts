import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TabPage } from "./tab.page";

const routes: Routes = [
  {
    path: "",
    redirectTo: "start",
  },
  {
    path: "",
    component: TabPage,
    children: [
      {
        path: "start",
        loadChildren: () =>
          import("../main/main.module").then((m) => m.MainPageModule),
      },
      {
        path: "prom",
        loadChildren: () =>
          import("../../tabs/promo/promo.module").then(
            (m) => m.PromoPageModule
          ),
      },
      {
        path: "help",
        loadChildren: () =>
          import("../../tabs/help/help.module").then((m) => m.HelpPageModule),
      },
      {
        path: "profile",
        loadChildren: () =>
          import("../../tabs/profile/profile.module").then(
            (m) => m.ProfilePageModule
          ),
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPageRoutingModule {}

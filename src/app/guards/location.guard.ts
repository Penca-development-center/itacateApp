import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Storage } from "@ionic/storage";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class LocationGuard implements CanActivate {
  constructor(private storage: Storage, private router: Router) {}

  async canActivate() {
    const isLocationSet = await this.storage.get("isLocationSet");
    if (isLocationSet) {
      return true;
    } else {
      this.router.navigateByUrl("/direction");
    }
  }
}

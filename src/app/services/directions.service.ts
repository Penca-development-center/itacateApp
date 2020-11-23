import { Injectable } from "@angular/core";
import { from } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: "root",
})
export class DirectionsService {
  constructor(private http: HttpClient) {}

  saveDirection(direction) {
    return new Promise((accept, reject) => {
      const url = "http://192.168.0.8:3568/direccion/agregar";
      this.http
        .post(
          url,
          {
            direction,
          },
          {
            headers: new HttpHeaders({ "content-Type": "application/json" }),
          }
        )
        .subscribe((status: any) => {
          if (status) {
            accept(status);
            console.log(status);
          } else {
            reject({message: "Intenta mas tarde"});
            console.log({message: "Intenta mas tarde"});
          }
        });
    });
  }

  getDirections(idUsuario) {
    return new Promise((accept, reject) => {
      const url = "http://192.168.0.8:3568/direccion/buscar";
      this.http
        .post(
          url,
          {
            idUsuario
          },
          {
            headers: new HttpHeaders({ "content-Type": "application/json" }),
          }
        )
        .subscribe((status: any) => {
          if (status) {
            accept(status);
            console.log(status);
          } else {
            reject({message: "Intenta mas tarde"});
            console.log({message: "Intenta mas tarde"});
          }
        });
    });
  }
}

import { Injectable } from "@angular/core";
import { from } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: "root",
})
export class DirectionsService {
  constructor(private http: HttpClient) {}

  saveDirection(direction) {
    return new Promise((acceot, reject) => {
      const url = "http://192.168.0.2:3568/direccion/agregar";
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
        .subscribe();
    });
  }
}

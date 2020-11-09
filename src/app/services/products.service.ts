import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  constructor(private http: HttpClient) { }

  getAllProducts() {
    return new Promise((accept, reject) => {
      const url = "http://localhost:3568/productos/buscar";
      this.http
        .post(
          url,
          {},
          {
            headers: new HttpHeaders({
              "content-Type": "application/json",
            }),
          }
        )
        .subscribe((menu: any) => {
          if (menu) {
            accept(menu);
          } else {
            reject({ message: "Error desconosido, intente mas tarde" });
          }
        });
    });
  }
}

import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Storage } from "@ionic/storage";
@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor(private http: HttpClient, private storage: Storage) {}

  doLogIn(userCredentials) {
    return new Promise((accept, reject) => {
      const userDetails = userCredentials;
      const url: string = "http://localhost:3568/acceso/cliente";
      this.http
        .post(
          url,
          { userDetails },
          {
            headers: new HttpHeaders({ "content-Type": "application/json" }),
          }
        )
        .subscribe((loginToken: any) => {
          if (loginToken) {
            accept(loginToken);
            console.log(loginToken);
          } else {
            reject({
              message: "Login incorrecto",
            });
          }
        });
    });
  }
}

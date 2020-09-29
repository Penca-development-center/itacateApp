import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  checkUser(userInfo: any) {
    return new Promise((accept, reject) => {
      const url: string = "http://localhost:3568/registro/verficar";
      const user = {
        email: userInfo.email,
      };

      this.http
        .post(
          url,
          {
            user,
          },
          {
            headers: new HttpHeaders({ "content-Type": "application/json" }),
          }
        )
        .subscribe(
          (usuario: any) => {
            console.log(usuario.message);
            console.log(usuario.id_usuario);
            if (usuario.id_usuario) {
              reject({
                message: "usuario existente",
                code: 1506,
                user_id: usuario.id_usuario,
              });
            } else if (usuario.message) {
              accept({ message: usuario.message, code: 1507 });
            }
          },
          (error: any) => {
            console.error(error);
            reject({ error: error.status, message: error.message });
          }
        );
    });
  }

  doRegister(userInfo: any) {
    return new Promise((accept, reject) => {
      const registerInfo = userInfo;
      const url: string = "http://localhost:3568/registro";
      this.http
        .post(
          url,
          {
            registerInfo,
          },
          {
            headers: new HttpHeaders({ "content-Type": "application/json" }),
          }
        )
        .subscribe(
          (response: any) => {
            if (response) {
              accept(response);
            } else {
              reject({ message: "Error intente más tarde." });
            }
          },
          (error: any) => {
            console.error(error);
            reject({ error: error.status, message: error.message });
          }
        );
    });
  }
}

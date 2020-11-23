import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filtro",
})
export class FiltroPipe implements PipeTransform {
  transform(productos: any[], texto: string): any[] {
    console.log(productos);

    if ( texto === '' ) {
      return productos;
    }

    texto = texto.toLowerCase();

    return productos.filter((item: any) => {
      return item.nombre.toLowerCase().includes(texto)
        || item.seccion.toLowerCase().includes(texto)
        || item.categoria.toLowerCase().includes(texto);
    });

  }
}

// if (item.nombre.includes(producto)) {
//   console.log(item);
// } else if (item.categoria.includes(producto)) {
//   console.log(item);
// } else if (item.seccion.includes(producto)) {
//   console.log(item);
// }

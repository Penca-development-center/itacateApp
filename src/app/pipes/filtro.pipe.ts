import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filtro",
})
export class FiltroPipe implements PipeTransform {
  transform(productos: any, texto: string): any[] {
    console.log(productos);
    if (texto.length === 0) {
      return productos;
    }

    texto = texto.toLowerCase();
    console.log(`Lo que se va a buscar: ${texto}`);

    return productos.filter((producto) => {
      return (
        producto.marca.toLowerCase().includes(texto) ||
        producto.cultivo.toLowerCase().includes(texto) ||
        producto.epoca_cultivo.toLowerCase().includes(texto) ||
        producto.nombre_tecnico.toLowerCase().includes(texto)
      );
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

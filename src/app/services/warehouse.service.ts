import { Menu } from 'src/app/model/menu.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  misPlatos: Menu[] = [];

  precioTotal: number = 0;
  promedioPreparacion: number = 0;
  promedioHealthScore: number = 0;

  constructor() { }

  addPlato(plato: any): number {
    // this.calcularAcumulados();
    this.misPlatos.push(plato);
    console.log(this.misPlatos)
    return 1;
  }

  calcularAcumulados(): void {
    this.precioTotal = 0;
    this.promedioHealthScore = 0;
    this.promedioPreparacion = 0;

    this.misPlatos.forEach((plato: Menu) => {
      this.precioTotal += plato.pricePerServing;
      this.promedioHealthScore += plato.healthScore;
      this.promedioPreparacion += plato.readyInMinutes;
    });

    let cantidadPlatos = this.misPlatos.length;
    this.promedioHealthScore = this.promedioHealthScore / cantidadPlatos;
    this.promedioPreparacion = this.promedioPreparacion / cantidadPlatos;
  }
}

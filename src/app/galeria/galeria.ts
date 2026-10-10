import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetaImg } from '../tarjeta-img/tarjeta-img';
import { Imagen } from '../interfaces/imagen.interface';

@Component({
  selector:'app-galeria',
  standalone:true,
  imports:[CommonModule, TarjetaImg],
  templateUrl:'./galeria.html',
  styleUrl:'./galeria.css'
  

})
//componente padre. lo cambio de variable comun a senal(lo envuelvo debntro de signal())
export class GaleriaComponent {

    listaImagenes = signal < Imagen[] >([

    {
      id:1,
      titulo: 'Atardecer en la montaña',
      url: 'https://picsum.photos/id/10/400/300',
    },


    {
      id:2,
      titulo: 'Bosque mágico',
      url: 'https://picsum.photos/id/15/400/300',
    },


    {
      id:3,
      titulo: 'Costa y rocas',
      url: 'https://picsum.photos/id/28/400/300',
    }

  ]);

  manejarClickImagen(imagenSeleccionada: Imagen) {
    console.log('Imagen clickeada', imagenSeleccionada);

    alert(`Has seleccionado: ${imagenSeleccionada.titulo}`);
  }

  removerImagen(id: number) {
    this.listaImagenes.update(imagenes => imagenes.filter(img => img.id !== id));
  }
}
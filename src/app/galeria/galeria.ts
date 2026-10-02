import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Imagen } from '../interfaces/imagen.interface';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galeria.html',
  styleUrl: './galeria.css'
})
export class GaleriaComponent {
  // ... tu lista de imágenes anterior ...

  // Función que se activa al recibir la imagen del hijo
  manejarClickImagen(imagenSeleccionada: Imagen) {
    console.log('¡Imagen clickeada!', imagenSeleccionada);
    alert(`Has seleccionado: ${imagenSeleccionada.titulo}`);
  }
}
export class Galeria {
  // Datos prueba (mock data)
  listaImpresion: Imagen[] = [
    {
      id: 1,
      titulo: 'Atardecer en la montaña',
      url: 'https://picsum.photos/id/10/400/300',

    },
    {
      id: 2,
      titulo: 'Bosque mágico',
      url: 'https://picsum.photos/id/15/400/300',

    },
    {
      id: 3,
      titulo: 'Costa y rocas',
      url: 'https://picsum.photos/id/28/400/300',

    }
  ];

  
}
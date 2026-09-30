import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Imagen } from '../interfaces/imagen.interface';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.css'
})
export class Galeria {
  // Datos prueba (mock data)
  listaImpresion: Imagen[] = [
    {
      id: 1,
      titulo: 'Atardecer en la montaña',
      url: 'https://picsum.photos/id/10/400/300',
      descripcion: 'Un hermoso paisaje con tonos naranjas.'
    },
    {
      id: 2,
      titulo: 'Bosque mágico',
      url: 'https://picsum.photos/id/15/400/300',
      descripcion: 'Árboles altos y luz filtrada.'
    },
    {
      id: 3,
      titulo: 'Costa y rocas',
      url: 'https://picsum.photos/id/28/400/300',
      descripcion: 'El mar rompiendo contra las piedras.'
    }
  ];
}
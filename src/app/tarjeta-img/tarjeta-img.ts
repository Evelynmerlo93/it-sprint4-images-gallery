import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Imagen } from '../interfaces/imagen.interface';

@Component({
  selector: 'app-tarjeta-img',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tarjeta-img.html',
  styleUrl: './tarjeta-img.css'
})
export class TarjetaImg {
  @Input() imagenTarjeta!: Imagen;
}
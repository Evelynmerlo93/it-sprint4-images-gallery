//logica
import { Component, Input, Output, EventEmitter } from '@angular/core';
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
// Creo el canal de salida. EventEmitter es el "mensajero".
  @Output() alSeleccionar = new EventEmitter<Imagen>();
  // Esta función se ejecutará cuando el usuario haga clic en la tarjeta
  onCardClick() {
    // Emitimos la imagen actual hacia el padre
    this.alSeleccionar.emit(this.imagenTarjeta);
  }
}
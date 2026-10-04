//logica
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Imagen } from '../interfaces/imagen.interface';

//El Decorador( configura la tarjeta)
@Component({
  selector: 'app-tarjeta-img',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tarjeta-img.html',
  styleUrl: './tarjeta-img.css'
})
// Clases 
export class TarjetaImg {
  //input dice "el componente padre me pasa un obj de tipo imagen para pintarlo". ! indica a ts que esa propiedad recibira un valor seguro
  @Input() imagenTarjeta!: Imagen;

//canal de salida. EventEmitter es el "mensajero". envia datos al padre
  @Output() alSeleccionar = new EventEmitter<Imagen>();

  // funcion que ejecutara cuando haga CLIC en la tarj
  onCardClick() {

    // Enviamos la imagen actual hacia el padre
    this.alSeleccionar.emit(this.imagenTarjeta);
  }
}
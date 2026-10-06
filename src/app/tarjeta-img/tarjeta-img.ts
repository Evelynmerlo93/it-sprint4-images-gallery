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

  //INPUT para hablar con hijo(PADRE baja orden con input)
  @Input() imagenTarjeta!: Imagen;
  //Prepárate:, porque vas a recibir una propiedad llamada isFeatured que será verdadera o falsa
  @Input() isFeatured: boolean = false;

 //envia datos al padre.canal de salida. EventEmitter es el "mensajero". 
  @Output() alSeleccionar = new EventEmitter<Imagen>();

  // funcion que ejecutara cuando haga CLIC en la tarj
  onCardClick() {

    // Enviamos la imagen actual hacia el padre
    this.alSeleccionar.emit(this.imagenTarjeta);
  }
}
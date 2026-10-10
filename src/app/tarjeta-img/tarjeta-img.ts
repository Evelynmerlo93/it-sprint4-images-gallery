//logica
import { Component, Input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Imagen } from '../interfaces/imagen.interface';

//El Decorador( configura la tarjeta)
@Component({
  selector: 'app-tarjeta-img',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tarjeta-img.html',
  styleUrl: './tarjeta-img.css',
})

// Clases
export class TarjetaImg {
  //INPUT para hablar con hijo(PADRE baja orden con input)
  @Input() imagenTarjeta!: Imagen;
  //nuevo input de padre a hijo ,sera verdadera o falsa
  @Input() isFeatured: boolean = false;
  // cable moderno para avisar q ID queremos borrar ( como id es number, y no string lo cambio)
  // CABLES MODERNOS (Outputs)
  alSeleccionar = output<Imagen>(); // 👈 ¡Faltaba este! Para avisar qué imagen se seleccionó
  deleteImage = output<number>(); // Para avisar qué ID queremos borrar

  // Función cuando hacen clic en toda la tarjeta
  onCardClick() {
    this.alSeleccionar.emit(this.imagenTarjeta); // 👈 ¡Faltaba esta función!
  }

  // La función que ya tenías para el botón de borrar
  onDeleteClick(event: MouseEvent) {
    event.stopPropagation();
    this.deleteImage.emit(this.imagenTarjeta.id);
  }
}

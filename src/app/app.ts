import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaleriaComponent } from './galeria/galeria'; // <--- 1. Importas el componente aquí

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, GaleriaComponent], // <--- 2. Lo registras en los imports
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
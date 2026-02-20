import { Component } from '@angular/core';
import { INoticia } from '../../interfaces/inoticia.interface';

@Component({
  selector: 'app-blog',
  imports: [],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {
  noticias: INoticia[] = [
    {
      titulo: 'Angular 20 ya está disponible',
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Angular_gradient_logo.png/640px-Angular_gradient_logo.png',
      texto: 'Google ha lanzado oficialmente Angular 20 con mejoras significativas en rendimiento, signals estables y un nuevo sistema de control de flujo con @for, @if y @switch que reemplaza las directivas estructurales clásicas.',
      fecha: '2026-02-15',
    },
    {
      titulo: 'TypeScript 5.8 introduce nuevas funcionalidades',
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/960px-Typescript_logo_2020.svg.png?20221110153201',
      texto: 'La nueva versión de TypeScript trae mejoras en la inferencia de tipos, decoradores estándar y mejor integración con los frameworks modernos como Angular y React.',
      fecha: '2026-02-10',
    },
  ];

  agregarNoticia(
    titulo: HTMLInputElement,
    imagen: HTMLInputElement,
    texto: HTMLTextAreaElement,
    fecha: HTMLInputElement
  ) {
    if (!titulo.value || !imagen.value || !texto.value || !fecha.value) {
      alert('Todos los campos son obligatorios');
      return;
    }

    this.noticias.push({
      titulo: titulo.value,
      imagen: imagen.value,
      texto: texto.value,
      fecha: fecha.value,
    });

    titulo.value = '';
    imagen.value = '';
    texto.value = '';
    fecha.value = '';
  }
}

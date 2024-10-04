import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LibrosService } from '../../services/libros.service';
import { saveAs } from 'file-saver';

import { jsPDF } from 'jspdf'; // Cambia a la importación correcta de jsPDF


@Component({
  selector: 'app-biblioteca',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.css'] // Corrige aquí de styleUrl a styleUrls
})
export class BibliotecaComponent implements OnInit { // Implementa OnInit
  service = inject(LibrosService);
  
  libros: any[] = []; // Array para almacenar los libros

  ngOnInit() {
    this.loadLibros(); // Carga los libros al iniciar el componente
  }

  // Método para cargar libros desde el JSON
  loadLibros() {
    this.service.getLibros().subscribe(data => {
      this.libros = data;
    });
  }

  // Método para descargar el PDF
  downloadPDF() {
    const pdfBlob = this.service.generatePDF(this.libros);
    saveAs(pdfBlob, 'catalogo_libros.pdf'); // Usamos file-saver para guardar el archivo
  }
}

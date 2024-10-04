import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  constructor(private http: HttpClient) { }
  private apiUrl = 'http://localhost:3000/libros';


// Obtener todos los libros
getLibros(): Observable<any[]> {
  return this.http.get<any[]>(this.apiUrl);
}

// Agregar un nuevo libro
postLibro(libro: any): Observable<any> {
  return this.http.post(this.apiUrl, libro);
}

// Actualizar información de un libro
putLibro(libro: any): Observable<any> {
  return this.http.put(`${this.apiUrl}/${libro.id}`, libro);
}

// Eliminar un libro
deleteLibro(id: string): Observable<any> {
  return this.http.delete<any>(`${this.apiUrl}/${id}`);
}

// Obtener un libro por ID
getLibroPorID(id: string): Observable<any> {
  return this.http.get<any>(`${this.apiUrl}/${id}`);
}
 // Método para generar PDF
 generatePDF(libros: any[]): Blob {
  const pdf = new jsPDF();
  pdf.setFontSize(12);
  
  // Título del PDF
  pdf.text('Catálogo de Libros', 10, 10);
  
  // Espacio para los libros
  let yPosition = 20;

  libros.forEach(libro => {
    pdf.text(`Título: ${libro.title}`, 10, yPosition);
    pdf.text(`Autor: ${libro.author}`, 10, yPosition + 10);
    pdf.text(`Descripción: ${libro.description}`, 10, yPosition + 20);
    yPosition += 30; // Espaciado entre libros
  });

  return pdf.output('blob'); // Retorna el PDF como un Blob
}
}

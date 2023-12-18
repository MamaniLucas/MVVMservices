import { Component } from '@angular/core';
@Component({
  selector: 'app-aprendermodule',
  templateUrl: './aprendermodule.component.html',
  styleUrls: ['./aprendermodule.component.css']
})
export class AprendermoduleComponent {
  tarjetaSeleccionada: number | null = null;
  respuestaComprobada: boolean = false;
  mensajeRespuesta: string = '';
  mostrarBotonSaltar: boolean = true;
  esRespuestaCorrecta: boolean = false;

  onTarjetaClick(numero: number): void  {
      this.tarjetaSeleccionada = numero;
  }
  
    
  comprobarRespuesta(): void {
    // Lógica para comprobar la respuesta
    if (this.tarjetaSeleccionada !== null) {
      const esRespuestaCorrecta = this.verificarRespuesta(this.tarjetaSeleccionada);

      if (esRespuestaCorrecta) {
          this.incrementarBarraDeProgreso(10);
      }


      // Muestra el mensaje en el modal
      this.mostrarMensaje(esRespuestaCorrecta ? '¡Correcto!' : '¡Incorrecto!');

      // Actualiza el estado para mostrar el mensaje y el botón Continuar
      this.respuestaComprobada = true;
// Actualiza el estado para indicar si la respuesta es correcta o no
    
      this.esRespuestaCorrecta = esRespuestaCorrecta;
  // Actualizar el estado para mostrar el mensaje y el botón Continuar
  
       this.respuestaComprobada = true;
       //Actualizar el boton saltar
      this.mostrarBotonSaltar = false;

    }
  }

  verificarRespuesta(numero: number): boolean {
    // Lógica para verificar si la respuesta es correcta
    // (puedes implementar esto según tus criterios)
    return numero === 2; // Por ejemplo, la respuesta correcta es la tarjeta número 2
  }

  continuar(): void {
    // Lógica para continuar (puedes redirigir, cargar nuevas tarjetas, etc.)
    this.tarjetaSeleccionada = null; // Reinicia la selección de tarjeta
    this.respuestaComprobada = false; // Reinicia el estado de comprobación
    this.mensajeRespuesta = ''; // Reinicia el mensaje de respuesta
  }
  mostrarMensaje(mensaje: string): void {
    // Lógica para mostrar el mensaje en el footer (puedes usar un servicio o emisor de eventos)
    this.mensajeRespuesta = mensaje;
    console.log(mensaje); // Puedes quitar esto si no necesitas mostrarlo en la consola
  }
  saltar(): void {
      // Lógica para manejar el evento "Saltar"
    console.log('Saltar');
      // Puedes implementar la lógica adicional según tus necesidades
  }
  incrementarBarraDeProgreso(porcentaje: number): void {
  const progressBar = document.querySelector('.progress-bar') as HTMLElement;
  const valorActual = parseInt(progressBar.style.width, 10) || 0;
  const nuevoValor = Math.min(100, valorActual + porcentaje);
  progressBar.style.width = nuevoValor + '%';
}
  
}

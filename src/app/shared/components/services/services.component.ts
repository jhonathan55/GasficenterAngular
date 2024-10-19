import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { DetailDialogComponent } from './detail-dialog/detail-dialog.component';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  constructor(private dialog: MatDialog, private mediaMatcher: MediaMatcher){

  }
  mostrar: boolean = false;
  mostrarButton: string = 'Mostrar más';
  element: HTMLElement = document.getElementById('services');

  servicios: Servicio[] = [
    new Servicio(
      'Instalaciones',
      'Instalación de calefont y artefactos a gas.',
      'assets/images/gasfisenter/services/serv-1.png'
    ),
    new Servicio(
      'Instalaciones',
      'Cambio de griferías, lavamanos, lavaplatos, ducha, etc.',
      'assets/images/gasfisenter/services/serv-2.png'
    ),
    new Servicio(
      'Instalaciones',
      'Proyectos de renovación de baños y cocinas.',
      'assets/images/gasfisenter/services/serv-3.png'
    ),
    new Servicio(
      'Instalaciones',
      'Proyectos de redes de agua fría y caliente, alcantarillado y gas.',
      'assets/images/gasfisenter/services/serv-5.png'
    ),
    new Servicio(
      'Instalaciones',
      'Instalación de artefactos sanitarios (wc, lavamanos, lavaplatos, tinas, etc.)',
      'assets/images/gasfisenter/services/serv-4.png'
    ),
    new Servicio(
      'Instalaciones',
      'Retiro de tina, instalación de receptáculo de cerámica e impermeabilizado.',
      'assets/images/gasfisenter/services/serv-6.png'
    ),
    new Servicio(
      'Reparaciones / Mantenimiento',
      'Reparación y mantención de calefon.',
      'assets/images/gasfisenter/services/serv-7.png'
    ),
    new Servicio(
      'Reparaciones / Mantenimiento',
      'Destapes de alcantarillado (cámaras, wc, tina, lavaplatos, lavamanos, ducha, piletas)',
      'assets/images/gasfisenter/services/serv-8.png'
    ),
    new Servicio(
      'Reparaciones / Mantenimiento',
      'Reparaciones de fugas de agua y gas.',
      'assets/images/gasfisenter/services/serv-9.png'
    ),
    new Servicio(
      'Reparaciones / Mantenimiento',
      'Normalización de sellos rojos a verde de gas en departamentos y casas.',
      'assets/images/gasfisenter/services/serv-10.png'
    ),
    new Servicio(
      'Reparaciones / Mantenimiento',
      'Limpieza de sarro de las cañerías de agua caliente con desincrustante antisarro orgánico en casas o departamentos.',
      'assets/images/gasfisenter/services/serv-11.png'
    ),
  ];

  onTabChanged(event: MatTabChangeEvent) {
    console.log('funcion TAB');
    if (event.tab.ariaLabel === 'Instalaciones') {
      this.filtrarServicios('Instalaciones');
    } else if (event.tab.ariaLabel === 'Reparaciones y Mantenimiento') {
      this.filtrarServicios('Reparaciones y Mantenimiento');
    }
  }

  filtrarServicios(tipo: string) {
    console.log('funcion');
    if (tipo === 'Instalaciones') {
      this.servicios = this.servicios.filter(servicio => servicio.titulo === 'Instalaciones');
    } else if (tipo === 'Reparaciones y Mantenimiento') {
      this.servicios = this.servicios.filter(servicio => servicio.titulo === 'Reparaciones y Mantenimiento');
    }
  }

  async toggleMostrarMas() {
    if(this.mostrarButton === 'Mostrar menos'){
      await this.scrollBack();
    }
    this.mostrar = !this.mostrar;
    this.mostrarButton = this.mostrar ? 'Mostrar menos' : 'Mostrar más';
  }

  scrollBack(){
    // this.element.scrollIntoView({ behavior: 'instant', block: 'start', inline: 'nearest' });
    return new Promise<void>((resolve, reject) => {
      this.element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      document.addEventListener('scrollend', () => {
        resolve();
      }, { once: true });
    });
  }

  calculateDialogSize(): { width: string, height: string } {
    const isMobile = this.mediaMatcher.matchMedia('(max-width: 768px)').matches;
    return {
      width: isMobile ? '100%' : '40%',
      height: isMobile ? '80%' : '60%'
    };
  }

  openDialog(serviceIndex: number){
    const dialogSize = this.calculateDialogSize();
    this.dialog.open(DetailDialogComponent,{
      width: dialogSize.width,
      height: dialogSize.height,
      data: {
        servicios: this.servicios[serviceIndex]
      }
    })
  }
}

export class Servicio {
  titulo: string;
  descripcion: string;
  imagen: string;
  detalle: string;

  constructor(titulo: string, descripcion: string, imagen?: string, detalle?: string) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.imagen = imagen;
    this.detalle = detalle;
  }
}
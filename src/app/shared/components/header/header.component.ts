import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { CatalogDialogComponent } from './catalog-dialog/catalog-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent implements OnInit{
  scrolling: boolean = false;
  servicesView;
  @ViewChild('container') container: any;
  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
    // Agrega un event listener para el evento de scroll en el documento
    document.addEventListener('scroll', () => {
      // Verifica si se esta haciendo scroll con mat-tab
      if (!this.scrolling) {
        // Obtén la posición actual del scroll
        const scrollPosition = window.scrollY;
        const tabIds = ["home", "equipment", "services", "offers", "contact"];
        let activeTabId = null;
  
        tabIds.forEach(tabId => {
          const section = document.getElementById(tabId);
          if (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
  
            // Verifica si la posición de desplazamiento está dentro de los límites de la sección
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
              activeTabId = tabId;
            }
          }
        });
  
        // Activa la pestaña correspondiente
        if (activeTabId) {
          const tab = document.querySelector(`[aria-label="${activeTabId}"]`);
          if (tab) {
            // Activa la pestaña
            tab.classList.add('mat-tab-active');
            // Simula un evento de cambio de pestaña para asegurarte de que se activen los contenidos
            const event = new CustomEvent('click');
            tab.dispatchEvent(event);
          }
        }
      }
    });

     this.servicesView = document.getElementById("services");
     document.getElementById("cotizarScrollBtn").addEventListener("click", () => {
      this.scrollIntoViewAsync(this.servicesView);
     })
  }
  
  async onTabChange(event: MatTabChangeEvent) {
    // this.scrolling = true;
    // console.log('inicio', this.scrolling)
    const tabId = event.tab.ariaLabel;
    const section = document.getElementById(tabId);
      if (section) {
        await this.scrollIntoViewAsync(section);
        // console.log('scrollIntoView completado', this.scrolling);
        // this.scrolling = false;
      }
    // console.log('final', this.scrolling)
  }

  scrollIntoViewAsync(element: HTMLElement) {
    this.scrolling = true;
    return new Promise<void>((resolve, reject) => {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      document.addEventListener('scrollend', () => {
        this.scrolling = false;
        resolve();
      }, { once: true });
    });
  }

  openDialog(){
    this.dialog.open(CatalogDialogComponent,{
      width: '40%',
      height: '420px'
    })
  }
}


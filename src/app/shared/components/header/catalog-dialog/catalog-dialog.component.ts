import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog-dialog',
  templateUrl: './catalog-dialog.component.html',
  styleUrl: './catalog-dialog.component.scss'
})

export class CatalogDialogComponent {
  showList: Boolean = false;

// catalogItems = [
//   { name: 'Computadores y Tablets', subItems: [
//     'Notebooks', 'Tablets', 'Escritorio', 'Mouses y Teclados'
//   ]},
//   { name: 'Partes y Piezas / Componentes', subItems: [
//     'Notebooks', 'All-in-One', 'Combos Teclado / Mouse'
//   ]},
//   // Add more catalog items here...
// ];

// isMenuOpen = true;

// hoveredItem: any;
// lastHoveredItem: any;

// openDropdown(item: any) {
//   this.hoveredItem = item;
// }

// leaveItem() {
//   this.lastHoveredItem = this.hoveredItem; // Store last hovered item on leave
// }

}

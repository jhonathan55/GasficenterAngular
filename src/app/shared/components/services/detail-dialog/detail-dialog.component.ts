import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Servicio } from '../services.component';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-detail-dialog',
  templateUrl: './detail-dialog.component.html',
  styleUrl: './detail-dialog.component.scss'
})
export class DetailDialogComponent{
  constructor(@Inject(MAT_DIALOG_DATA) public data: { servicios: Servicio}) { }


  formConfig = [
    {
      name: 'phone',
      type: 'number',
      label: 'Numero',
      placeholder: 'Cotiza por llamada',
      validations: [Validators.required],
      error: 'Por favor, introduce un numero telefónico.',
      icon: 'phone',
      prefix: '+56 '
    },
  ];

  buttonsConfig = [
    {
      text: 'Cotizar',
      color: 'primary',
      type: 'submit',
      icon: 'send',
    },
  ];

  handleFormSubmit(value) {
    console.log('Form Value:', value);
  }
}

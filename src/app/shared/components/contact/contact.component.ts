import { Component } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  formConfig = [
    {
      name: 'email',
      type: 'text',
      label: 'Email',
      placeholder: 'Ingresa tu email',
      validations: [Validators.required, Validators.email],
      error: 'Por favor, introduce un correo válido.',
      icon: 'email',
    },
    {
      name: 'name',
      type: 'text',
      label: 'Nombre',
      placeholder: 'Ingresa tu nombre y apellido',
      validations: [Validators.required],
      error: 'Por favor, introduce un nombre.',
      icon: 'person',
    },
    {
      name: 'message',
      type: 'text',
      label: 'Mensaje',
      placeholder: 'Ingresa tu mensaje',
      validations: [Validators.required],
      error: 'Por favor, escribe un mensaje.',
      icon: 'chat',
    },
    // {
    //   name: 'age',
    //   type: 'number',
    //   label: 'Edad',
    //   placeholder: 'Ingresa tu edad',
    //   validations: [Validators.required, Validators.min(18)],
    //   error: 'Debes ser mayor de 18 años.',
    //   icon: 'accessibility',
    // },
    // {
    //   name: 'gender',
    //   type: 'select',
    //   label: 'Género',
    //   options: [
    //     { value: 'male', label: 'Masculino' },
    //     { value: 'female', label: 'Femenino' },
    //     { value: 'other', label: 'Otro' },
    //   ],
    //   validations: [Validators.required],
    //   error: 'Por favor, selecciona un género.',
    //   icon: 'delete',
    // },
    {
      name: 'subscribe',
      type: 'checkbox',
      label: 'Suscribirse al boletín',
      defaultValue: false,
      icon: 'check_box',
    },
    // {
    //   name: 'birthdate',
    //   type: 'date',
    //   label: 'Fecha de nacimiento',
    //   validations: [Validators.required],
    //   error: 'Por favor, introduce una fecha válida.',
    // },
  ];

  // Configuración de los botones
  buttonsConfig = [
    {
      text: 'Enviar',
      color: 'primary',
      type: 'submit',
      icon: 'send',
    },
    {
      text: 'Cancelar',
      color: 'warn',
      type: 'button',
      icon: 'close',
      action: () => this.onCancel(),
    },
  ];
  onCancel() {
    console.log('Cancel');
  }

  handleFormSubmit(value) {
    console.log('Form Value:', value);
  }
}

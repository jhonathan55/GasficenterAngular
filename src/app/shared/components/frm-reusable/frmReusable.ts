import { ValidatorFn } from '@angular/forms';

export interface FormFieldConfig {
  name: string;
  type: 'text' | 'number' | 'select' | 'checkbox' | 'date' | 'textarea';
  label: string;
  placeholder?: string;
  validations?: ValidatorFn[];
  error?: string;
  icon?: string;
  options?: SelectOption[];
  defaultValue?: any;
}

interface SelectOption {
  value: string | number;
  label: string;
}

export interface ButtonConfig {
  text: string;
  color: string;
  type: 'submit' | 'button';
  icon?: string;
  action?: () => void;
}

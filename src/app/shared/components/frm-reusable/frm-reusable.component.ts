import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChildren,
  inject,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { ButtonConfig, FormFieldConfig } from './frmReusable';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
@Component({
  selector: 'app-frm-reusable',
  templateUrl: './frm-reusable.component.html',
  styleUrl: './frm-reusable.component.scss',
})
export class FrmReusableComponent implements OnInit {
  private fb = inject(FormBuilder);
  @ViewChildren(MatDatepicker) datepickers: QueryList<MatDatepicker<any>> =
    new QueryList();
  @Input() config: FormFieldConfig[];
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() footerText?: string;
  @Input() buttons?: ButtonConfig[];
  @Input() footer?: boolean;
  @Output() formSubmit = new EventEmitter<any>();
  form: FormGroup;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ){
    this.matIconRegistry.addSvgIcon(
      "google-calendar",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../../../assets/icons/google-calendar.svg")
    );
  }

  ngOnInit() {
    this.form = this.createGroup();
  }

  createGroup(): FormGroup {
    const group = this.fb.group({});
    this.config.forEach((field) => {
      // Solo crear controles para tipos que no sean 'button'
      if (field.type) {
        const control = this.fb.control(
          field.defaultValue || '',
          this.bindValidations(field.validations || [])
        );
        group.addControl(field.name, control);
      }
    });
    return group;
  }
  bindValidations(validations: ValidatorFn[]): ValidatorFn | null {
    return Validators.compose(validations);
  }

  onSubmit() {
    if (this.form.valid) {
      this.formSubmit.emit(this.form.value);
    }
  }

  redirectToGoogleCalendar() {
    window.open('https://calendar.google.com/calendar/render', '_blank');
  }
}

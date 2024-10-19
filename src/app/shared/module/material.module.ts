import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//MATERIAL
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { MatRippleModule, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatBadgeModule } from '@angular/material/badge';
//forms
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
//client module
import { HttpClientModule } from '@angular/common/http';
//date esta comentado porque falta i el packete de moment
import { MatMomentDateModule } from '@angular/material-moment-adapter';
//pipe currency
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEsCl from '@angular/common/locales/es-CL';

const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
const MATERIAL_MODULES = [
  FormsModule,
  ReactiveFormsModule,
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatListModule,
  MatCardModule,
  HttpClientModule,
  MatDialogModule,
  MatStepperModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
  MatSnackBarModule,
  MatDividerModule,
  MatTableModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatRippleModule,
  MatMenuModule,
  MatExpansionModule,
  CommonModule,
  MatSlideToggleModule,
  MatCheckboxModule,
  MatTabsModule,
  MatDatepickerModule,
  MatBadgeModule,
  MatMomentDateModule,
];

@NgModule({
  declarations: [],
  imports: [MATERIAL_MODULES],
  exports: [MATERIAL_MODULES],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
    { provide: LOCALE_ID, useValue: 'es-CL' },
  ],
})
export class MaterialModule {
  constructor() {
    registerLocaleData(localeEsCl);
  }
}

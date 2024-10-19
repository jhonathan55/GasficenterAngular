import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrmReusableComponent } from './frm-reusable.component';
import { MaterialModule } from '../../module/material.module';

@NgModule({
  declarations: [FrmReusableComponent],
  imports: [CommonModule, MaterialModule],
  exports: [FrmReusableComponent],
})
export class FrmReusableModule {}

import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { BodyComponent } from './shared/components/body/body.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './shared/components/carousel/carousel.component';
import { NgStyle } from '@angular/common';
import { CarouselComponentB } from './shared/components/carousel copy/carousel.component';
import { EquipmentComponent } from './shared/components/equipment/equipment.component';
import { ServicesComponent } from './shared/components/services/services.component';
import { MaterialModule } from './shared/module/material.module';
import { FrmReusableModule } from './shared/components/frm-reusable/frm-reusable.module';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './shared/components/contact/contact.component';
import { NewsComponent } from './shared/components/news/news.component';
import { ImageGridComponent } from './shared/components/image-grid/image-grid.component';
import { OffersComponent } from './shared/components/offers/offers.component';
import { CatalogDialogComponent } from './shared/components/header/catalog-dialog/catalog-dialog.component';
import { DetailDialogComponent } from './shared/components/services/detail-dialog/detail-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    CarouselComponentB,
    EquipmentComponent,
    ServicesComponent,
    ContactComponent,
    NewsComponent,
    ImageGridComponent,
    OffersComponent,
    CatalogDialogComponent,
    DetailDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbCarouselModule,
    NgStyle,
    HammerModule,
    MaterialModule,
    FrmReusableModule,
    HttpClientModule
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}

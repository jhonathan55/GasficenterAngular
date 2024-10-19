import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss',
})
export class BodyComponent {
  slides: any[] = [
    {
      url: 'https://picsum.photos/id/944/1920/1080',
      caption: 'Caption 1',
    },
    {
      url: 'assets/images/gasficenter-logo.png',
      caption: 'Caption 2',
    },
    {
      url: 'https://picsum.photos/id/984/1920/1080',
      caption: 'Caption 2',
    },
  ];
}

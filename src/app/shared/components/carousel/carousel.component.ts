import { Component, Input, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
	selector: 'app-carousel',
	templateUrl: './carousel.component.html',
  	styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
translateX(): any {
throw new Error('Method not implemented.');
}
	// images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/1920/1080`);
	@Input() slides: any[] = [];
	@Input() autoPlay: boolean = true;
	currentSlide: number = 0;
	hidden: boolean = false;
	interval: any;

	// ngOnInit(): void {
	// 	if (this.autoPlay) {
	// 		this.autoplayFunc();
	// 	}
	// }

	constructor() {
		if(this.autoPlay){
			this.autoplayFunc();
		}
	  }

	next(){
		let currentSlide = (this.currentSlide + 1) % this.slides.length;
		this.jumpToSlide(currentSlide);
		this.resetInterval;
	}

	previous(){
		let currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
		this.jumpToSlide(currentSlide);
		this.resetInterval;
	}

	jumpToSlide(index: number){
		this.hidden = true;
		setTimeout(() => {
			this.currentSlide = index;
			this.hidden = false;
		}, 250);
	}

	autoplayFunc(){
		this.interval = setInterval(() => {
			this.next();
		}, 3000);
	}

	resetInterval(){
		clearInterval(this.interval);
		this.autoplayFunc();
	}
}
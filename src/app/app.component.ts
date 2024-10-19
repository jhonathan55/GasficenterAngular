import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'landingPage-front';

  ngOnInit(): void {
    document.addEventListener("DOMContentLoaded", () => {

      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            return;
          }
          // entry.target.classList.remove('in-view');
        })
      });

      const allAnimatedElements: NodeListOf<Element> = document.querySelectorAll('.animate');

      allAnimatedElements.forEach((element: Element) => observer.observe(element));
    });
  }
}

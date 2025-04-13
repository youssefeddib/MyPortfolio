import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // <-- Ajoute cette ligne

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule] // <-- Ajoute RouterModule ici
})
export class AppComponent {
  title = 'MyPortfolio';

  navigateTo(anchor: string): void {
    const element = document.querySelector(anchor);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

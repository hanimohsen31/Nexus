import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { ExcercisesService } from './fitness/excercises.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: "./app.component.scss"
})
export class AppComponent {
  currentRoute = '';
  routes = [
    'home', 'fitness', 'food', 'signup'
  ]
  constructor(
    private Router: Router,
    private ExcercisesService: ExcercisesService
  ) {
    this.getCurrentRoute()
  }

  getCurrentRoute() {
    this.Router.events.subscribe((event: any) => {
      this.currentRoute = event.url?.replace('/', '');
      this.currentRoute == 'fitness' ? this.ExcercisesService.updateCurrentScreen("options") : null
    });
  }
}

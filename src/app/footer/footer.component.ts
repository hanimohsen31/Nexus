import { ExcercisesService } from '../fitness/excercises.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  route = '';
  constructor(
    private Router: Router, 
    private ExcercisesService: ExcercisesService
  ) {
    this.getCurrentRoute()
  }

  getCurrentRoute() {
    this.Router.events.subscribe((event: any) => {
      this.route = event.url?.replace('/', '');
      this.route == 'fitness' ? this.ExcercisesService.updateCurrentScreen("options") : null
    });
  }
}

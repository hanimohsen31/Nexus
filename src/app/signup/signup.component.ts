import { Component } from '@angular/core';
import { SignupService } from './signup.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Route, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  progress = 10;
  showBar = false;

  constructor(private SignupService: SignupService) { }

  ngOnInit() {
    this.getPercentage()
    this.getCurrentPage()
  }

  getCurrentPage() {
    this.SignupService.currentRoute$.subscribe({
      next: (res: any) => {
        !res ? this.showBar = false :
        res == '/signup/phone' ? this.showBar = false :
        res == '/signup/finish' ? this.showBar = false :
        this.showBar = true
      }
    })
  }

  getPercentage() {
    this.SignupService.progress$.subscribe({
      next: (res: any) => {
        this.progress = res
      },
    });
  }

  goBack() {
    this.SignupService.pervPage()
  }
}

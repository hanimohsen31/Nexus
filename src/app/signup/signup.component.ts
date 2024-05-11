import { Component } from '@angular/core';
import { SignupService } from '../store/signup.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  progress: number = 0;
  showBar: boolean = false;

  constructor(private SignupService: SignupService) {}

  ngOnInit() {
    this.getPercentage();
    this.showBarFn();
  }

  showBarFn() {
    this.SignupService.showBar$.subscribe({
      next: (res: any) => (this.showBar = res),
    });
  }

  getPercentage() {
    this.SignupService.progress$.subscribe({
      next: (res: any) => {
        this.progress = res;
      },
    });
  }

  goBack() {
    this.SignupService.pervPage();
  }
}

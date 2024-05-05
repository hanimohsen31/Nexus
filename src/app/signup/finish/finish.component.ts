import { Component } from '@angular/core';
import { SignupService } from '../signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finish',
  standalone: true,
  imports: [],
  templateUrl: './finish.component.html',
  styleUrl: './finish.component.scss'
})
export class FinishComponent {
  constructor(private SignupService: SignupService, private Router: Router) { }

  ngOnInit() {
    this.saveUserData()
  }

  saveUserData() {
    this.SignupService.saveUserData().subscribe({
      next: res => { console.log(res); this.redirect() },
      error: err => this.redirect()
    })
  }

  redirect() {
    setTimeout(() => {
      this.Router.navigate(['/home'])
    }, 1000);
  }
}

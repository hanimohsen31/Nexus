import { Component } from '@angular/core';
import { SignupService } from '../signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finish',
  standalone: true,
  imports: [],
  templateUrl: './finish.component.html',
  styleUrl: './finish.component.scss',
})
export class FinishComponent {
  error = false
  constructor(private SignupService: SignupService, private Router: Router) {}

  ngOnInit() {
    this.SignupService.updateShowBar(false);
    this.signUpUser();
  }

  signUpUser() {
    this.SignupService.signUpUser().subscribe({
      next: (res: any) => this.redirect('/home') ,
      error : (err : any) => this.redirect('/signup') ,
    });
  }

  redirect(route : string) {
    setTimeout(() => {
      this.Router.navigate([route]);
    }, 1000);
  }
}

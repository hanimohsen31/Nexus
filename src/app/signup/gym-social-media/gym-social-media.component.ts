import { Component } from '@angular/core';
import { SignupService } from '../signup.service';
import { FormsModule } from '@angular/forms';
import { ActionButtonComponent } from '../action-button/action-button.component';
@Component({
  selector: 'app-gym-social-media',
  standalone: true,
  imports: [FormsModule, ActionButtonComponent],
  templateUrl: './gym-social-media.component.html',
  styleUrl: './gym-social-media.component.scss',
})
export class GymSocialMediaComponent {
  facebook: string = '';
  insta: string = '';
  tiktok: string = '';
  error: boolean = false;

  constructor(private SignupService: SignupService) {}

  ngOnInit() {
    this.SignupService.updateShowBar(true);
    this.facebook = this.SignupService.userData.getValue().gymFacebook;
    this.insta = this.SignupService.userData.getValue().gymInsta;
    this.tiktok = this.SignupService.userData.getValue().gymTiktok;
  }

  continue() {
    this.SignupService.updateUserData('gymFacebook', this.facebook);
    this.SignupService.updateUserData('gymInsta', this.insta);
    this.SignupService.updateUserData('gymTiktok', this.tiktok);
    this.SignupService.nextPage('signup/image');
  }
}

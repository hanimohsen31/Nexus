import { Component } from '@angular/core';
import { PhoneComponent } from './phone/phone.component';
import { OtpComponent } from './otp/otp.component';
import { ActivityComponent } from './activity/activity.component';
import { AgeComponent } from './age/age.component';
import { CategoryComponent } from './category/category.component';
import { EmailComponent } from './email/email.component';
import { GenderComponent } from './gender/gender.component';
import { HeightComponent } from './height/height.component';
import { UserImageComponent } from './user-image/user-image.component';
import { UsernameComponent } from './username/username.component';
import { WelcomeComponent } from './welcome/welcome.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    ActivityComponent,
    AgeComponent,
    CategoryComponent,
    EmailComponent,
    GenderComponent,
    HeightComponent,
    UserImageComponent,
    UsernameComponent,
    WelcomeComponent,
    PhoneComponent,
    OtpComponent,
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  screenIndex = 9;
  progress = 0;
  pages = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  userData: any = {
    phone: '',
    name: '',
    email: '',
    image: '',
    age: '',
    gender: '',
    height: '',
    activity: '',
    category: '',
  };

  changePageIndex(page: any) {
    this.screenIndex = +page;
    this.progress = +page * 10;
  }
}

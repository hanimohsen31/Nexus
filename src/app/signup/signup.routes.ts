import { Routes } from '@angular/router';
import { PhoneComponent } from './phone/phone.component';
import { OtpComponent } from './otp/otp.component';
import { CategoryComponent } from './category/category.component';
import { UsernameComponent } from './username/username.component';
import { EmailComponent } from './email/email.component';
import { AgeComponent } from './age/age.component';
import { HeightComponent } from './height/height.component';
import { GenderComponent } from './gender/gender.component';
import { ActivityComponent } from './activity/activity.component';
import { UserImageComponent } from './user-image/user-image.component';
import { FinishComponent } from './finish/finish.component';

export const SIGNUP_ROUTES: Routes = [
  { path: 'phone', component: PhoneComponent },
  { path: 'otp', component: OtpComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'username', component: UsernameComponent },
  { path: 'email', component: EmailComponent },
  { path: 'age', component: AgeComponent },
  { path: 'gender', component: GenderComponent },
  { path: 'height', component: HeightComponent },
  { path: 'activity', component: ActivityComponent },
  { path: 'image', component: UserImageComponent },
  { path: 'finish', component: FinishComponent },
  { path: '', pathMatch: 'full', redirectTo: 'phone' },
];

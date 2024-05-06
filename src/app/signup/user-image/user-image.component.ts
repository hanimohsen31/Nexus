import { Component } from '@angular/core';
import { ActionButtonComponent } from '../action-button/action-button.component';
import { FileUploadModule } from 'primeng/fileupload';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { SignupService } from './../signup.service';
@Component({
  selector: 'app-user-image',
  standalone: true,
  imports: [FormsModule, FileUploadModule, ToastModule, ActionButtonComponent],
  providers: [MessageService],
  templateUrl: './user-image.component.html',
  styleUrl: './user-image.component.scss',
})
export class UserImageComponent {
  imageUrl: any = '';

  constructor(private SignupService: SignupService) {}

  ngOnInit() {
    this.SignupService.updateShowBar(true);
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file && file.type.match('image.*')) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  continue() {
    this.SignupService.updateUserData('image', this.imageUrl);
    this.SignupService.nextPage('signup/finish');
  }
}

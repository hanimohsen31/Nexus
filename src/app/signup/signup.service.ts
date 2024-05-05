import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { environment } from '../../environments/environment';
import { Location } from '@angular/common';


@Injectable({
  providedIn: 'root',
})
export class SignupService {

  constructor(private HttpClient: HttpClient, private Router: Router, private Location: Location) {
    initializeApp(environment.firebaseConfig);
  }

  // ---------------------------- user data -----------------------------------
  userData: any = new BehaviorSubject({});

  updateUserData(key: string, value: string) {
    let userDataCurrentValue = this.userData.getValue();
    userDataCurrentValue[key] = value;
    this.userData.next(userDataCurrentValue);
  }

  saveUserData() {
    let data = this.userData.getValue();
    console.log(data)
    let url = ""
    return this.HttpClient.post(url, data)
  }

  // ---------------------------- screen page ---------------------------------
  progress: any = new BehaviorSubject(0);
  progress$ = this.progress.asObservable()

  currentRoute = new BehaviorSubject('')
  currentRoute$ = this.currentRoute.asObservable()

  nextPage(route: string, progress: number = 10) {
    // progress
    let currentProgress = this.progress.getValue()
    let newProgress = currentProgress + progress
    this.progress.next(newProgress)
    // navigation
    this.Router.navigate([route]).then(() => {
      // routing
      let url = this.Router.url
      this.currentRoute.next(url)
      }
    )
  }

  pervPage() {
    this.Location.back();
  }
  // ---------------------------- send otp ------------------------------------
  otpSent = new BehaviorSubject(false)
  otpSent$ = this.otpSent.asObservable()

  mobileErrorMsg: any = new BehaviorSubject(null)
  mobileErrorMsg$ = this.mobileErrorMsg.asObservable()

  otpVerefied = new BehaviorSubject(false)
  otpVerefied$ = this.otpVerefied.asObservable()

  otpErrorMsg: any = new BehaviorSubject(null)
  otpErrorMsg$ = this.otpErrorMsg.asObservable()

  confirmResult: any = new BehaviorSubject(null)

  signInWithPhoneNumber(phoneNumber: any) {
    phoneNumber = `+2${phoneNumber}`
    const auth: any = getAuth();
    const appVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
      'size': 'invisible',
      'callback': (response: any) => {
        // console.log("appVerifier Done", response)
      }
    });

    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        this.confirmResult.next(confirmationResult)
        this.otpSent.next(true)
        this.nextPage('signup/otp', 10)
      }).catch((error) => {
        this.mobileErrorMsg.next(error?.code || "signInWithPhoneNumber error")
      });
  }

  confirmationResult(code: any) {
    let confirmationResult = this.confirmResult.getValue()
    confirmationResult.confirm(code).then((result: any) => {
      // const user = result.user;
      this.nextPage('signup/category', 10)
    }).catch((error: any) => {
      this.otpErrorMsg.next(error?.code || "confirmationResult error")
    });
  }

}

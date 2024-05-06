import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { environment } from '../../environments/environment';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
/**
 * user data
 * screen page
 * send otp
 * is logged in
 */
export class SignupService {
  constructor(
    private HttpClient: HttpClient,
    private Router: Router,
    private Location: Location
  ) {
    initializeApp(environment.firebaseConfig);
    this.checkUser();
    this.checkRoutes();
  }

  // ---------------------------- user data -----------------------------------
  userData: any = new BehaviorSubject({
    activity: '',
    age: '',
    category: '',
    email: '',
    gender: '',
    address: '',
    gymPlan: '',
    gymFacebook: '',
    gymInsta: '',
    gymTiktok: '',
    gymWebsite: '',
    height: '',
    password: '',
    phone: '',
    trainerInfo: '',
    imageUrl: '',
    name: '',
    // not collected yet
    gymLat: '',
    gymLong: '',
  });

  updateUserData(key: string, value: string) {
    let userDataCurrentValue = this.userData.getValue();
    userDataCurrentValue[key] = value;
    this.userData.next(userDataCurrentValue);
  }

  signUpUser() {
    let data = this.userData.getValue();
    let url = environment.baseUrl;
    let finalData = {};
    if (data.category == 'Trainee') {
      url += 'auth/signup/standalone';
    } else if (data.category == 'Trainer') {
      url += 'auth/signup/standalone';
      finalData = data;
      // data = {
      //   trainer: { ...trainerData },
      //   owner: { ...userData },
      // };
    } else if (data.category == 'Gym') {
      url += 'auth/signup/gym';
      finalData = {
        gym: {
          name: data.name,
          plan: data.gymPlan,
          location: {
            lat: data.gymLat,
            long: data.gymLong,
          },
          address: data.address,
        },
        owner: {
          name: data.name,
          phoneNumber: data.phone,
          email: data.email,
          password: data.password,
        },
      };
    }
    return this.HttpClient.post(url, finalData);
  }

  login(phoneNumber: string, password: string) {
    let url = environment.baseUrl + 'auth/signin';
    let credentials = {
      phoneNumber,
      password,
    };
    return this.HttpClient.post(url, credentials);
  }

  // ---------------------------- screen page ---------------------------------
  progress: any = new BehaviorSubject(0);
  progress$ = this.progress.asObservable();

  showBar: any = new BehaviorSubject(false);
  showBar$ = this.showBar.asObservable();

  currentRoute = new BehaviorSubject('');
  currentRoute$ = this.currentRoute.asObservable();

  updateShowBar(value: boolean) {
    this.showBar.next(value);
  }

  updateProress(operation: string, progress: number) {
    let currentProgress = this.progress.getValue();
    let newProgress = 0;
    // progress
    if (operation === 'add') {
      newProgress = currentProgress + progress;
    } else if (operation === 'sub') {
      newProgress = currentProgress - progress;
    } else if (operation === 'reset') {
      newProgress = 0;
    } else if (operation === 'complete') {
      newProgress = 100;
    }
    this.progress.next(newProgress);
  }

  nextPage(route: string, progress: number = 9.09, operation: string = 'add') {
    this.updateProress(operation, progress);
    // navigation
    this.Router.navigate([route]).then(() => {
      // routing
      let url = this.Router.url;
      this.currentRoute.next(url);
    });
  }

  pervPage() {
    this.updateProress('sub', 9.09);
    this.Location.back();
  }

  checkRoutes() {
    let userData = this.userData.getValue()?.phone;
    userData ? null : this.nextPage('signup', 0, 'reset');
  }
  // ---------------------------- send otp ------------------------------------
  otpSent = new BehaviorSubject(false);
  otpSent$ = this.otpSent.asObservable();

  mobileErrorMsg: any = new BehaviorSubject(null);
  mobileErrorMsg$ = this.mobileErrorMsg.asObservable();

  otpVerefied = new BehaviorSubject(false);
  otpVerefied$ = this.otpVerefied.asObservable();

  otpErrorMsg: any = new BehaviorSubject(null);
  otpErrorMsg$ = this.otpErrorMsg.asObservable();

  confirmResult: any = new BehaviorSubject(null);

  signInWithPhoneNumber(phoneNumber: any) {
    phoneNumber = `+2${phoneNumber}`;
    const auth: any = getAuth();
    const appVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
      size: 'invisible',
      callback: (response: any) => {
        // console.log("appVerifier Done", response)
      },
    });

    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        this.confirmResult.next(confirmationResult);
        this.otpSent.next(true);
        this.nextPage('signup/otp');
      })
      .catch((error) => {
        this.mobileErrorMsg.next(error?.code || 'signInWithPhoneNumber error');
      });
  }

  confirmationResult(code: any) {
    let confirmationResult = this.confirmResult.getValue();
    confirmationResult
      .confirm(code)
      .then((result: any) => {
        // const user = result.user;
        this.nextPage('signup/username');
      })
      .catch((error: any) => {
        this.otpErrorMsg.next(error?.code || 'confirmationResult error');
      });
  }

  // ---------------------------- is logged in ------------------------------------
  isLoggedIn = new BehaviorSubject(false);
  isLoggedIn$ = this.isLoggedIn.asObservable();

  updateIsLoggedIn(value: boolean) {
    this.isLoggedIn.next(value);
  }

  setToken(data: any) {
    let stringified = JSON.stringify(data);
    localStorage.setItem('nut', stringified);
  }

  checkUser() {
    let token = localStorage.getItem('nut'); // nexus user token
    let userData = localStorage.getItem('nud'); // nexus user data
    if (token) this.updateIsLoggedIn(true);
    if (userData) this.updateIsLoggedIn(true);
  }
}

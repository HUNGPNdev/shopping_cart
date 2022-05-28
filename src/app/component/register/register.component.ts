import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/entity/auth/auth.service';
import { SigupInfo } from 'src/app/entity/auth/sigup-info';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {};
  signupInfo: SigupInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
 
  constructor(private authService: AuthService) { }
 
  ngOnInit() { }

  onSubmit() {
    console.log(this.form);

    this.signupInfo = new SigupInfo(
      this.form.name,
      this.form.username,
      this.form.email,
      this.form.password
    );
 
    this.authService.signUp(this.signupInfo).subscribe(
      data => {
        console.log(data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

}

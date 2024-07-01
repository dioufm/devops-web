import { EventEmitter, Component, Output, ChangeDetectionStrategy } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Validation from '../../utils/validation';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [
    ReactiveFormsModule, 
    CommonModule,
    RouterLink
  ],
  changeDetection: ChangeDetectionStrategy.Default
})

export class LoginComponent {

  componentToShow: string = "welcome";

  data: string[] = [];

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) { }

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  form: FormGroup = new FormGroup({
    fullname: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    acceptTerms: new FormControl(false),
  });
  submitted = false;

  isLogin = true;

  

  ngOnInit(): void {
    
    this.loginForm = this.formBuilder.group({
      email: ['mdiouf@mdiouf.fr', [Validators.required, Validators.email]],
      password: ['mdiouf', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    console.log(JSON.stringify(this.loginForm.value, null, 2));

      this.authService.request(
          "POST",
          "/login",
          {
              login: this.loginForm.value.email,
              password: this.loginForm.value.password
          }).then(
          response => {
              this.authService.saveUser(response.data);
              this.authService.setAuthToken(response.data.token);
              window.location.reload();
              this.componentToShow = "messages";
          }).catch(
          error => {
              if (error.response.status === 401) {
                this.authService.setAuthToken(null);
            } else {
                this.data = error.response.data;
            }
          }
      );
  
  
  }

  onReset(): void {
    this.submitted = false;
    this.loginForm.reset();
  }
  

}

import { EventEmitter, Component, Output, ChangeDetectionStrategy } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Validation from '../../utils/validation';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [
    ReactiveFormsModule, 
    CommonModule,
    RouterLink
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class RegisterComponent {

  data: string[] = [];


  form: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    username: new FormControl(''),
    login: new FormControl(''),
    password: new FormControl(''),
    acceptTerms: new FormControl(false),
  });
  submitted = false;

  isLogin = true;

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) { }

  

  ngOnInit(): void {
    
    this.form = this.formBuilder.group(
      {
        firstName: ['Mamadou', Validators.required],
        lastName: [
          'DIOUF',
          [
            Validators.required,
          ]
        ],
        login: ['mdiouf@mdiouf.fr', [Validators.required, Validators.email]],
        password: [
          'mdiouf',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        //acceptTerms: [false, Validators.requiredTrue]
      },
      {
        //validators: [Validation.match('password', 'confirmPassword')]
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));

      this.authService.request(
          "POST",
          "/register",
          {
              firstName: this.form.value.firstName,
              lastName: this.form.value.lastName,
              login: this.form.value.login,
              password: this.form.value.password
          }).then(
          response => {
              //this.authService.setAuthToken(response.data.token);
              this.router.navigate(['/auth/login']);
          }).catch(
          error => {
              this.authService.saveUser(null);
              this.authService.setAuthToken(null);
              this.data = error.response.data;
          }
      );
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
  
}

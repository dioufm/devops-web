import { EventEmitter, Component, Output, ChangeDetectionStrategy } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Validation from '../../utils/validation';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  standalone: true,
  imports: [
    ReactiveFormsModule, 
    CommonModule,
    RouterLink
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProfileComponent {

  currentUser: any ;
  editProfile : boolean = false;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.currentUser = this.authService.getUser();
  }

  public startEditProfile(){
    this.editProfile = true
  }
  
}

import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Router, RouterLink, RouterOutlet } from "@angular/router";
import { Init } from "v8";
import { AuthService } from "./auth.service";

@Component({
    selector: 'app-auth',
    standalone: true,
    imports: [CommonModule, RouterLink, RouterOutlet],
    templateUrl: './auth.component.html',
    styleUrl: './auth.component.css'
  })
  export class AuthComponent implements OnInit {

    componentToShow: string = "welcome";

  data: string[] = [];

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
   if(this.authService.isLoggedIn()){
    this.router.navigate(['auth/profile']);
   }else{
    this.router.navigate(['auth/login']);
   }
  }

  }
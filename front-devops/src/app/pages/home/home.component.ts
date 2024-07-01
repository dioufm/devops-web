import { Component, OnInit } from '@angular/core';
import { FormationsService } from '../../service/formations.service';
import { Formation } from '../../model/formation';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  formations: Array<Formation>  = [];
  errors: string[] = [];
  constructor(private formationsService: FormationsService) { }

  ngOnInit(): void {


      this.formationsService.request(
        "GET",
        "/",
        {}).then(
        response => {
          console.log(response);
           this.formations =  response.data;
        }).catch(
        error => {
          this.errors = error.response.data;
        }
    );

  }
}
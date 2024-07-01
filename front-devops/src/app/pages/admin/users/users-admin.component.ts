import { Component, OnInit } from '@angular/core';

import { CommonModule, isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { User } from '../../../model/user';
import { UsersAdminService } from './service/users-admin.service';
import { CatalogueAdminService } from './service/catalogue-admin.service';

@Component({
  selector: 'app-users-admin',
  standalone: true,
  imports: [CommonModule],
  providers :[UsersAdminService, CatalogueAdminService],
  templateUrl: './users-admin.component.html',
  styleUrl: './users-admin.component.css'
})
export class UsersAdminComponent implements OnInit {

  users: User[] = [];
  catalogues: any;
  loaded: boolean;


  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    @Inject(APP_ID) private appId: string,
    private usersAdminService: UsersAdminService,
    private catalogueAdminService: CatalogueAdminService
  ) {
    this.loaded = false;
  }
  ngOnInit(): void {
    this.getAdminUsers();
    //this.getAdminDocuments();
  }

  getAdminUsers(): void {
    this.loaded = false;
    this.usersAdminService.getAdminUsers()
      .subscribe(
        users => {
          this.users = users;
          this.loaded = true;
          const platform = isPlatformBrowser(this.platformId) ?
            'in the browser' : 'on the server';
          console.log(`getUsers : Running ${platform} with appId=${this.appId}`);
        });
  }

  getAdminDocuments(): void {
    this.loaded = false;
    this.catalogueAdminService.getAdminCatalogue()
      .subscribe(
        catalogues => {
          this.catalogues = catalogues;
          this.loaded = true;
          const platform = isPlatformBrowser(this.platformId) ?
            'in the browser' : 'on the server';
          console.log(`getUsers : Running ${platform} with appId=${this.appId}`);
        });
  }
}

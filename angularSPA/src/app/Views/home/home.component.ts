import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { User } from 'src/app/Interfaces/user.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  searchUser(value: string) {
    console.log(value);
  }

  public users: User[] = [];
  public user: User;

  // public totalUsers: number;
  // public page: number = 1;
  // public itemsPerPage: number = 10;

  constructor() {}

  ngOnInit(): void {
  }
 
}

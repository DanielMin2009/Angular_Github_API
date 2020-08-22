import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersService } from 'src/app/Services/users.service';
import { User } from 'src/app/Interfaces/user.interface';
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  public users: User[] = [];
  public user: User;

  // public totalUsers: number;
  // public page: number = 1;
  // public itemsPerPage: number = 10;

  constructor(
    private httpClient: HttpClient,
    private _usersService: UsersService,
    private router: Router) {}

  ngOnInit(): void {
    this.getUsers();
  }
  public async getUsers(): Promise<void> {
    this._usersService.getUsers().subscribe(
      (data) => {
        this.users = data;
        console.log(data);
        localStorage.setItem('users', JSON.stringify(this.users));
      },
      (error) => alert('error on load data')
    );
  }

  // showItems(event) {
  //   this.itemsPerPage = event.target.value;
  // }
}

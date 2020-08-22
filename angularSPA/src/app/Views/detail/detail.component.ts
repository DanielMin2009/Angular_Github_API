import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/Interfaces/user.interface';
import { Observable, from } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public users: User[] = [];
  id: number;
  user: User;

  constructor(private activatedRoute: ActivatedRoute) {
    this.users = [];
  }

  ngOnInit(): void {
    this.users = JSON.parse(localStorage.getItem('users'));
    this.activatedRoute.params.subscribe((params) => {
      this.id = +params['id'];
    });
    this.getUser(this.id).subscribe((user) => {
      this.user = user;
    });
    console.log('get user from local storage', this.user);
  }
  getUser(id: number): Observable<User> { 
    const USER = this.users.filter((user) => user.id === id );
    return from(USER);
  }
}

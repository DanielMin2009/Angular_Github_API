import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../Interfaces/user.interface';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: User[] = [];
  user: User;
  private baseUrl: string = 'https://api.github.com/users';

  constructor(private http: HttpClient) {}

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }

  // searchUser(term: string) {
  //   let usersArr: User[] = [];
  //   term = term.toLocaleLowerCase();

  //   for (let user of this.users) {
  //     let name = user.name.toLocaleLowerCase();
  //     if (name.indexOf(term) >= 0) {
  //       usersArr.push(user);
  //     }
  //   }
  //   return usersArr;
  // }

  // public getProducts(): Observable<User[]> {
  //   const USERS = require('https://api.github.com/users');
  //   return of(USERS).pipe(tap((data) => console.log('service', data)));
  // }
}

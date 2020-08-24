import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from '../Interfaces/user.interface';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

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
  // public getUser(login: string): Observable<User> {
  //   const URL_USER = `https://api.github.com/users/${login}`;
  //   return this.http.get<User>(URL_USER);
  // }
}

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UsersService } from 'src/app/Services/users.service';
import { User } from 'src/app/Interfaces/user.interface';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { filter, switchMap, debounceTime, catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-seeker',
  templateUrl: './seeker.component.html',
  styleUrls: ['./seeker.component.scss']
})
export class SeekerComponent implements OnInit {
  // @ViewChild('loginName') loginName: ElementRef;

  public users: User[] = [];
  public user: User;
  findControl = new FormControl();
  term: string;

  error: boolean = false;

  public totalUsers: number;
  public page: number = 1;
  public itemsPerPage: number = 9;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private _usersService: UsersService
    ) {}

  ngOnInit(): void {
    this.getUsers();
    this.activatedRoute.params.subscribe(params => {
      console.log(params['term']);
      this.users = this.searchUsers(params['term']);
    });
  }

  public async getUsers(): Promise<void> {
    this._usersService.getUsers().subscribe(
      (data) => {
        this.users = data;
        localStorage.setItem('users', JSON.stringify(this.users));
      },
      (error) => alert('error on load data')
    );
  }

  searchUsers(loginName: string): User[] {
    let usersArr: User[] = [];
    loginName = loginName.toLowerCase();
    for (let user of this.users) {
      let login = user.login.toLowerCase();
      if (login.indexOf(loginName) >= 0) {
        usersArr.push(user),
        debounceTime(1000);
      }
    }
    return usersArr;
  }

  // searchUsers(term: string): void {
  //   this.findControl.valueChanges.pipe(
  //     filter((value) => value.length > 3),
  //     debounceTime(1000),
  //     switchMap((value) =>
  //       this._usersService.getUser(value).pipe(
  //         catchError((err) => {
  //           this.user = null;
  //           this.error = true;
  //           return EMPTY;
  //         })))
  //   ).subscribe( user => this.user = user )
  // }

  viewDetail(id: number) {
    this.router.navigate(['/user', id]);
  }
  showItems(event) {
    this.itemsPerPage = event.target.value;
  }

}

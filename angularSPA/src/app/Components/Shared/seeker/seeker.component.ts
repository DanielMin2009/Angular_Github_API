import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Services/users.service';
import { User } from 'src/app/Interfaces/user.interface';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-seeker',
  templateUrl: './seeker.component.html',
  styleUrls: ['./seeker.component.scss']
})
export class SeekerComponent implements OnInit {

  public users: User[] = [];
  public user: User;
  term: string;

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

  searchUsers(term: string): User[] {
    let usersArr: User[] = [];
    term = term.toLowerCase();
    for (let user of this.users) {
      let login = user.login.toLowerCase();

      if (login.indexOf(term) >= 0) {
        usersArr.push(user);
      }
    }
    return usersArr;
  }

  viewDetail(id: number) {
    this.router.navigate(['/user', id]);
  }
  showItems(event) {
    this.itemsPerPage = event.target.value;
  }

}

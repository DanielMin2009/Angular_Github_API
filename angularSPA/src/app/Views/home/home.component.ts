import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UsersService } from 'src/app/Services/users.service';
import { User } from 'src/app/Interfaces/user.interface';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { filter, switchMap, debounceTime, catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private _usersService: UsersService
  ) {}

  findControl = new FormControl();
  error: boolean = false;
  user: User = null;

  ngOnInit(): void {
    // When input change something will happen
    this.findControl.valueChanges.pipe(
      // When input will have 3 characters we are going to work
      filter((value) => value.length > 3),
      // We are going to wait 1000 ms to show results
      debounceTime(1000),
      switchMap((value) =>
        this._usersService.getUser(value).pipe(
          catchError((err) => {
            this.user = null;
            this.error = true;
            return EMPTY;
          })))
    ).subscribe( user => this.user = user )
  }
}

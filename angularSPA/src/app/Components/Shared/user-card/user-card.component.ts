import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/Interfaces/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  @Input() user: User;
  @Output() selectedUser: EventEmitter<number>;

  constructor(private router: Router) {
    this.selectedUser = new EventEmitter();
  }

  ngOnInit(): void {
    console.log(this.user, 'card');
  }

  viewDetail(userId) {
    // This component is inside a parent component and it has to emit the click event, passing him the selectedUser id to the father component. It makes possible to navigate to it's url with userId as a parameter (Output)
    this.selectedUser.emit(userId);
  }

}

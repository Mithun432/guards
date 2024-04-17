import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  constructor(private router:Router){}
  usrlogout(){
    localStorage.clear()
    this.router.navigateByUrl("/profile")
  }
}

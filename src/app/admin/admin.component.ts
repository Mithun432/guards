import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from '../app.routes';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
constructor(private router:Router){}
admlogout(){
  localStorage.clear()
  this.router.navigateByUrl("/profile")
}
}

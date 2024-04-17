import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
role: any;
constructor(private router:Router){}
prflauthenticate(role:string){
if(role === "admin")
  {
    localStorage.setItem("role","admin");
    this.router.navigateByUrl("/adminuser");
  }
  else{
    localStorage.setItem("role","user")
    this.router.navigateByUrl("/adminuser")
  }
}
logout(){
  localStorage.clear()
  this.router.navigateByUrl("/login")
}

}

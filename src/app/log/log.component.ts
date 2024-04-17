import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { DashComponent } from '../dash/dash.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-log',
  standalone: true,
  imports: [RouterModule,RouterLink,DashComponent,CommonModule,FormsModule],
  templateUrl: './log.component.html',
  styleUrl: './log.component.scss'
})
export class LogComponent {
  constructor(private router:Router){}
mail: any;
pswd: any;

  logauthenticate(mail:string,pswd:string){
// console.log(mail,pswd)
    if(mail==="user@gmail.com" && pswd==="password")
      {
        localStorage.setItem("user","user@gmail.com");
        localStorage.setItem("pswd","password");
        this.router.navigateByUrl("/dash")
      }else{
        alert("Invalid email or password")
      }
  }
  // logout(){
  //   localStorage.clear()
  //   this.router.navigateByUrl("/login")
  // }
}

import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule} from '@angular/router';
import { LogComponent } from '../log/log.component';

@Component({
  selector: 'app-dash',
  standalone: true,
  imports: [RouterLink,RouterModule,LogComponent],
  templateUrl: './dash.component.html',
  styleUrl: './dash.component.scss'
})
export class DashComponent {
  constructor(private router:Router){}
logout(){
  localStorage.clear()
  this.router.navigateByUrl("/login")
}
prfl(){
  this.router.navigateByUrl("/profile")

}
}

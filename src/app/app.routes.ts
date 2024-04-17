import { Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { LogComponent } from './log/log.component';
import { loginGuard } from './login.guard';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { profileGuard } from './profile.guard';

export const routes: Routes = [
    {path:"", redirectTo: 'login', pathMatch: 'full'},
    {path:"dash", component:DashComponent,
        canActivate:[loginGuard],
    },
    {path:"login", component:LogComponent},
    {path:"profile", component:ProfileComponent},
    {path:"adminuser", component:AdminComponent,
        canMatch:[profileGuard],
    },
    {path:"adminuser", component:UserComponent,},
    
];

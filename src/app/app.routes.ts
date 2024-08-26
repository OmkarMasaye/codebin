import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { CreateComponent } from './components/create/create.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'create', component: CreateComponent, canActivate: [authGuard] },
    { path: 'about', loadComponent: () => import('./components/about/about.component').then(mod => mod.AboutComponent) },
    { path:'',redirectTo:"/login",pathMatch:"full"},
    { path: '**', component: NotfoundComponent },
        
];

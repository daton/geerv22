import{Routes, RouterModule} from '@angular/router'

import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';


const appRoutes:Routes=[
   
   
    {path:'login', component:LoginComponent},
    {path:'**',component:PagenotfoundComponent}
];
export const AppRoutes=RouterModule.forRoot(appRoutes,{useHash:true});
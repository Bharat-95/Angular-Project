import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [
  { path: 'about', component: AboutComponent },
  {path:'services', component: ServicesComponent},
  {path:'technologies', component:TechnologiesComponent},
  {path:'', component:HomeComponent},
];

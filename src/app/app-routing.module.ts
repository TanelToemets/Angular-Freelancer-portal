import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';
import { BecomeflComponent } from './becomefl/becomefl.component';
import { HireflComponent } from './hirefl/hirefl.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
    },
  {
    path: 'home',
    component: HomeComponent
    },
    {
    path: 'about/:id',
    component: AboutComponent
    },
    {
    path: 'hirefl',
    component: HireflComponent
    },
    {
    path: 'becomefl',
    component: BecomeflComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

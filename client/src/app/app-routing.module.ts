import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditsComponent } from './pages/credits/credits.component';
import { HomeComponent } from './pages/home/home.component';
import { SurveyComponent } from './pages/survey/survey.component';

const routes: Routes = [
  {path:'home', component: HomeComponent },
  
  {path:'survey', component: SurveyComponent},
  {path:'credits', component :CreditsComponent},
{path: '', redirectTo: '/home', pathMatch: 'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

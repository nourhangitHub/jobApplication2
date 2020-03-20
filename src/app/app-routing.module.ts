import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicantComponent} from './applicant/applicant.component';
import{ JobComponent } from './job/job.component'


const routes: Routes = [
  { path: '', redirectTo: 'applicant', pathMatch: 'full' },
  { path: 'applicant', component: ApplicantComponent},
  { path: 'jobs', component:JobComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

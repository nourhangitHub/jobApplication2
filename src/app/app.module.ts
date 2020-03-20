import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import {SharedService} from './shared.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { JobComponent } from './job/job.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplicantComponent,
    JobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidateDetailsComponent } from './candidate-details/candidate-details.component';
import { ExamRulesComponent } from './exam-rules/exam-rules.component';
import { ExamDashboardComponent } from './exam-dashboard/exam-dashboard.component';
import { ExamSummaryComponent } from './exam-summary/exam-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    CandidateDetailsComponent,
    ExamRulesComponent,
    ExamDashboardComponent,
    ExamSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidateDetailsComponent } from './candidate-details/candidate-details.component';
import { ExamRulesComponent } from './exam-rules/exam-rules.component';
import { ExamDashboardComponent } from './exam-dashboard/exam-dashboard.component';
import { ExamSummaryComponent } from './exam-summary/exam-summary.component';

const routes: Routes = [
  {path:"",component:CandidateDetailsComponent},
  {path:"Rules",component:ExamRulesComponent},
  {path:"Exam",component:ExamDashboardComponent},
  {path:"Summary",component:ExamSummaryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

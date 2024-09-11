import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PivotSBUComponent } from './pivot-sbu/pivot-sbu.component';
import { SummaryAccountComponent } from './summary-account/summary-account.component';
import { SummaryEDPComponent } from './summary-edp/summary-edp.component';

const routes: Routes = [
  {
    path:'Pivot', component:PivotSBUComponent
  },
  {
    path:'', component:SummaryAccountComponent
  },
  {
    path:'summaryEDP', component:SummaryEDPComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

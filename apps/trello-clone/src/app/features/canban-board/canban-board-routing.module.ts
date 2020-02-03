import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanbanBoardComponent } from './containers/canban-board.component';

const routes: Routes = [{ path: '', component: CanbanBoardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CanbanBoardRoutingModule {}

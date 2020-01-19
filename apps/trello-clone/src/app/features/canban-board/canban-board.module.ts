import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromCanbanBoard from './store/canban-board.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CanbanBoardEffects } from './store/canban-board.effects';
import { CanbanBoardComponent } from './containers/canban-board.component';
import { CanbanBoardRoutingModule } from './canban-board-routing.module';
import { TaskListModule } from '../task-list/task-list.module';

@NgModule({
  declarations: [CanbanBoardComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromCanbanBoard.canbanBoardFeatureKey,
      fromCanbanBoard.reducer
    ),
    EffectsModule.forFeature([CanbanBoardEffects]),
    CanbanBoardRoutingModule,
    TaskListModule
  ],
  exports: [CanbanBoardComponent]
})
export class CanbanBoardModule {}

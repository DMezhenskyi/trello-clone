import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectIsCanbanBoardLoaded } from '../store/canban-board.selectors';
import { loadCanbanBoards } from '../store/canban-board.actions';
import { AppState } from '../../../root-store/reducers';

@Component( {
  selector: 'tc-canban-board',
  templateUrl: './canban-board.component.html',
  styleUrls: ['./canban-board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class CanbanBoardComponent implements OnInit {

  isLoaded$: Observable<boolean>;

  constructor( private store: Store<AppState> ) { }

  ngOnInit() {
    this.store.subscribe( b => console.log( 'store', b.canbanBoard.isLoaded ) )
    this.isLoaded$ = this.store.select( selectIsCanbanBoardLoaded );
  }

  onClick() {
    this.store.dispatch( loadCanbanBoards() );
  }

}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanbanBoardComponent } from './canban-board.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from '../../../root-store/reducers';

describe('CanbanBoardComponent', () => {
  let component: CanbanBoardComponent;
  let fixture: ComponentFixture<CanbanBoardComponent>;
  let store: Store<any>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      declarations: [CanbanBoardComponent]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanbanBoardComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LogbookPage } from './logbook.page';

describe('LogbookPage', () => {
  let component: LogbookPage;
  let fixture: ComponentFixture<LogbookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogbookPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LogbookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

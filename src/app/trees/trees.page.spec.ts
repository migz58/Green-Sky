import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TreesPage } from './trees.page';

describe('TreesPage', () => {
  let component: TreesPage;
  let fixture: ComponentFixture<TreesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TreesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

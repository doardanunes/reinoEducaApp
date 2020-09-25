import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContBPage } from './cont-b.page';

describe('ContBPage', () => {
  let component: ContBPage;
  let fixture: ComponentFixture<ContBPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContBPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContBPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

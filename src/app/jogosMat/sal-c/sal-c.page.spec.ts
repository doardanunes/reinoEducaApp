import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SalCPage } from './sal-c.page';

describe('SalCPage', () => {
  let component: SalCPage;
  let fixture: ComponentFixture<SalCPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalCPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SalCPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SalBPage } from './sal-b.page';

describe('SalBPage', () => {
  let component: SalBPage;
  let fixture: ComponentFixture<SalBPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalBPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SalBPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

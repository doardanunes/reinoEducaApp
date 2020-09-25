import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SalAPage } from './sal-a.page';

describe('SalAPage', () => {
  let component: SalAPage;
  let fixture: ComponentFixture<SalAPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalAPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SalAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

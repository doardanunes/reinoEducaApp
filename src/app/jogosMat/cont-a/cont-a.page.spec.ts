import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContAPage } from './cont-a.page';

describe('ContAPage', () => {
  let component: ContAPage;
  let fixture: ComponentFixture<ContAPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContAPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

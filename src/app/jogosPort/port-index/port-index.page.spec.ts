import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PortIndexPage } from './port-index.page';

describe('PortIndexPage', () => {
  let component: PortIndexPage;
  let fixture: ComponentFixture<PortIndexPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortIndexPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PortIndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

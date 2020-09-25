import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MeuAvancoPage } from './meu-avanco.page';

describe('MeuAvancoPage', () => {
  let component: MeuAvancoPage;
  let fixture: ComponentFixture<MeuAvancoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeuAvancoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MeuAvancoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

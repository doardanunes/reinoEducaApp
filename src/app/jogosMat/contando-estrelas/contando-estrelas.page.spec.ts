import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContandoEstrelasPage } from './contando-estrelas.page';

describe('ContandoEstrelasPage', () => {
  let component: ContandoEstrelasPage;
  let fixture: ComponentFixture<ContandoEstrelasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContandoEstrelasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContandoEstrelasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

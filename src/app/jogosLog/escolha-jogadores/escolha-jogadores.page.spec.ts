import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EscolhaJogadoresPage } from './escolha-jogadores.page';

describe('EscolhaJogadoresPage', () => {
  let component: EscolhaJogadoresPage;
  let fixture: ComponentFixture<EscolhaJogadoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscolhaJogadoresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EscolhaJogadoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

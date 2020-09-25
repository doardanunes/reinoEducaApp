import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JogoDaVelhaSoloPage } from './jogo-da-velha-solo.page';

describe('JogoDaVelhaSoloPage', () => {
  let component: JogoDaVelhaSoloPage;
  let fixture: ComponentFixture<JogoDaVelhaSoloPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JogoDaVelhaSoloPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JogoDaVelhaSoloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

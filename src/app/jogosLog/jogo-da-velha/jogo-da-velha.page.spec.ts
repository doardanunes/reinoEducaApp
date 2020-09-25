import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JogoDaVelhaPage } from './jogo-da-velha.page';

describe('JogoDaVelhaPage', () => {
  let component: JogoDaVelhaPage;
  let fixture: ComponentFixture<JogoDaVelhaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JogoDaVelhaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JogoDaVelhaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SaladaFrutasPage } from './salada-frutas.page';

describe('SaladaFrutasPage', () => {
  let component: SaladaFrutasPage;
  let fixture: ComponentFixture<SaladaFrutasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaladaFrutasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SaladaFrutasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

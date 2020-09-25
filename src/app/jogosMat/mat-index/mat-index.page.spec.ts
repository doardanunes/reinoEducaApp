import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MatIndexPage } from './mat-index.page';

describe('MatIndexPage', () => {
  let component: MatIndexPage;
  let fixture: ComponentFixture<MatIndexPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatIndexPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MatIndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

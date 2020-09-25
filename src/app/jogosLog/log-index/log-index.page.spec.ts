import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LogIndexPage } from './log-index.page';

describe('LogIndexPage', () => {
  let component: LogIndexPage;
  let fixture: ComponentFixture<LogIndexPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogIndexPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LogIndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PedidosInfoPage } from './pedidos-info.page';

describe('PedidosInfoPage', () => {
  let component: PedidosInfoPage;
  let fixture: ComponentFixture<PedidosInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidosInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PedidosInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

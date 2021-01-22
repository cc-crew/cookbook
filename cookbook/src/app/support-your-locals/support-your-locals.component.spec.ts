import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportYourLocalsComponent } from './support-your-locals.component';

describe('SupportYourLocalsComponent', () => {
  let component: SupportYourLocalsComponent;
  let fixture: ComponentFixture<SupportYourLocalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportYourLocalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportYourLocalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

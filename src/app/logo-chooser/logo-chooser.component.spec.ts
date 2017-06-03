import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoChooserComponent } from './logo-chooser.component';

describe('LogoChooserComponent', () => {
  let component: LogoChooserComponent;
  let fixture: ComponentFixture<LogoChooserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoChooserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

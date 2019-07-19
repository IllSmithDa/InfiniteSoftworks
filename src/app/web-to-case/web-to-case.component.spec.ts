import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebToCaseComponent } from './web-to-case.component';

describe('WebToCaseComponent', () => {
  let component: WebToCaseComponent;
  let fixture: ComponentFixture<WebToCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebToCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebToCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

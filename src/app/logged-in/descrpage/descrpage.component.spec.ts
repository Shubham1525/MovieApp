import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescrpageComponent } from './descrpage.component';

describe('DescrpageComponent', () => {
  let component: DescrpageComponent;
  let fixture: ComponentFixture<DescrpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescrpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescrpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

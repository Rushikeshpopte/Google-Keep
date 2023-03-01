import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllnoteComponent } from './get-allnote.component';

describe('GetAllnoteComponent', () => {
  let component: GetAllnoteComponent;
  let fixture: ComponentFixture<GetAllnoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllnoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

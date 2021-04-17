import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddImagecatComponent } from './add-imagecat.component';

describe('AddImagecatComponent', () => {
  let component: AddImagecatComponent;
  let fixture: ComponentFixture<AddImagecatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddImagecatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddImagecatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

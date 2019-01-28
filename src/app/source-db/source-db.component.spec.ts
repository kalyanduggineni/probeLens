import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceDBComponent } from './source-db.component';

describe('SourceDBComponent', () => {
  let component: SourceDBComponent;
  let fixture: ComponentFixture<SourceDBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceDBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

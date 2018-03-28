import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgorithmPreviewComponent } from './algorithm-preview.component';

describe('AlgorithmPreviewComponent', () => {
  let component: AlgorithmPreviewComponent;
  let fixture: ComponentFixture<AlgorithmPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgorithmPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgorithmPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCreate2Component } from './post-create2.component';

describe('PostCreate2Component', () => {
  let component: PostCreate2Component;
  let fixture: ComponentFixture<PostCreate2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostCreate2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCreate2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

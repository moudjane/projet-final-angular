import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetailView } from './post-detail-view';

describe('PostDetailView', () => {
  let component: PostDetailView;
  let fixture: ComponentFixture<PostDetailView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostDetailView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostDetailView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

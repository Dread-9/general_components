import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UicomponentsPage } from './uicomponents.page';

describe('UicomponentsPage', () => {
  let component: UicomponentsPage;
  let fixture: ComponentFixture<UicomponentsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UicomponentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

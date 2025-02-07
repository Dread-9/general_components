import { Component, OnInit } from '@angular/core';
import { IonicComponent } from 'src/app/models/componentMenu.models';
import { ComponentsService } from 'src/app/service/components.service';

@Component({
  selector: 'app-uicomponents',
  templateUrl: './uicomponents.page.html',
  styleUrls: ['./uicomponents.page.scss'],
  standalone: false,
})
export class UicomponentsPage implements OnInit {
  appPages!: IonicComponent[];

  constructor(private componentService: ComponentsService) {}

  ngOnInit() {
    this.componentService.getComponentes().subscribe((data) => {
      this.appPages = data;
    });
  }
}

import { Component } from '@angular/core';
import { Components } from './models/components.models';
import { ComponentsService } from './service/components.service';
import { IonicComponent } from './models/componentMenu.models';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  appPages!: IonicComponent[];

  constructor(private componentService: ComponentsService) {}

  ngOnInit() {
    this.componentService.getComponentes().subscribe((data) => {
      this.appPages = data;
    });
  }
}

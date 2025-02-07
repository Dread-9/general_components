import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-component',
  templateUrl: './component.page.html',
  styleUrls: ['./component.page.scss'],
  standalone: false,
})
export class ComponentPage implements OnInit {
  componentId: string | null = null;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.componentId = this.route.snapshot.paramMap.get('id');
    console.log('ID del componente:', this.componentId);
  }

}

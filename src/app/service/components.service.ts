import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Components } from '../models/components.models';
import { IonicComponent } from '../models/componentMenu.models';

@Injectable({
  providedIn: 'root'
})
export class ComponentsService {
  private apiUrl = 'https://67a62569510789ef0dfa89ee.mockapi.io/api/component';

  constructor(private http: HttpClient) { }

  getComponentes(): Observable<IonicComponent[]> {
    return this.http.get<IonicComponent[]>(this.apiUrl);
  }
}

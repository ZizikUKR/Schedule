import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetAllToDoView } from '../models/get-all-to-do-view';
import { UpdateToDoView } from '../models/update-to-do-view';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  readonly rootUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public getAll(): Observable<GetAllToDoView> {
    return this.http.get<GetAllToDoView>(this.rootUrl + 'toDo/getAll');
  }

  public update(item: UpdateToDoView): Observable<boolean> {
    return this.http.put<boolean>(this.rootUrl + 'toDo/update', item);
  }

}

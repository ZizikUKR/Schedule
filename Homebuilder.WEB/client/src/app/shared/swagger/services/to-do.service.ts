/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { GetAllToDoView } from '../models/get-all-to-do-view';
import { UpdateToDoView } from '../models/update-to-do-view';
@Injectable({
  providedIn: 'root',
})
class ToDoService extends __BaseService {
  static readonly GetAllPath = '/api/ToDo/GetAll';
  static readonly UpdatePath = '/api/ToDo/Update';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
  GetAllResponse(): __Observable<__StrictHttpResponse<GetAllToDoView>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/ToDo/GetAll`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GetAllToDoView>;
      })
    );
  }
  /**
   * @return Success
   */
  GetAll(): __Observable<GetAllToDoView> {
    return this.GetAllResponse().pipe(
      __map(_r => _r.body as GetAllToDoView)
    );
  }

  /**
   * @param view undefined
   * @return Success
   */
  UpdateResponse(view?: UpdateToDoView): __Observable<__StrictHttpResponse<boolean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = view;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/ToDo/Update`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return (_r as HttpResponse<any>).clone({ body: (_r as HttpResponse<any>).body === 'true' }) as __StrictHttpResponse<boolean>
      })
    );
  }
  /**
   * @param view undefined
   * @return Success
   */
  Update(view?: UpdateToDoView): __Observable<boolean> {
    return this.UpdateResponse(view).pipe(
      __map(_r => _r.body as boolean)
    );
  }
}

module ToDoService {
}

export { ToDoService }

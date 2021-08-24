import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Topping } from '../models/topping.model';
import {environment} from '../../../environments/environment';

@Injectable()
export class ToppingsService {
  url: string = environment.url + ':' + environment.port;

  constructor(private http: HttpClient) {}

  getToppings(): Observable<Topping[]> {
    return this.http
      .get<Topping[]>(`${this.url}/api/toppings`)
      .pipe(catchError((error: any) => throwError([])));
      // .pipe(catchError((error: any) => throwError([])));
  }
}

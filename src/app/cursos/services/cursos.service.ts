import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

import { Curso } from '../models';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  private readonly API = '/assets/cursos.json';

  constructor(private httpCLient: HttpClient) {}

  list() {
    return this.httpCLient.get<Curso[]>(this.API).pipe(
      first(),
      delay(5000),
      tap((cursos) => console.log(cursos))
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

import { Curso } from '../models';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  private readonly API = 'api/cursos';

  constructor(private httpCLient: HttpClient) {}

  list() {
    return this.httpCLient.get<Curso[]>(this.API).pipe(
      first(),
      tap((cursos) => console.log(cursos))
    );
  }
}

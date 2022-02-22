import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Curso } from '../models';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  constructor(private httpCLient: HttpClient) {}

  list(): Curso[] {
    return [
      {
        _id: '1',
        nome: 'Angular',
        categoria: 'front-end',
      },
    ];
  }
}

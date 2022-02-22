import { Component, OnInit } from '@angular/core';

import { Curso } from '../models';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
})
export class CursosComponent implements OnInit {
  cursos: Curso[] = [
    {
      _id: '1',
      nome: 'Angular',
      categoria: 'front-end',
    },
  ];
  displayedColumns = ['nome', 'categoria'];

  constructor() {}

  ngOnInit(): void {}
}

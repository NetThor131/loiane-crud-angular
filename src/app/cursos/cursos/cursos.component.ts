import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Curso } from '../models';
import { CursosService } from './../services';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
})
export class CursosComponent implements OnInit {
  cursos$: Observable<Curso[]>;
  displayedColumns = ['nome', 'categoria'];

  constructor(private cursosService: CursosService) {
    this.cursos$ = this.cursosService.list();
  }

  ngOnInit(): void {}
}

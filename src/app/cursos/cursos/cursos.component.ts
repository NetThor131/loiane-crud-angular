import { Component, OnInit } from '@angular/core';

import { Curso } from '../models';
import { CursosService } from './../services';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
})
export class CursosComponent implements OnInit {
  cursos: Curso[] = [];
  displayedColumns = ['nome', 'categoria'];

  constructor(private cursosService: CursosService) {}

  ngOnInit(): void {
    this.cursos = this.cursosService.list();
  }
}

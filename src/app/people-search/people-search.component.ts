import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-search',
  templateUrl: './people-search.component.html',
  styleUrls: ['./people-search.component.css'],
})
export class PeopleSearchComponent implements OnInit {
  people = [
    {
      name: 'Anderson Lopes',
      city: 'Fortaleza',
      state: 'CE',
      status: true,
    },
    {
      name: 'Francisco Pereira',
      city: 'Manaus',
      state: 'AM',
      status: false,
    },
    {
      name: 'Anna Maria',
      city: 'Teresina',
      state: 'PI',
      status: false,
    },
    {
      name: 'Antônio de Sousa',
      city: 'Campina Grande',
      state: 'PB',
      status: true,
    },
    {
      name: 'Andressa da Silva',
      city: 'São Paulo',
      state: 'SP',
      status: true,
    },
    {
      name: 'Alessandra de Castro',
      city: 'Belo Horizonte',
      state: 'MG',
      status: true,
    },
    {
      name: 'Maria Lopes',
      city: 'Natal',
      state: 'RN',
      status: false,
    },
    {
      name: 'João Batista',
      city: 'Goiânia',
      state: 'GO',
      status: true,
    },
    {
      name: 'Yasmin Freitas',
      city: 'Porto Velho',
      state: 'AC',
      status: true,
    },
    {
      name: 'Marcos Antonio',
      city: 'Rio de Janeiro',
      state: 'RJ',
      status: true,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

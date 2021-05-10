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
      status: 'Active',
    },
    {
      name: 'Francisco Pereira',
      city: 'Manaus',
      state: 'AM',
      status: 'Inactive',
    },
    {
      name: 'Anna Maria',
      city: 'Teresina',
      state: 'PI',
      status: 'Inactive',
    },
    {
      name: 'Antônio de Sousa',
      city: 'Campina Grande',
      state: 'PB',
      status: 'Active',
    },
    {
      name: 'Andressa da Silva',
      city: 'São Paulo',
      state: 'SP',
      status: 'Active',
    },
    {
      name: 'Alessandra de Castro',
      city: 'Belo Horizonte',
      state: 'MG',
      status: 'Active',
    },
    {
      name: 'Maria Lopes',
      city: 'Natal',
      state: 'RN',
      status: 'Inactive',
    },
    {
      name: 'João Batista',
      city: 'Goiânia',
      state: 'GO',
      status: 'Active',
    },
    {
      name: 'Yasmin Freitas',
      city: 'Porto Velho',
      state: 'AC',
      status: 'Active',
    },
    {
      name: 'Marcos Antonio',
      city: 'Rio de Janeiro',
      state: 'RJ',
      status: 'Active',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

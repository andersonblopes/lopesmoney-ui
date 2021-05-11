import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-launch-search',
  templateUrl: './launch-search.component.html',
  styleUrls: ['./launch-search.component.css'],
})
export class LaunchSearchComponent implements OnInit {
  launches = [
    {
      type: 'DESPESA',
      description: 'Compra de pão',
      createDate: new Date(2021, 1, 30),
      payDate: new Date(2021, 1, 31),
      price: 4.35,
      client: 'Bakery',
    },
    {
      type: 'RECEITA',
      description: 'Recebíveis',
      createDate: new Date(2021, 3, 12),
      payDate: new Date(2021, 4, 12),
      price: 4525.35,
      client: 'Tesouraria',
    },
    {
      type: 'RECEITA',
      description: 'Venda de mercadorias',
      createDate: new Date(2021, 1, 2),
      payDate: new Date(2021, 4, 2),
      price: 7602.0,
      client: 'Carrefour Supermarket',
    },
    {
      type: 'RECEITA',
      description: 'Juros de applicação bancária',
      createDate: new Date(2021, 1, 1),
      payDate: new Date(2021, 5, 30),
      price: 455.9,
      client: 'Elaine Lopes',
    },
    {
      type: 'DESPESA',
      description: 'Compra de descartáveis',
      createDate: new Date(2020, 12, 30),
      payDate: new Date(2021, 4, 13),
      price: 45.39,
      client: 'Anderson Lopes',
    },
    {
      type: 'DESPESA',
      description: 'Energia Elétrica',
      createDate: new Date(2021, 1, 2),
      payDate: new Date(2021, 2, 1),
      price: 256.12,
      client: 'Anderson Lopes',
    },
    {
      type: 'DESPESA',
      description: 'Compra de material de expediente',
      createDate: new Date(2021, 1, 30),
      payDate: new Date(2021, 5, 12),
      price: 235.35,
      client: 'Helena Lopes',
    },
    {
      type: 'RECEITA',
      description: 'Venda de imóvel',
      createDate: new Date(2021, 1, 30),
      payDate: new Date(2021, 1, 30),
      price: 23896.91,
      client: 'Helena Lopes',
    },
    {
      type: 'DESPESA',
      description: 'Combustível',
      createDate: new Date(2021, 4, 30),
      payDate: new Date(2021, 5, 1),
      price: 2350.15,
      client: 'Helena Lopes',
    },
    {
      type: 'DESPESA',
      description: 'Compra de água Mineral',
      createDate: new Date(2021, 2, 3),
      payDate: new Date(2021, 2, 3),
      price: 40.25,
      client: 'Elaine Lopes',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

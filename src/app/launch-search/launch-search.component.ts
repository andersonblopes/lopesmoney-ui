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
      createDate: '30/01/2021',
      payDate: '31/01/2021',
      price: 4.35,
      client: 'Bakery',
    },
    {
      type: 'RECEITA',
      description: 'Recebíveis',
      createDate: '12/03/2021',
      payDate: '12/04/2021',
      price: 4525.35,
      client: 'Tesouraria',
    },
    {
      type: 'RECEITA',
      description: 'Venda de mercadorias',
      createDate: '02/01/2021',
      payDate: '02/04/2021',
      price: 7602.0,
      client: 'Carrefour Supermarket',
    },
    {
      type: 'RECEITA',
      description: 'Juros de applicação bancária',
      createDate: '01/01/2021',
      payDate: '30/05/2021',
      price: 455.9,
      client: 'Elaine Lopes',
    },
    {
      type: 'DESPESA',
      description: 'Compra de descartáveis',
      createDate: '30/12/2020',
      payDate: '13/04/2021',
      price: 45.39,
      client: 'Anderson Lopes',
    },
    {
      type: 'DESPESA',
      description: 'Energia Elétrica',
      createDate: '02/01/2021',
      payDate: '01/02/2021',
      price: 256.12,
      client: 'Anderson Lopes',
    },
    {
      type: 'DESPESA',
      description: 'Compra de material de expediente',
      createDate: '30/01/2021',
      payDate: '12/05/2021',
      price: 235.35,
      client: 'Helena Lopes',
    },
    {
      type: 'RECEITA',
      description: 'Venda de imóvel',
      createDate: '30/01/2021',
      payDate: '30/01/2021',
      price: 23896.91,
      client: 'Helena Lopes',
    },
    {
      type: 'DESPESA',
      description: 'Combustível',
      createDate: '30/04/2021',
      payDate: '01/05/2021',
      price: 2350.15,
      client: 'Helena Lopes',
    },
    {
      type: 'DESPESA',
      description: 'Compra de água Mineral',
      createDate: '03/02/2021',
      payDate: '03/02/2021',
      price: 40.25,
      client: 'Elaine Lopes',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

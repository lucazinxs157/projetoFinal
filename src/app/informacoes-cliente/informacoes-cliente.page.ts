import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-informacoes-cliente',
  templateUrl: './informacoes-cliente.page.html',
  styleUrls: ['./informacoes-cliente.page.scss'],
})
export class InformacoesClientePage implements OnInit {
  nome: string;
  idade: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.nome = params.nome;
      this.idade = params.idade;
    });
  }
}
z
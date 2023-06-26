import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.page.html',
  styleUrls: ['./cadastro-cliente.page.scss'],
})
export class CadastroClientePage implements OnInit {
  nome!: string;
  idade!: number;

  constructor(private router: Router) {}

  ngOnInit() {}

  salvarCliente() {
    this.router.navigate(['informacoes-cliente'], {
      queryParams: { nome: this.nome, idade: this.idade },
    });
  }
}

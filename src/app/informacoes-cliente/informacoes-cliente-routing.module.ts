import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformacoesClientePage } from './informacoes-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: InformacoesClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformacoesClientePageRoutingModule {}

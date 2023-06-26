import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformacoesClientePageRoutingModule } from './informacoes-cliente-routing.module';

import { InformacoesClientePage } from './informacoes-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformacoesClientePageRoutingModule
  ],
  declarations: [InformacoesClientePage]
})
export class InformacoesClientePageModule {}

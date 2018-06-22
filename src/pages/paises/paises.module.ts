import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaisesPage } from './paises';
import { PaisesService } from '../../services/paises_service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    PaisesPage,
  ],
  imports: [
    IonicPageModule.forChild(PaisesPage),
    HttpClientModule
  ],
  providers: [
    PaisesService    
  ]
})
export class PaisesPageModule {}

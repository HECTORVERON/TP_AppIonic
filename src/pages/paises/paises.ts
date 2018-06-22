import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PaisesService } from '../../services/paises_service';

@IonicPage()
@Component({
  selector: 'page-paises',
  templateUrl: 'paises.html',
})
export class PaisesPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public _paises: PaisesService
  ) {
    //obtener los valores solicitados
    this._paises.get();
  }

}

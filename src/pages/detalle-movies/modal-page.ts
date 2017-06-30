import {ViewController} from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  templateUrl: './modal-image.html'
})
export class ModalPage {

  constructor(private viewCtrl: ViewController) {
  }

  dismiss(data) {
    this.viewCtrl.dismiss(data);
  }

}
import { Component } from '@angular/core';
import { RangeCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}
valorRange=0;
valorRangeDois=0;
tiposImc=''
alertButtons=['ok'];
valorImc=0;
medidasRadioFinal=''


onIonChangeDois(ev:RangeCustomEvent){
  this.valorRangeDois=parseInt(ev.detail.value.toString());
}
onIonChange(ev:RangeCustomEvent){
  this.valorRange=parseInt(ev.detail.value.toString());
}
verificasImc(){
this.valorRangeDois=this.valorRangeDois/100;

this.valorImc = this.valorRange / (this.valorRangeDois * this.valorRangeDois)

if (this.valorImc < 18.5) {
  this.tiposImc = 'Abaixo do peso';
  } else if (this.valorImc >= 18.5 && this.valorImc <= 24.9) {
  this.tiposImc = 'Peso saudável';
  } else if (this.valorImc >= 25 && this.valorImc <= 29.9) {
  this.tiposImc = 'Sobrepeso';
  } else {
  this.tiposImc = 'Obesidade';
  }
}

}








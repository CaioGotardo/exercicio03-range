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
medidasIniciais='';
alertButtons=['ok'];

medidasRadioFinal=''
medidasFinais:number = 0 ;


onIonChange(ev:RangeCustomEvent){
  this.valorRange=parseInt(ev.detail.value.toString());
}

fazerConversao(){
  if(this.medidasIniciais=='m' || this.medidasRadioFinal === 'km' ){
  this.medidasFinais=this.valorRange/1000;
    }
    else if(this.medidasIniciais=='m' || this.medidasRadioFinal === 'm'){
      this.medidasFinais=this.valorRange;

    }
    else if(this.medidasIniciais=='m' || this.medidasRadioFinal === 'milhas'){
      this.medidasFinais=this.valorRange * 0.00062137;

    }
    else if(this.medidasIniciais === 'km'|| this.medidasRadioFinal === 'km'){
this.valorRange=this.valorRange;

    }else if(this.medidasIniciais === 'km'  || this.medidasRadioFinal === 'm'){
      this.medidasFinais=this.valorRange*1000;
    }else if(this.medidasIniciais === 'km' || this.medidasRadioFinal === 'milhas')
{
  this.medidasFinais==this.valorRange * 0,6214;
}    }
}








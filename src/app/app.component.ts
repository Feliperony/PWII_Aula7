import { Component } from '@angular/core';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'has-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World!! Viaja Net.Com @ Naqule piqueee. e taligado só os forte pra ta fazendo esse curso.';
  foto = 'favicon.ico';
  peso = 100;
  altura = 80;
  
  IMC(){
    alert(this.peso / (this.altura * this.altura));
  }

  exibir(){
    alert(this.title);
  }
}


import { Component } from '@angular/core';

@Component({
  selector: 'has-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World!! Viaja Net.Com @ Naqule piqueee. e taligado só os forte pra ta fazendo esse curso.';
  foto = 'favicon.ico';

  exibir(){
    alert(this.title);
  }
}


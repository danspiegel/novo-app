import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
 
@Component({
  selector: 'app-meu-componente',
  templateUrl: './meu-componente.component.html',
  styleUrls: ['./meu-componente.component.css'],
  //template: '<h1>Hello World!</h1>',
  //styles: ['h1{color:blue;}']
})
export class MeuComponenteComponent implements OnInit {

  @Input() nome;
  @Output() nomeChange = new EventEmitter();
  @Input() nomeExterno;
  @Output() myClick = new EventEmitter();

  myStyle = '';

  get mySafeStyle() {
    return this.sanitizer.bypassSecurityTrustStyle(this.myStyle);
  }

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  onChangeName() {
    this.nomeChange.emit(this.nome);
  }

}

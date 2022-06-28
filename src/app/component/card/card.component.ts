import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from 'src/app/interface/Personaje';
import { MatButton } from '@angular/material/button';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent{

  @Input() personaje!:Personaje

  constructor() { }



}

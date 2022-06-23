import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {

  constructor() { }

  filter(e:any)
  {
    const search:string = e.target.value;
    console.log({search})
  }


}

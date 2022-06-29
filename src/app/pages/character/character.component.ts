import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import {HttpClient} from '@angular/common/http'
import { Personaje } from 'src/app/interface/Personaje';
@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  personajes: Personaje[]|undefined
  filtropersonaje: Personaje[]|undefined
  constructor(private character:CharacterService) { }

  ngOnInit() {
   this.getcharacter()
  }

  getcharacter(){

    this.character.getCharacter().
    subscribe((data)=>{
    
      this.personajes =  data.map(({char_id,name , nickname , img,status,ocuppation}:Personaje)=>{
        return{
          char_id: char_id,
          name: name,
          nickname: nickname,
          img: img,
          status: status,
          ocuppation: ocuppation
        };
      })
      this.filtropersonaje= this.personajes
      console.table(this.personajes)
    })

  }
  
  filter(e:any)
  {
    const search:string = e.target.value;
    this.personajes = this.filtropersonaje?.filter(({name}:Personaje)=>{
      return name.toLocaleLowerCase().includes(search.toLowerCase());
    })
    console.log({search})
  }
}

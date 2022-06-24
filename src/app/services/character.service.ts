import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private apiurl='https://www.breakingbadapi.com/api'

  constructor(
    private http:HttpClient,
  ) { }

  getCharacter(){
    return this.http.get<any>(`${this.apiurl}/characters`)
  }
}

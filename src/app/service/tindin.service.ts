import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Game } from '../model/game';
import { ObjectTindin } from '../model/tindin-game';

@Injectable({
  providedIn: 'root'
})
export class TindinService {

  constructor(private http:HttpClient) { }

  recuperObjectoTindin(pesquisa?:string):Observable<ObjectTindin>{
    return this.http.get<ObjectTindin>(`${environment.APIURL}/games?title=${pesquisa?pesquisa:''}`);
    
  }

  buscarPorId(id:any):Observable<Game>{
    return this.http.get<Game>(`${environment.APIURL}/games/${id}`);
  }
  
}

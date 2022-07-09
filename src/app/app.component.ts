import { Component, OnInit } from '@angular/core';
import { Game } from './model/game';
import { ObjectTindin } from './model/tindin-game';
import { TindinService } from './service/tindin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  

  ngOnInit():void{
    
  }

  constructor(){}
}

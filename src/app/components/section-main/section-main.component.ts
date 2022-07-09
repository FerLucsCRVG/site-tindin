import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/model/game';
import { ObjectTindin } from 'src/app/model/tindin-game';
import { TindinService } from 'src/app/service/tindin.service';

@Component({
  selector: 'app-section-main',
  templateUrl: './section-main.component.html',
  styleUrls: ['./section-main.component.css']
})
export class SectionMainComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    
  }

}

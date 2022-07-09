import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Game } from 'src/app/model/game';
import { TindinService } from 'src/app/service/tindin.service';

@Component({
  selector: 'app-details-game',
  templateUrl: './details-game.component.html',
  styleUrls: ['./details-game.component.css']
})
export class DetailsGameComponent implements OnInit {

  game?:any;
  gameOn?:Game;

  constructor(private route:ActivatedRoute,private tindinService:TindinService) { 
    this.pegarGame()
  }

  ngOnInit(): void {
    
  }

  pegarGame(){
    const id = this.route.snapshot.paramMap.get('_id')
    this.tindinService.buscarPorId(id).subscribe({
      next:(game) => {
        this.game = game
        console.log(this.game)
      }
    })
  }

  mudarFoto(url:string){
    document.getElementById('photo-1')?.setAttribute('src',url)
  }

}

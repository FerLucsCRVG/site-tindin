import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from 'src/app/model/game';
import { ObjectTindin } from 'src/app/model/tindin-game';
import { TindinService } from 'src/app/service/tindin.service';

@Component({
  selector: 'app-list-games',
  templateUrl: './list-games.component.html',
  styleUrls: ['./list-games.component.css']
})
export class ListGamesComponent implements OnInit {
  mostrarMaisJogos = 'mostrar-jogos'
  mmjVoltar = true;
  escrita = 'VIEW MORE PRODUCTS';
  games?:Game[]
  objetoTindin?:ObjectTindin;
  pesquisa?:string;
  

  constructor(private tindinService:TindinService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    let params;
    if(params = this.pegaParametroDaUrl()){
      this.recuperarObjetoTindin(params);
    }else{
      this.recuperarObjetoTindin();
    }
    
  }

  recuperarObjetoTindin(pesquisa?:string){
    this.tindinService.recuperObjectoTindin(pesquisa).subscribe({
      next:(tindin) => {
        this.objetoTindin = tindin;
        this.games = this.objetoTindin.games
        this.pesquisa = pesquisa;
        console.log(this.games)
      }
    })
  }

  recuperarObjetoTindin1(pesquisa?:string){
    alert(pesquisa);
  }

  mostrarMais():void{
    if(this.mmjVoltar){
      document.getElementById('listagem-games')?.classList.add(this.mostrarMaisJogos);
      this.escrita = 'VOLTAR'
      this.mmjVoltar = !this.mmjVoltar;
    }else{
      document.getElementById('listagem-games')?.classList.remove(this.mostrarMaisJogos);
      this.escrita = 'VIEW MORE PRODUCTS'
      this.mmjVoltar = !this.mmjVoltar;
    }
  }

  pegaParametroDaUrl(){
    return this.route.snapshot.paramMap.get('title')
  }

}

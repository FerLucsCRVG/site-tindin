import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header-site',
  templateUrl: './header-site.component.html',
  styleUrls: ['./header-site.component.css']
})
export class HeaderSiteComponent implements OnInit {
  form!:FormGroup;
  @Output() realizaPesquisa = new EventEmitter<string>();
  temLogin?:boolean;

  constructor(private formBuilder:FormBuilder,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      pesquisar:''
    })
    this.temLogin = this.verificarAcessoLogin();
  }

  pesquisarJogo():void{
    let nomeDaPesquisa = this.formToModel()
    this.realizaPesquisa.emit(nomeDaPesquisa);
  }

  formToModel(){
    let dados = this.form.getRawValue() as any
    return dados.pesquisar;
  }

  verificarAcessoLogin(){
    let url = this.route.snapshot.toString()
    return url.includes('login')
  }

}

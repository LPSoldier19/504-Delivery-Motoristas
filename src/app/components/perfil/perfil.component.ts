import { Component, OnInit } from '@angular/core';
import { MotoristasService } from 'src/app/services/motoristas.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  motorista:any=localStorage.getItem('userID');
  motoristaActual:any;

  constructor(public motoristasService:MotoristasService) { }

  ngOnInit(): void {

    this.motoristasService.informacionMotorista(this.motorista).subscribe(
      res=>{
        this.motoristaActual=res;
      },
      error=>{
        console.log(error);
      }
    )

  }

}

import { Component, OnInit } from '@angular/core';
import { PedidosService } from 'src/app/services/pedidos.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  constructor(private pedidosService:PedidosService) { }

  pedidos:any=[];
  motorista:any=localStorage.getItem('userID');

  ngOnInit(): void {
    this.pedidosService.verPedidosMotorista(this.motorista).subscribe(
      res=>{
        this.pedidos=res;
        console.log(this.pedidos);
      },
      error=>{
        console.log(error);
      }
    )
  }

}

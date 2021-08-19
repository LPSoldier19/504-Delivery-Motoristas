import { Component, OnInit } from '@angular/core';
import { MotoristasService } from 'src/app/services/motoristas.service';
import { PedidosService } from 'src/app/services/pedidos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  motoristaActual:any=localStorage.getItem('userID');
  pedidosSinMotoristas:any=[];
  infoMotorista:any;
  motoristaEntrega:Object = {};

  idPedido:any = localStorage.getItem('idPedido');

  constructor(private pedidosService:PedidosService, private motoristasService:MotoristasService, private router:Router) { }

  ngOnInit(): void {

    this.pedidosService.verPedidosSinMotoristas().subscribe(
      res=>{
        this.pedidosSinMotoristas=res;
      },
      error=>{
        console.log(error);
      }
    )

    this.motoristasService.informacionMotorista(this.motoristaActual).subscribe(
      res=>{
        this.infoMotorista=res;
      },
      error=>{
        console.log(error);
      }
    )

  }

  entregarPedido(idPedido:any){

    this.motoristaEntrega = {
      nombreMotorista: `${this.infoMotorista.nombre} ${this.infoMotorista.apellido}`,
      telefono: this.infoMotorista.telefono,
      idMotorista: this.infoMotorista._id,
    }

    var informacionMotorista={
      motorista:this.motoristaEntrega
    }

    this.pedidosService.realizarEntregaPedido(idPedido, informacionMotorista).subscribe(
      res=>{
        localStorage.setItem('idPedido', idPedido);
        this.router.navigate(['/entrega']);
      },
      error=>{
        console.log(error);
      }
    )

  }

}

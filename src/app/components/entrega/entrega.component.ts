import { AfterViewInit, Component, OnInit } from '@angular/core';
import {faUtensils, faCheckCircle, faBan, faMotorcycle, faClipboardCheck} from '@fortawesome/free-solid-svg-icons';
import { Loader } from '@googlemaps/js-api-loader';
import { PedidosService } from 'src/app/services/pedidos.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-entrega',
  templateUrl: './entrega.component.html',
  styleUrls: ['./entrega.component.css']
})

export class EntregaComponent implements OnInit, AfterViewInit {

  idPedido:any = localStorage.getItem('idPedido');
  pedido:any = {};
  direccion:any = {};
  cliente:any = {};
  producto:any = {};
  
  faUtensils=faUtensils;
  faCheckCircle=faCheckCircle;
  faBan = faBan;
  faMotorcicle = faMotorcycle;
  faClipboardCheck = faClipboardCheck

  lat:number = this.direccion.lat;
  lng:number = this.direccion.lng;


  private map!: google.maps.Map;

  constructor(private pedidosService: PedidosService, private router:Router) {}

  ngOnInit(): void {
    this.pedidosService.verInformacionPedido(this.idPedido).subscribe(
      res=>{
        this.pedido=res;
        this.direccion=this.pedido.direccion;
        this.cliente=this.pedido.cliente;
        this.producto=this.pedido.producto;
      },
      error=>{
        console.log(error);
      }
    )
  }

  ngAfterViewInit(){
    let loader = new Loader({
      apiKey: 'AIzaSyBtnSxMdTk70gFZB7XE1KAMK7Pd4je5HlU'
    });


    loader.load().then(() => {

      var location = { lat: parseFloat(this.direccion.lat), lng: parseFloat(this.direccion.lng) }

      this.map = new google.maps.Map(document.getElementById("map")!, {
        center: location,
        zoom: 15,
        gestureHandling: "greedy"
      })


      const marker = new google.maps.Marker({
        position: location,
        map: this.map
      });
    })
  }
  enRestaurante(){
    this.pedidosService.enRestaurante(this.idPedido).subscribe(
      res=>{
        console.log('El motorista esta en el Restaurante');
        window.location.reload();
      },
      error=>{
        console.log(error);
      }
    )
  }

  enCamino(){
    this.pedidosService.enCamino(this.idPedido).subscribe(
      res=>{
        console.log('El motorista esta en camino');
        window.location.reload();
      },
      error=>{
        console.log(error);
      }
    )
  }

  pedidoEntregado(){
    this.pedidosService.entregado(this.idPedido).subscribe(
      res=>{
        console.log('Pedido Entregado');
        localStorage.removeItem('idPedido');
        this.router.navigate(['/home']);
      },
      error=>{
        console.log(error);
      }
    )  
  }
  pedidoCancelado(){
    this.pedidosService.cancelado(this.idPedido).subscribe(
      res=>{
        console.log('Pedido Cancelado');
        localStorage.removeItem('idPedido');
        this.router.navigate(['/home']);

      },
      error=>{
        console.log(error);
      }
    ) 
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor(private http:HttpClient, private router:Router) { }

  verPedidosSinMotoristas():Observable<any>{
    return this.http.get('http://localhost:8888/pedidos/pedidosSinMotoristas', {});
  }

  realizarEntregaPedido(idPedido:any,motorista:Object){
    return this.http.put(`http://localhost:8888/pedidos/${idPedido}/pedidoAsignado`, motorista);
  }

  verInformacionPedido(idPedido:any):Observable<any>{
    return this.http.get(`http://localhost:8888/pedidos/${idPedido}/informacion`,{});
  }

  enRestaurante(idPedido:any):Observable<any>{
    return this.http.put(`http://localhost:8888/pedidos/${idPedido}/restaurante`, {});
  }

  enCamino(idPedido:any):Observable<any>{
    return this.http.put(`http://localhost:8888/pedidos/${idPedido}/caminoEntrega`, {});
  }

  entregado(idPedido:any):Observable<any>{
    return this.http.put(`http://localhost:8888/pedidos/${idPedido}/entregado`, {});
  }

  cancelado(idPedido:any):Observable<any>{
    return this.http.put(`http://localhost:8888/pedidos/${idPedido}/cancelado`, {});
  }

  verPedidosMotorista(idPedido:any):Observable<any>{
    return this.http.get(`http://localhost:8888/pedidos/${idPedido}/pedidosMotorista`, {});
  }





}

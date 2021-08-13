import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { MotoristasService } from './motoristas.service';

@Injectable({
  providedIn: 'root'
})


export class TokenInterceptorService implements HttpInterceptor {

  constructor(private motoristaService: MotoristasService){}

  intercept(req:any, next:any){
    const tokenizeReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.motoristaService.getToken()}`
      }
    })
    return next.handle(tokenizeReq);
  }

}

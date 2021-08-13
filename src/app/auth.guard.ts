import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { Observable } from 'rxjs';
import { MotoristasService } from './services/motoristas.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private motoristaService:MotoristasService, private router:Router){
  }

  canActivate(): boolean{
    if (this.motoristaService.loggedIn()){
      return true
    }

    this.router.navigate(['/']);
    return false
  }
  
}

import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { MotoristasService } from '../../services/motoristas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  formularioRegistro = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    correo: new FormControl('', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    genero: new FormControl('', [Validators.required]),
    fechaNacimiento: new FormControl('', [Validators.required]),
    telefono: new FormControl('', [Validators.required]),
    identidad: new FormControl('', [Validators.required]),
    estado: new FormControl('')
  });

  get correo(){
    return this.formularioRegistro.get('correo') as FormControl;
  }

  get password(){
    return this.formularioRegistro.get('password') as FormControl;
  }

  get telefono(){
    return this.formularioRegistro.get('telefono') as FormControl;
  }

  get identidad(){
    return this.formularioRegistro.get('identidad') as FormControl;
  }

  constructor(private title:Title, private motoristaService:MotoristasService, private router:Router) { }

  ngOnInit(): void {
    this.title.setTitle('504 Delivery - Registro');
  }


  guardarNuevoMotorista(){
    this.formularioRegistro.patchValue({
      estado: "Pendiente",
      fechaNacimiento: new DatePipe('en-US').transform(this.formularioRegistro.get('fechaNacimiento')?.value, 'dd/MM/yyyy')
    })
    // console.log(new DatePipe('en-US').transform(this.formularioRegistro.get('fechaNacimiento')?.value, 'dd/MM/yyyy'));
    if(this.formularioRegistro.valid){
      this.motoristaService.registrar(this.formularioRegistro.value).subscribe(
        res=>{
          this.router.navigate(['/'])
        },
        error=>{
          console.log(error);
        }
      )
    }
    else{
      alert('Todos los campos son obligatorios (o información no rellenada con formato mostrado)');
    }
  }

}

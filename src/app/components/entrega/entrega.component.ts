import { Component, OnInit } from '@angular/core';
import {faUtensils, faCheckCircle, faBan, faMotorcycle, faClipboardCheck} from '@fortawesome/free-solid-svg-icons';
import { Loader } from '@googlemaps/js-api-loader';
 
@Component({
  selector: 'app-entrega',
  templateUrl: './entrega.component.html',
  styleUrls: ['./entrega.component.css']
})

export class EntregaComponent implements OnInit {
  
  faUtensils=faUtensils;
  faCheckCircle=faCheckCircle;
  faBan = faBan;
  faMotorcicle = faMotorcycle;
  faClipboardCheck = faClipboardCheck

  lat:number = 0;
  lng:number = 0;

  
  getClientLocation(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position=>{
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude
        console.log(this.lat);
        console.log(this.lng);
      })
    }
  }

  private map!: google.maps.Map;

  // constructor(public locationService: LocationService) {

  // }

  ngOnInit(): void {
    let loader = new Loader({
      apiKey: 'AIzaSyBtnSxMdTk70gFZB7XE1KAMK7Pd4je5HlU'
    })

    this.getClientLocation();

    loader.load().then(() => {

      var location = { lat: this.lat, lng: this.lng }

      this.map = new google.maps.Map(document.getElementById("map")!, {
        center: location,
        zoom: 15,
        gestureHandling: "greedy"
      })

      const marker = new google.maps.Marker({
        position: location,
        map: this.map,
        title: `${location}`
      });
    })
  }

  enRestaurante(){
    alert('Motorista en el restaurante');
  }

  enCamino(){
    
  }
  pedidoEntregado(){
    
  }
  pedidoCancelado(){
    
  }

}

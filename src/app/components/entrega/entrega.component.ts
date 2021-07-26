import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../services/location.service';
import {faUtensils, faCheckCircle, faBan, faMotorcycle, faClipboardCheck} from '@fortawesome/free-solid-svg-icons';
 
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

  title = 'geolocation';
  latitude: any;
  longitude: any;

  // label = {
  //   color: 'red',
  //   text: 'Marcador'
  // }

  constructor(public locationService: LocationService) {

  }

  ngOnInit(): void {
    let location = this.getLocation();
  }

  getLocation() {
    this.locationService.getPosition().then(pos => {
      this.latitude = pos.lat;
      this.longitude = pos.lng;
    });
  }

  // position = {
  //   latitudeApp: this.latitude,
  //   longitudeApp: this.longitude
  // };

}

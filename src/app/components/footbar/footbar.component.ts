import { Component, OnInit } from '@angular/core';
import {faHome, faBoxOpen, faTruckLoading, faUser, faBox} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footbar',
  templateUrl: './footbar.component.html',
  styleUrls: ['./footbar.component.css']
})
export class FootbarComponent implements OnInit {

  faHome = faHome;
  faBoxOpen = faBoxOpen;
  faTruckLoading = faTruckLoading;
  faUser = faUser;
  faBox = faBox;

  constructor() { }

  ngOnInit(): void {
  }

}

import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl'; 



@Component({
  selector: 'app-full-screen-page',
  templateUrl: './full-screen-page.component.html',
  styleUrl: './full-screen-page.component.css'
})
export class FullScreenPageComponent implements AfterViewInit {
  
  @ViewChild('map') divMap!: ElementRef;
  
  ngAfterViewInit(): void {
    if(!this.divMap)return;
    const map = new mapboxgl.Map({
      accessToken: 'pk.eyJ1IjoiZ2VybWFuYnZiIiwiYSI6ImNseHA1ZWR2YzBsMTQya29qd2wzYmJhcDAifQ.qwU-aEqa9jVO4L4Qmu_faQ',
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });   
  }
  
}

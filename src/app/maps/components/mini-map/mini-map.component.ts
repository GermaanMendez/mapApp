import { AfterViewInit, Component, ElementRef, Input, ViewChild, input } from '@angular/core';
import * as mapboxgl from 'mapbox-gl'; 

@Component({
  selector: 'map-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrl: './mini-map.component.css'
})
export class MiniMapComponent implements AfterViewInit{

  @Input()lngLat?:[number,number];
  @ViewChild('map') divMap!: ElementRef;
  
  
  ngAfterViewInit(): void {
    if(!this.lngLat)throw ("No lnglat error");
    const map = new mapboxgl.Map({
      accessToken: 'pk.eyJ1IjoiZ2VybWFuYnZiIiwiYSI6ImNseHA1ZWR2YzBsMTQya29qd2wzYmJhcDAifQ.qwU-aEqa9jVO4L4Qmu_faQ',
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: 13, // starting zoom
    });   

  new mapboxgl.Marker()
  .setLngLat(this.lngLat)
  .addTo(map)
  }
}

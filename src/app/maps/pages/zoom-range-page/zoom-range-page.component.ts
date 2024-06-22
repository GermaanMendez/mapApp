import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl'; 


@Component({
  selector: 'app-zoom-range-page',
  templateUrl: './zoom-range-page.component.html',
  styleUrl: './zoom-range-page.component.css'
})
export class ZoomRangePageComponent implements AfterViewInit , OnDestroy{
  ngOnDestroy(): void {
    this.map?.remove();
  }

  @ViewChild('map') divMap!: ElementRef;
  public zoom : number = 10;
  public map?:mapboxgl.Map;
  public zoomMin : number = 2;
  public zoomMax : number = 18;
  public currentLngLat : mapboxgl.LngLat = new mapboxgl.LngLat(-57.53323358136434, -33.69718135161057);
  
  ngAfterViewInit(): void {
    if(!this.divMap)return;
    this.map = new mapboxgl.Map({
      accessToken: 'pk.eyJ1IjoiZ2VybWFuYnZiIiwiYSI6ImNseHA1ZWR2YzBsMTQya29qd2wzYmJhcDAifQ.qwU-aEqa9jVO4L4Qmu_faQ',
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentLngLat, // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
    });   
    this.mapListener();
  }


  mapListener(){
    if(!this.map)throw "Mapa no inicializado"
    this.map.on('zoom', (ev) => {
      this.zoom = this.map!.getZoom();
    });

    this.map.on('move',(ev)=>{
      this.currentLngLat = this.map!.getCenter();
      const {lng , lat} = this.currentLngLat;
    })
  }

  onZoomChange(value: string) {
    this.zoom = +value;
    this.updateZoom();
  }
  onZoomIn(){
    if(this.zoom+1 > this.zoomMax) return;
    this.zoom = this.zoom+1;
    this.updateZoom();
  }
  onZoomOut(){
   if(this.zoom-1 < this.zoomMin)return;
    this.zoom = this.zoom-1;
    this.updateZoom();
  }

  updateZoom(){
    this.map?.setZoom(this.zoom);
  }

}

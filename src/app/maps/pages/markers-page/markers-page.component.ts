import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl'; 
import { json } from 'stream/consumers';

interface MarkerAndColor{
  color:string,
  marker:mapboxgl.Marker
}
interface PlainMarker {
  color:string,
  lngLat:number[]
}

@Component({
  selector: 'app-markers-page',
  templateUrl: './markers-page.component.html',
  styleUrl: './markers-page.component.css'
})
export class MarkersPAgeComponent implements AfterViewInit {

  @ViewChild('map') divMap!: ElementRef;
  public map?:mapboxgl.Map;
  public currentLngLat : mapboxgl.LngLat = new mapboxgl.LngLat(-57.53323358136434, -33.69718135161057);
  public markers:MarkerAndColor[]=[];

  ngAfterViewInit(): void {
    if(!this.divMap)return;
    this.map = new mapboxgl.Map({
      accessToken: 'pk.eyJ1IjoiZ2VybWFuYnZiIiwiYSI6ImNseHA1ZWR2YzBsMTQya29qd2wzYmJhcDAifQ.qwU-aEqa9jVO4L4Qmu_faQ',
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentLngLat, // starting position [lng, lat]
      zoom: 13, // starting zoom
    });   
    this.readFromLocalStorage();
    // const markerHtml = document.createElement('div');
    // markerHtml.innerHTML = 'Rodo';
  }

  createMarker(){
    if(!this.map)return;
    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
    const lngLat = this.map?.getCenter();
    this.addMarker(lngLat,color);
  }

  addMarker(lngLat:mapboxgl.LngLat,color:string){
    if(!this.map)return;

    const marker = new mapboxgl.Marker({
      color:color,
      draggable:true
    })
    .setLngLat(lngLat)
    .addTo(this.map);
    this.markers.push({color:color,marker:marker});
    this.saveToLocalStorage();

    marker.on('dragend',()=>{
      this.saveToLocalStorage();
    });
  }

  deleteMarker(i:number){
    this.markers[i]?.marker?.remove();
    this.markers?.splice(i,1);
    console.log(this.markers);
    this.saveToLocalStorage();
  }

  flyTo(marker:mapboxgl.Marker){
    this.map?.flyTo({
      zoom:15,
      center:marker.getLngLat(),
    })
  }

  saveToLocalStorage(){
    const plainMarkers:PlainMarker[] = this.markers.map((marker)=>{
      return {
        color:marker.color,
        lngLat:marker.marker.getLngLat().toArray(),
      }
    })
    localStorage.setItem('plainMarkers',JSON.stringify(plainMarkers))
  }

  readFromLocalStorage(){
    const plainMarkersString = localStorage.getItem('plainMarkers') ?? '[]';
    if(plainMarkersString.length==0)return;
    const plainMarkers:PlainMarker[]= JSON.parse(plainMarkersString);

    plainMarkers.forEach(plainMarker => {
      const [lng , lat] = plainMarker.lngLat;
      const coords = new mapboxgl.LngLat(lng,lat);
      this.addMarker(coords,plainMarker.color)
    });
  }
}

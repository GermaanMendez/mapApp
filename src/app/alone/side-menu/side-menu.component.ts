import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface MenuItem {
  name:string
  route:string;
}

@Component({
  standalone:true,
  imports:[RouterLink,CommonModule],
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

  public menuItems : MenuItem[] = [
    {route:'/maps/fullscreen',name:'FullScreen'},
    {route:'/maps/zoom-screen',name:'ZoomRange'},
    {route:'/maps/markers',name:'Markers'},
    {route:'/maps/properties',name:'Properties'},
    {route:'/alone',name:'Alone Page'}
  ]

}

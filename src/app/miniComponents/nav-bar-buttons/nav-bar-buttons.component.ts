import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar-buttons',
  templateUrl: './nav-bar-buttons.component.html',
  styleUrls: ['./nav-bar-buttons.component.scss']
})
export class NavBarButtonsComponent implements OnInit {
  @Input() display = "block";
  isActive: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    setTimeout( ()=>{
      this.isActive = true;
      console.log("true");
    }, 1000)
  }
  updateAdventure(){
    console.log("Update Adventure Called");
  }

}

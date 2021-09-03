import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  imageName:string = "img1"
  imgNumber:number = 1;
  constructor() {
    setInterval(()=>{
      this.imageName = "img" + this.imgNumber.toString();
      this.imgNumber++;
      if(this.imgNumber > 5){
        this.imgNumber = 1;
      }
    }, 7000)
  }

  ngOnInit(): void {
  }
  changeImg(){
  }
}

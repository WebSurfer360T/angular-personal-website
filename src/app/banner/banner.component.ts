import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  images = [1, 2, 3].map(() => `https://picsum.photos/1200/650?grayscale&t=${Math.random()}`);


  constructor() { }

  ngOnInit() {
  }

}
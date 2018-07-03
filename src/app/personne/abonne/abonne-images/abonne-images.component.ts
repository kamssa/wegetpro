import { Component, OnInit } from '@angular/core';

import {ImageService} from '../../../shared/service/personne/image.service';

@Component({
  selector: 'app-abonne-images',
  templateUrl: './abonne-images.component.html',
  styleUrls: ['./abonne-images.component.scss']
})
export class AbonneImagesComponent implements OnInit {

  visibleImages: any[] = [];

  constructor(private imageService: ImageService) {
    this.visibleImages = this.imageService.getImages();

  }

  ngOnInit() {
  }
}

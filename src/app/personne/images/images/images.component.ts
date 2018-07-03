import {Component, OnInit, OnChanges} from '@angular/core';
import {ImageService} from '../../../shared/service/personne/image.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {

  visibleImages: any[] = [];

  constructor(private imageService: ImageService) {
    this.visibleImages = this.imageService.getImages();

  }

  ngOnInit() {
  }

}

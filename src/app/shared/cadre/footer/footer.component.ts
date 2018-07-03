import { Component, OnInit} from '@angular/core';



@Component({
  selector: 'app-footbar',
  templateUrl: './footer.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  title = 'Pied de page';

  constructor() {

  }

  ngOnInit() {
  }


}

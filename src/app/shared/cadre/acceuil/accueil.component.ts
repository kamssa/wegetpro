import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-acceuil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  title = 'GESTION DE PROJET DE MISE EN VALEUR DES COMPETENCES';
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onAbonne() {
    this.router.navigate(['/abonne']);
  }
}

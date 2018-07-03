import {ChangeDetectorRef, Component} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {CreerMembreComponent} from './personne/membres/creer-membre/creer-membre.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(private router: Router, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public dialog: MatDialog) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }


  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  inscription() {
    this.router.navigate(['/inscription']);
  }
  login(){
    this.router.navigate(['/login']);
  }

  OnAuthentification() {
    this.router.navigate(['/creer']);
  }

  onMembres() {
    this.router.navigate(['/membres']);
  }

  onAbonnees() {
    this.router.navigate(['/abonnes']);
  }

  onAdmin() {
    this.router.navigate(['/administration']);
  }
}

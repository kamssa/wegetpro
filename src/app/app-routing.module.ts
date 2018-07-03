import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AccueilComponent} from './shared/cadre/acceuil/accueil.component';
import {MembreComponent} from './personne/membres/membre/membre.component';
import {ListeMembreComponent} from './personne/membres/liste-membre/liste-membre.component';
import {CreerMembreComponent} from './personne/membres/creer-membre/creer-membre.component';
import {DetailMembreComponent} from './personne/membres/detail-membre/detail-membre.component';
import {CreerAdminComponent} from './personne/admin/creer-admin/creer-admin.component';
import {ManageEspaceComponent} from './app/espace/manage-espace/manage-espace.component';
import {ManageMembreComponent} from './personne/membres/manage-membre/manage-membre.component';
import {ManageAbonneComponent} from './personne/abonne/manage-abonne/manage-abonne.component';
import {ManageAdministrationComponent} from './personne/admin/manage-administration/manage-administration.component';
import {InscriptionComponent} from './personne/membres/inscription/inscription.component';
import {LoginComponent} from './personne/membres/login/login.component';
import {AbonneImagesComponent} from './personne/abonne/abonne-images/abonne-images.component';


const routes: Routes = [

  {path: '', redirectTo: '/accueil', pathMatch: 'full'},
  {path: 'accueil', component: AccueilComponent},
  {path: 'espaces', component: ManageEspaceComponent},
  {path: 'membres', component: ManageMembreComponent},
  {path: 'abonnes', component: ManageAbonneComponent},
  {path: 'administration', component: ManageAdministrationComponent},
  {path: 'inscription', component: InscriptionComponent},
  {path: 'login', component: LoginComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

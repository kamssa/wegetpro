import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AccueilComponent} from './shared/cadre/acceuil/accueil.component';
import {NavbarComponent} from './shared/cadre/navbar/navbar.component';
import {
  MatButtonModule,
  MatCardModule, MatCheckboxModule,
  MatChipsModule, MatDialogModule, MatExpansionModule,
  MatIconModule,
  MatInputModule, MatListModule, MatMenuModule, MatProgressBarModule, MatRadioModule, MatSelectModule,
  MatSidenavModule, MatSnackBarModule,
  MatToolbarModule, MatTooltipModule
} from '@angular/material';
import {FooterComponent} from './shared/cadre/footer/footer.component';
import {CreerEspaceComponent} from './app/espace/creer-espace/creer-espace.component';
import {ModifEspaceComponent} from './app/espace/modif-espace/modif-espace.component';
import {ManageEspaceComponent} from './app/espace/manage-espace/manage-espace.component';
import {LoginComponent} from './personne/membres/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {CreerMembreComponent} from './personne/membres/creer-membre/creer-membre.component';

import {EditerMembreComponent} from './personne/membres/editer-membre/editer-membre.component';
import {ListeMembreComponent} from './personne/membres/liste-membre/liste-membre.component';
import {DetailMembreComponent} from './personne/membres/detail-membre/detail-membre.component';
import {ManageMembreComponent} from './personne/membres/manage-membre/manage-membre.component';
import {CreerAdminComponent} from './personne/admin/creer-admin/creer-admin.component';
import {ListeAbonneComponent} from './personne/abonne/liste-abonne/liste-abonne.component';
import {MembreComponent} from './personne/membres/membre/membre.component';
import {MembreService} from './shared/service/personne/membre/membre.service';
import {ManageAbonneComponent} from './personne/abonne/manage-abonne/manage-abonne.component';
import {ManageAdministrationComponent} from './personne/admin/manage-administration/manage-administration.component';
import {MessageService} from './shared/service/message.service';
import {InscriptionComponent} from './personne/membres/inscription/inscription.component';

import {AuthenticationService} from './shared/service/personne/membre/authentication.service';
import { AbonneDetailComponent } from './personne/abonne/abonne-detail/abonne-detail.component';
import { DetailEspaceComponent } from './app/espace/detail-espace/detail-espace.component';
import { ImagesComponent } from './personne/images/images/images.component';
import { ImagesDetailComponent } from './personne/images/images-detail/images-detail.component';
import {ImageService} from './shared/service/personne/image.service';
import { AbonneImagesComponent } from './personne/abonne/abonne-images/abonne-images.component';
import {CarouselModule} from 'primeng/primeng';
import {GrowlModule} from 'primeng/growl';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    NavbarComponent,
    FooterComponent,
    CreerEspaceComponent,
    ModifEspaceComponent,
    ManageEspaceComponent,
    LoginComponent,
    CreerMembreComponent,
    EditerMembreComponent,
    ListeMembreComponent,
    DetailMembreComponent,
    ManageMembreComponent,
    CreerAdminComponent,
    ListeAbonneComponent,
    MembreComponent,
    ManageAbonneComponent,
    ManageAdministrationComponent,
    InscriptionComponent,
    AbonneDetailComponent,
    DetailEspaceComponent,
    ImagesComponent,
    ImagesDetailComponent,
    AbonneImagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatChipsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatSelectModule,
    MatExpansionModule,
    MatChipsModule,
    MatSnackBarModule,
    MatListModule,
    MatMenuModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDialogModule,
    CarouselModule,
    GrowlModule


  ],
  entryComponents: [
    CreerMembreComponent
  ],
  providers: [MembreService, MessageService, AuthenticationService, ImageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

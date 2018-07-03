import {Component, OnInit} from '@angular/core';
import {Resultat} from '../../../shared/modeles/resultat';
import {Membres} from '../../../shared/modeles/personne/membres/membres';

import {ActivatedRoute, Router} from '@angular/router';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';

import {Observable} from 'rxjs';
import {Adresse} from '../../../shared/modeles/adresse/adresse';
import {AuthenticationService} from '../../../shared/service/personne/membre/authentication.service';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  mode: number = 0;
  membresForm: FormGroup;
  membre: Membres;
  resultat: Resultat<Membres>;
  enseignants: Membres[];
  succesMessage: string;
  selectedTitre: string;


  constructor(private authService: AuthenticationService, private route: ActivatedRoute, private  fb: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.newInit();
    return Observable.create(new Resultat(9, ['nouveau membre '], new Membres()));
  }


  onSubmit() {

    let mens: Membres;
    mens = this.convertisseur(this.membresForm);
   // let ad = new Adresse('', '', '', '', '');
   // let ens = new Membres(null, 0, '', '', '', '', '', '', '', false, '', '', '', '', '', '', '', '', ad, [], 'ME');

    this.authService.login(mens)
      .subscribe(res => {
        let jwt = res.headers.get('authorization');
        console.log(jwt);
        //  console.log(this.succesMessage);
        console.log('membre  res ajoute du suscribe', res);
      }, err => {
        this.mode = 1;
      });


    console.log('membres  ajouter avec valeur', this.membresForm.value);
    console.log('membres convertisseur ', this.convertisseur(this.membresForm));


  }

  private newInit() {
    const ad = new Adresse('', '', '', '', '');
    const ens = new Membres(null, 0, '', '', '', '', '', '', '', false, '', '', '', '', '', '', '', '', ad, [], 'ME');
    this.membresForm = this.fb.group({
      id: [ens.id],
      version: [ens.version],
      cni: [ens.cni],
      titre: [ens.titre],
      nom: [ens.nom],
      prenom: [ens.prenom],
      login: [ens.login],
      password: [ens.password],
      repassword: [ens.repassword],
      actived: [ens.actived],
      nomComplet: [ens.nomComplet],
      nomSociete: [ens.nomSociete],
      description: [ens.cni],
      diplome: [ens.diplome],
      anneExperience: [ens.anneExperience],
      statut: [ens.statut],
      specialite: [ens.specialite],
      pathPhoto: [ens.pathPhoto],
      adresse: this.fb.group({
        codePostal: [ens.adresse.codePostal],
        quartier: [ens.adresse.quartier],
        ville: [ens.adresse.ville],
        pays: [ens.adresse.pays],
        email: [ens.adresse.email],

      }),
      telephones: this.fb.array([
        this.fb.group({
          id: [null],
          version: [0],
          type: [''],
          numero: ['']

        })])
    });
  }

  ajouTelephone() {
    (<FormArray>this.membresForm.get('telephones')).push(
      this.fb.group({
        id: [null],
        version: [0],
        type: [''],
        numero: ['']

      })
    );
  }

  removeTephone(i: number) {
    (<FormArray>this.membresForm.get('telephones')).removeAt(i);
  }

  annuler() {

  }


  private convertisseur(fg: FormGroup): Membres {
    const ens = new Membres(
      fg.value['id'],
      fg.value['version'],
      fg.value['cni'],
      fg.value['titre'],
      fg.value['nom'],
      fg.value['prenom'],
      fg.value['login'],
      fg.value['password'],
      fg.value['repassword'],
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      '',
      '',
      fg.value['adresse'],
    [],
      'ME'
    );
    return ens;
  }
}

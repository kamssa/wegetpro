import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {Adresse} from '../../../shared/modeles/adresse/adresse';
import {Membres} from '../../../shared/modeles/personne/membres/membres';
import {Resultat} from '../../../shared/modeles/resultat';
import {MatDialogRef} from '@angular/material';
import {Observable} from 'rxjs';
import {MembreService} from '../../../shared/service/personne/membre/membre.service';

@Component({
  selector: 'app-creer-membre',
  templateUrl: './creer-membre.component.html',
  styleUrls: ['./creer-membre.component.scss']
})
export class CreerMembreComponent implements OnInit {


  membresForm: FormGroup;
  membre: Membres;
  resultat: Resultat<Membres>;
  enseignants: Membres[];
  succesMessage: string;
  selectedTitre: string;
  titres = [
    {libelle: 'Mlle', name: 'Mlle'},
    {libelle: 'Mme', name: 'Mme'},
    {libelle: 'Mr', name: 'Mr'}
  ];
  typeTelephones = [
    {libelle: 'mobile', name: 'mobile'},
    {libelle: 'bureau', name: 'bureau'},
    {libelle: 'domicile', name: 'domicile'}
  ];

  constructor(private membreService: MembreService, private route: ActivatedRoute, private  fb: FormBuilder, private router: Router, public dialogRef: MatDialogRef<CreerMembreComponent>) {
  }

  ngOnInit() {
    this.newInit();
    return Observable.create(new Resultat(9, ['nouveau membre '], new Membres()));
  }


  onSubmit() {

    let mens: Membres;
    mens = this.convertisseur(this.membresForm);
    this.membreService.ajoutMembre(mens)
      .subscribe(res => {
        this.succesMessage = res.messages.toString();
        console.log(this.succesMessage);
        console.log('enseignant  res ajoute', res.body);
      });


    console.log('membres form ajouter', this.membresForm.value);
    console.log('enseignant ajouter', this.convertisseur(this.membresForm));
    this.router.navigate(['/accueil']);

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
    this.dialogRef.close();
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
      fg.value['pathPhoto'],
      fg.value['adresse'],
      fg.value['telephones'],
      fg.value['ME']
    );
    return ens;
  }
}

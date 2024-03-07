import { Component } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms'

import { EtudiantService } from './etudiant.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'COURS';
  information = '';


  myForm:FormGroup;
  departements:any;
  etudiants:any;
  etudiantIdd:any;
  etudiantDeparteIdd:any;

  constructor(private service:EtudiantService, private fb:FormBuilder){
    this.myForm = this.fb.group({
      matricule:['',Validators.required],
      nom:['',Validators.required],
      prenom:['',Validators.required],
      date_naissance:['',Validators.required],
      departement:['',Validators.required],
      contact_parent:['',Validators.required],
    })
    this.getDepartements();
    this.getEtudiants();

  }

  //Lecture des departement
  getDepartements(){
    this.service.getDepartement().subscribe({
      next:(response)=>{
        console.log(response)
        this.departements = response
      },
      error:(error)=>console.log(error)
    })
  }

  //Lecture etudiant
  getEtudiants(){
    this.service.getEtudiants().subscribe({
      next:(response)=>{
        this.etudiants = response
      },
      error:(error)=>console.log(error)
    })
  }

  //Enregistrement d'un etudiant
  enregistrer(){
   
    if(this.myForm.valid){
     
      this.service.saveEtudiant(this.myForm.value).subscribe({
        next:(response)=>{
          this.information = "Etudiant Enregisterer avec succes"
          this.myForm.reset()
          this.getDepartements()
          this.getEtudiants()
        },
        error:(error)=>console.error(error)
      })
    
    }
  }

  //Detaille etudiant
  showEtudiantss(etudiantId: any) {

    this.service.showEtudiant(etudiantId).subscribe({
       next: (response) => {
          this.etudiantIdd = response;
          this.etudiantDeparteIdd = response.departement;
       },
       error: (error) => console.log(error)
    })
 }

 //Modification d'un etudiants
  editEtudiantss(){

    const id = this.etudiantIdd._id;
    const modifiedEtudiant = this.myForm.value;

    this.service.editEtudiant(id, modifiedEtudiant).subscribe({
      next: (response) => {
        this.information = "Etudiant modifier avec succès"
        this.myForm.reset()
        this.getDepartements()
        this.getEtudiants()
      },
      error: (error) => console.error("Erreur lors de la modification de l'étudiant :", error)
    });
  }

//Suppression d'etudiant
 async deleteEtudiantss(deleteEtudiantId:any){
    const confirmation = await this.service.confirm("Vous etes sur le point de supprimer cet Etudiant \netes vous sur d'effetuer la suppression");
    if(confirmation){

        this.service.deleteEtudiant(deleteEtudiantId).subscribe({
          next:(response)=>{
            this.information = 'Etudiant supprimer avec succès'
            this.myForm.reset()
            this.getDepartements()
            this.getEtudiants()
        },
        error:(error)=>console.log("Suppression non, effectuer")
              
       });

    }else{
      alert("Suppression annuler");
    }    
  }


 }//fin classe




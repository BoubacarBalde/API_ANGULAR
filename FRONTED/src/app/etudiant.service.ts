import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  constructor(private http:HttpClient) { }

  BASE_URL = "http://localhost:3000";

  getDepartement():Observable<any>{
    return this.http.get(`${this.BASE_URL}/departement/index/`)
  }

  getEtudiants():Observable<any>{
    return this.http.get(`${this.BASE_URL}/etudiant/index/`)
  }

  saveEtudiant(value:any):Observable<any>{
    return this.http.post(`${this.BASE_URL}/etudiant/create/`,value)
  }

  showEtudiant(value:any):Observable<any>{
    return this.http.get(`${this.BASE_URL}/etudiant/show/${value}`)
  }

   editEtudiant(id: string, value: any): Observable<any> {
    return this.http.patch(`${this.BASE_URL}/etudiant/edit/${id}`, value);
  }

  deleteEtudiant(value:any):Observable<any>{
    return this.http.delete(`${this.BASE_URL}/etudiant/delete/${value}`)
  }

 //Boite dialogue
  confirm(message: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      const confirmation = confirm(message);
      resolve(confirmation);
    });
  }




}

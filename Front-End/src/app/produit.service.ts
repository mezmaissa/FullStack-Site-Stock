import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Produit } from '/Users/maissamezhoud/Documents/Virtualisation/Front-End/src/app/produit';


@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  /** GET: get all the products from the server */
  getProduits() {
    console.log("GET - all")
        return this.http.get('http://localhost:8080/Produits')
      }

  /** GET: get product by id */
  getProduit(id: number) {
    console.log("GET - by id")
      const url = "http://localhost:8080/Produit/"+id.toString();
        return this.http.get(url)
      }

  /** ADD: add a new product to the server */
  addProduit(produit: Produit){
    console.log(produit);
    return this.http.post('http://localhost:8080/Ajout', produit, this.httpOptions)
  }

  /** DELETE: delete the product from the server */
  deleteProduit(id: number){
    const url = "http://localhost:8080/Delete/"+id.toString();
    console.log('DELETE')
    console.log(url)
    return this.http.get(url)
  }

  /** PUT: update the produit on the server */
  updateProduit(produit: Produit){
    console.log(produit);
  return this.http.post("http://localhost:8080/Modif", produit, this.httpOptions);
  }
}


  
 



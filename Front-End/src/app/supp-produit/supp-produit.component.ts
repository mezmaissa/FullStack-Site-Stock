import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../produit.service';
import { Produit } from '../produit';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supp-produit',
  templateUrl: './supp-produit.component.html',
  styleUrls: ['./supp-produit.component.css']
})
export class SuppProduitComponent implements OnInit {

  id : number = 1;
  produitList : any;
  durationInSeconds = 5;
  
  constructor(private produitService: ProduitService, private _snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
  }

  suppFunction(idProd: string){
    this._snackBar.openFromComponent(DeleteBarComponent, {
      duration: this.durationInSeconds * 1000,
    });
    this.id = Number(idProd)
    this.produitService.deleteProduit(this.id).subscribe(data => {this.produitList = data;});
    this.router.navigate(['/home']);
  }

}

@Component({
  selector: 'delete-bar',
  templateUrl: 'delete-bar.html',
  styles: [
    `
    .center {
      text-align: center;
    }
  `,
  ],
})
export class DeleteBarComponent {}

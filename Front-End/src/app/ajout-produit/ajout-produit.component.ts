import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../produit.service';
import { Produit } from '../produit';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router,NavigationStart} from '@angular/router';

@Component({
  selector: 'app-ajout-produit',
  templateUrl: './ajout-produit.component.html',
  styleUrls: ['./ajout-produit.component.css']
})
export class AjoutProduitComponent implements OnInit {

  constructor(private produitService: ProduitService, private _snackBar: MatSnackBar, private router: Router) { }
  produitList : any;
  durationInSeconds = 5;

  ngOnInit(): void {
  }

  ajoutFunction(name: string, price: string, stock: string){
    this._snackBar.openFromComponent(AjoutBarComponent, {
      duration: this.durationInSeconds * 1000,
    });
    const produit: Produit = { id: 0, name: name, price: Number(price) , stock: Number(stock)};
    this.produitService.addProduit(produit).subscribe(data => {this.produitList = data; });
    this.router.navigate(['/home']);
    }

}

@Component({
  selector: 'ajout-bar',
  templateUrl: 'ajout-bar.html',
  styles: [
    `
    .center {
      text-align: center;
    }
  `,
  ],
})
export class AjoutBarComponent {}

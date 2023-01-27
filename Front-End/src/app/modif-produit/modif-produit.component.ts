import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../produit.service';
import { Produit } from '../produit';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ConditionalExpr } from '@angular/compiler';
import { CommonModule } from '@angular/common'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-modif-produit',
  templateUrl: './modif-produit.component.html',
  styleUrls: ['./modif-produit.component.css']
})
export class ModifProduitComponent implements OnInit {

  durationInSeconds = 5;
  produit : any;
  btnModif = true;
  id=0;

  constructor(private produitService: ProduitService, private _snackBar: MatSnackBar, private router: Router) { }
  
  ngOnInit(): void {
  }

  modifFunction(name: string, price: string, stock: string){
    this._snackBar.openFromComponent(MajBarComponent, {
      duration: this.durationInSeconds * 1000,
    });
    const produit: Produit = { id: this.id, name: name, price: Number(price) , stock: Number(stock)};
    this.produitService.updateProduit(produit).subscribe(data => {this.produit = data;});
    this.router.navigate(['/home']);
  }

  produitFunction(id: string)
  {
    this.id = Number(id);
    this.produitService.getProduit(this.id).subscribe(data => 
      {
        this.produit = data
        if(data != null)
        {
          this.btnModif = false;
        }

      });
  }
  

}

@Component({
  selector: 'maj-bar',
  templateUrl: 'maj-bar.html',
  styles: [
    `
    .center {
      text-align: center;
    }
  `,
  ],
})
export class MajBarComponent {}

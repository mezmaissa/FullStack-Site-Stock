import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../produit.service';
import { Produit } from '../produit';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['Id', 'Nom', 'Prix', 'Stock'];
  dataSource :any;
  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {
    this.produitService.getProduits().subscribe(data => {this.dataSource = data;});
  }

 

}

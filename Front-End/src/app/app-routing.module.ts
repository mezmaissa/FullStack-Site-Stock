import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';
import { HomeComponent } from './home/home.component';
import { ModifProduitComponent } from './modif-produit/modif-produit.component';
import { SuppProduitComponent } from './supp-produit/supp-produit.component';

const routes: Routes = [
  { path: 'ajouter', component: AjoutProduitComponent },
  { path: 'supprimer', component: SuppProduitComponent },
  { path: 'modifier', component: ModifProduitComponent  },
  { path: 'home', component: HomeComponent },
   { path: '',   redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }


/*export interface Product{
id:string;
title:string;
description:string;
detail:string;
img:string[];
price:number;
contact:string;
category: string;
state:string;
city:string;
cartier:string;
avStart:number;
disponible ?:available;
}*/

export interface available{
    //si article dispo 
  dispo:boolean;
  ////type de livraison///
  type:string;
  ////fraiss de livraison
  frais ?:number;

}
/*
nom_produit:this.nom_produit,
description:this.description,
detail:this.detail,
categorie:this.categorie,
etat:this.etat,
prix:this.prix,
contact:this.contact,
ville:this.ville,
cartier:this.cartier,*/
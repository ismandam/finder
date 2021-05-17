export interface Product{
id:string;
title:string;
description:string;
img:string[];
price:number;
category: string;
state:string;
city:string;
avStart:number;
disponible:available;
}

export interface available{
    //si article dispo 
  dispo:boolean;
  ////type de livraison///
  type:string;
  ////fraiss de livraison
  frais ?:number;

}
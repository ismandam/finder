 export class interfaceItem{
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
    disponible: any [];
    //disponible ?:available;
  constructor(id:string,nom_produit:string,desc:string,detail:string,img:string[],prix:number,
    contact:string,categorie:string,etat:string,ville:string,cartier:string,start:number,dispo:boolean,feed:number,type:string){

        this.id=id;
        this.title=nom_produit;
        this.description=desc;
        this.detail=detail;
        this.img=img;
        this.price=prix;
        this.contact=contact;
        this.category=categorie;
        this.state=etat;
        this.city=ville;
        this.cartier=cartier;
        this.avStart=start;
        this.disponible=[dispo, feed,type];

       
  }
 

}
export interface available{
  //si article dispo 
dispo:boolean;
////type de livraison///
type:string;
////fraiss de livraison
frais ?:number;

}
export class InterfaceObjet{
  
    Id:string ;
    nom_prenom: string;
    num_cni: string;
    date_cni: string;
    urlimage:string[];
    contact:string;
    post_by:string;
    categorie:string;


    constructor(id:string,nom_prenom:string,num_cni:string,dat:string,img:string[],contact:string,postby:string,categorie:string)
    {
     this.Id=id;
     this.nom_prenom=nom_prenom;
     this.num_cni=num_cni;
     this.date_cni=dat;
     this.urlimage=img;
     this.contact=contact;
     this.post_by=postby;
     this.categorie=categorie;

    }


}
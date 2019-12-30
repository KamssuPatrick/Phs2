import { IMaison } from './maison.interface';


export class Maison implements IMaison{
    id: string;
    autre?: string;
    avis?: string;
    chambre?: string;
    cuisine?: string;
    etage?: string;
    parking?: string;
    prix?: string
    profilePic?: string;
    salon?: string;
    surface?: string;
    terrasse?: string;
    toilette?: string; 

    constructor(maison: IMaison){
        this.id=maison.id;
        this.autre= maison.autre;
        this.avis= maison.avis;
        this.chambre= maison.chambre;
        this.cuisine= maison.cuisine;
        this.etage= maison.etage;
        this.parking= maison.parking;
        this.prix= maison.prix
        this.profilePic= maison.profilePic;
        this.salon= maison.salon;
        this.surface= maison.surface;
        this.terrasse= maison.terrasse;
        this.toilette= maison.toilette; 
    }
}
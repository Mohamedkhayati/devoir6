import { EmailValidator } from "@angular/forms";
import { Nutritional } from "./nutritional.model";

export class Supplement {

    idSupplement? : number;
    nomSupplement? : string;
    prixSupplement? : number;
    dateCreation? : Date ;
    dosageSupplement? : Number;
    email?: String;
    nutritional! : Nutritional;

    }
    
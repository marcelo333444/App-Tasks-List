import { Component } from "@angular/core";

@Component({
    selector: "mi-componente",
    templateUrl: "./mi-componente.component.html",
})

export class MiComponente {

    public titulo: string;
    public comentario: string;
    public year: number;

    constructor() {

        this.titulo = "hola perrrrrito";
        this.comentario = "como va eso?";
        this.year = 2022;

        console.log("que hondaaa prro");
        console.log(this.titulo, this.comentario, this.year);
    }
}
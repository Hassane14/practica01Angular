import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.component.html',
  styleUrls: ['./correo.component.scss']
})
export class CorreoComponent implements OnInit {

  correo: any;
  constructor() { 
    this.correo = {
      id: "",
      titulo: "titulo de correo",
      cuerpo: "cueeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeerpo",
      emisor: "yo mismo",
      destinatario: "la persona x"
    }

  }

  ngOnInit(): void {
  }

}

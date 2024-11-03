import { Injectable } from '@angular/core';
import { Editora } from './editora'; 

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {
  private editoras: Array<Editora> = [
    { codEditora: 1, nome: "Alta Books" },
    { codEditora: 2, nome: "Bookman" },
    { codEditora: 3, nome: "Addison Wesley" },
    { codEditora: 4, nome: "Pearson" }
  ];

  getEditoras(): Array<Editora> {
    return this.editoras;
  }

  getNomeEditoras(codEditora: number): string | undefined {
    const editora = this.editoras.find(editora => editora.codEditora === codEditora);
    return editora ? editora.nome : undefined
  }

  constructor() { }
}
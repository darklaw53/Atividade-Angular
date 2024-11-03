import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  private livros: Array<Livro> = [
    { codigo: 1, codEditora: 1, 
      titulo: "Use a Cabeça!: Java", 
      resumo: "Use a Cabeça! Java é uma experiência completa de aprendizado em\nprogramação orientada a objetos (OO) e Java.", 
      autores: ["Bert Bates", "Kathy Sierra"] },
    { codigo: 2, codEditora: 2, 
      titulo: "Java, como Programar", 
      resumo: "Milhões de alunos e profissionais aprenderam programação e\ndesenvolvimento de software com os livros Deitel.", 
      autores: ["Paul Deitel", "Harvey Deitel"] },
    { codigo: 3, codEditora: 3, 
      titulo: "Core Java for the\nImpatient", 
      resumo: "Readers familiar with Horstmann's original, two-volume Core Java books\nwho are looking for a comprehensive, but condensed guide to all of the new\nfeatures and functions of Java SE 9 will learn how these new features impact\nthe language and core libraries.", 
      autores: ["Cay Horstmann"] }
  ];

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const novoCodigo = Math.max(...this.livros.map(l => l.codigo)) + 1;
    livro.codigo = novoCodigo;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const indice = this.livros.findIndex(livro => livro.codigo === codigo);
    if (indice !== -1) {
      this.livros.splice(indice, 1);
    }
  }
}
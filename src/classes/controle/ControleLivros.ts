import { Livro } from '../modelo/Livro';

const livros: Array<Livro> = [
        { 
            codigo: 1,
            codEditora: 1,
            titulo: "Pai Rico, pai Pobre",
            resumo: "A escola prepara as crianças para o mundo real? Essa é a primeira pergunta com a qual o leitor se depara neste livro. O recado é ousado e direto: boa formação e notas altas não bastam para assegurar o sucesso de alguém.",
            autores: ["Kiyosaki Robert T"] },
        { 
            codigo: 2, 
            codEditora: 2, 
            titulo: "Three Cups Of Tea", 
            resumo: "Written by a mountaineer who in 1993, after a terrifying and disastrous attempt to climb K2, drifted cold and dehydrated, into an impoverished Pakistan village in the Karakoram Mountains. It tells how moved by the inhabitants' kindness, he promised to return and build a school. It tells the story of that promise and its outcome.", 
            autores: ["Greg Mortenson"] },
        { 
            codigo: 3, 
            codEditora: 3, 
            titulo: "JavaScript: O Guia Definitivo ", 
            resumo: "Referência completa para programadores, JavaScript: O guia definitivo fornece uma ampla descrição da linguagem JavaScript básica e das APIs JavaScript do lado do cliente definidas pelos navegadores Web.", 
            autores: ["David Flanagan", "Luciana Nedel"] }
    ];

    export class ControleLivros {
        obterLivros(): Array<Livro> {
          return livros;
        }
      
        incluir(livro: Livro): void {
          const novoCodigo = livros.length > 0 ? Math.max(...livros.map(l => l.codigo)) + 1 : 1;
          livro.codigo = novoCodigo;
          livros.push(livro);
        }
      
        excluir(codigo: number): void {
          const index = livros.findIndex(l => l.codigo === codigo);
          if (index !== -1) {
            livros.splice(index, 1);
          }
        }
    }

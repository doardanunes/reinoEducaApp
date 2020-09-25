import { Component, OnInit } from '@angular/core';
import { SettingsService } from  'c:/ionic/reinoEducaApp-master/src/app/services/settings.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-memoria',
  templateUrl: './memoria.page.html',
  styleUrls: ['./memoria.page.scss'],
})
export class MemoriaPage {

  cartas = [];
  numeroDeCartas = 6;
  tamanhoDaColuna = 4;

  horaDeEsconder = 1000;

  cartaoExibido = false;

  cartaAnterior = null;
  encontrarPar = 0;

  constructor(private SettingsService: SettingsService) {
    //inicialização do jogo
    this.generateDeck();
    this.embaralharCartas();
  }


  ionViewDidEnter(){
    this.numeroDeCartas= this.SettingsService.settings.numeroDeCartas;
    this.horaDeEsconder= this.SettingsService.settings.delay;
    this.tamanhoDaColuna=this.SettingsService.getColumnSize();
    //inicialização do jogo
    this.generateDeck();
    this.embaralharCartas();


  }

// gera uma lista de pares de cartas

  generateDeck() {
    this.cartas=[];
    for (let i = 0; i < this.numeroDeCartas; i++) {
      this.cartas.push({ image: i + '.png', revealed: false });
      this.cartas.push({ image: i + '.png', revealed: false });
    }
    console.log(this.cartas);

  }

  embaralharCartas() {
    //processa o conjunto de cartas
    for (let pos in this.cartas) {
      //a carta em andamento
      let currentCard = this.cartas[pos];
      //posição aleatória dentro do jogo de cartas
      let randomPos = Math.floor(Math.random() * this.cartas.length);
      //obter nova combinação 
      this.cartas[pos] = this.cartas[randomPos];
      this.cartas[randomPos] = currentCard;
    }
    console.log(this.cartas);


  }
  escolherCarta(carta) {
    //uma unica carta mostrada ao mesmo tempo
    if (!this.cartaoExibido) {
      //mostra a carta
      carta.revealed = true;
      this.cartaoExibido = true;


      //comparação da carta foi completada em um certo tempo
      if (this.cartaAnterior && this.cartaAnterior.image == carta.image) {
        this.cartaAnterior.revealed = true;
        this.cartaoExibido=false;
        this.encontrarPar++;

      } else {

        //voltando o cartao no lugar depois de um tempo
        setTimeout(() => {
          carta.revealed = false;
          this.cartaoExibido = false;
          this.cartaAnterior = carta;
        }, this.horaDeEsconder);

      }
    }

  }

JogarDenovo(){
  this.encontrarPar = 0;
  this.cartaAnterior = null;
  this.embaralharCartas();
  this.cartas.map(
 (currentCard) => {currentCard.revealed =false;}
  );
}

}
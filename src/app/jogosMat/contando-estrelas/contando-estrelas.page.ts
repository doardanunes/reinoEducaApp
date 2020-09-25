import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contando-estrelas',
  templateUrl: './contando-estrelas.page.html',
  styleUrls: ['./contando-estrelas.page.scss'],
})
export class ContandoEstrelasPage implements OnInit {



  constructor(public alertController: AlertController, 
    private router: Router,) { }

  ngOnInit() {
  }

  public async escolhido(){
      this.Alerta('Parabéns!', 'Você acertou! Que tal continuar?');
      this.router.navigateByUrl('/cont-a');
  }

  public async naoE(){
    this.Alerta('Ops!', 'Você errou! Quer tentar mais uma vez?');
  }

  async Alerta(titulo: string, mensagem: string,) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensagem,
      buttons: ['OK']
    });

    await alert.present();
  }
}

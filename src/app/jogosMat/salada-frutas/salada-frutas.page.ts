import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-salada-frutas',
  templateUrl: './salada-frutas.page.html',
  styleUrls: ['./salada-frutas.page.scss'],
})
export class SaladaFrutasPage implements OnInit {

  resp: string = "";
  ope: string = "";
  constructor( public toastController: ToastController,
    public alertController: AlertController,
    private router: Router,) { }

  ngOnInit() {
  }

  resultado(){
    if(this.resp==""){
      this.presentToast('Não se esqueça de responder!');
    }else if(this.resp=="2"){
      this.presentToast('Parabéns, esse é o resultado!');
    }else{
      this.presentToast('Ops, você errou!');
    }
  }
  operacao(){
    if(this.ope==""){
      this.presentToast('Não se esqueça de responder!');
    }else if(this.ope=="A"){
      this.presentToast('Parabéns, esse é o resultado!');
    }else{
      this.presentToast('Ops, você errou!');
    }
  }
  proximo(){
    if(this.ope=="A" && this.resp=="2"){
      this.presentAlert('Parabéns!', 'Mostre que você sabe muito mais!', 'Vamos lá!');
      this.router.navigateByUrl('/sal-a');
    }else{
      this.presentAlert('Há algo errado', 'Por que você não tenta novamente?','Tentar novamente');
    }
  }

  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  async presentAlert(titulo: string, msg: string, bt: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: msg,
      buttons: [bt]
    });

    await alert.present();
  }
}

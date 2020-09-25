import { Component } from '@angular/core';
import { AlertController, ActionSheetController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public alertController: AlertController,

    private menu: MenuController) {}

  async presentAlert(titulo: string, corpo: string) { //Alert da história do app
    const alert = await this.alertController.create({
      header: titulo,
      message: corpo,
      buttons:  ['Vamos lá!']
    });

    await alert.present();
  }

  
 

}


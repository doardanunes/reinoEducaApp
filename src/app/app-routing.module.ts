import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./usuario/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./usuario/cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'meu-avanco',
    loadChildren: () => import('./usuario/meu-avanco/meu-avanco.module').then( m => m.MeuAvancoPageModule)
  },
  {
    path: 'contando-estrelas',
    loadChildren: () => import('./jogosMat/contando-estrelas/contando-estrelas.module').then( m => m.ContandoEstrelasPageModule)
  },
  {
    path: 'cont-a',
    loadChildren: () => import('./jogosMat/cont-a/cont-a.module').then( m => m.ContAPageModule)
  },
  {
    path: 'cont-b',
    loadChildren: () => import('./jogosMat/cont-b/cont-b.module').then( m => m.ContBPageModule)
  },
  {
    path: 'mat-index',
    loadChildren: () => import('./jogosMat/mat-index/mat-index.module').then( m => m.MatIndexPageModule)
  },
  {
    path: 'salada-frutas',
    loadChildren: () => import('./jogosMat/salada-frutas/salada-frutas.module').then( m => m.SaladaFrutasPageModule)
  },
  {
    path: 'log-index',
    loadChildren: () => import('./jogosLog/log-index/log-index.module').then( m => m.LogIndexPageModule)
  },
  {
    path: 'port-index',
    loadChildren: () => import('./jogosPort/port-index/port-index.module').then( m => m.PortIndexPageModule)
  },
  {
    path: 'sal-a',
    loadChildren: () => import('./jogosMat/sal-a/sal-a.module').then( m => m.SalAPageModule)
  },
  {
    path: 'sal-b',
    loadChildren: () => import('./jogosMat/sal-b/sal-b.module').then( m => m.SalBPageModule)
  },
  {
    path: 'sal-c',
    loadChildren: () => import('./jogosMat/sal-c/sal-c.module').then( m => m.SalCPageModule)
  },
  {
    path: 'escolha-jogadores',
    loadChildren: () => import('./jogosLog/escolha-jogadores/escolha-jogadores.module').then( m => m.EscolhaJogadoresPageModule)
  },
  {
    path: 'jogo-da-velha',
    loadChildren: () => import('./jogosLog/jogo-da-velha/jogo-da-velha.module').then( m => m.JogoDaVelhaPageModule)
  },
  {
    path: 'jogo-da-velha-solo',
    loadChildren: () => import('./jogosLog/jogo-da-velha-solo/jogo-da-velha-solo.module').then( m => m.JogoDaVelhaSoloPageModule)
  },
  {
    path: 'memoria',
    loadChildren: () => import('./jogosLog/memoria/memoria.module').then( m => m.MemoriaPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

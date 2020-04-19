import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {CustomPreloadingStrategyService} from "./custom-preloading-strategy.service";


const routes: Routes = [
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(module => module.AboutModule),
  },
  {
    path: 'contacts',
    loadChildren: () => import('./contacts/contacts.module').then(module => module.ContactsModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: CustomPreloadingStrategyService})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

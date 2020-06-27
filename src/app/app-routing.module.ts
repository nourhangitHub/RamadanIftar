import { HowtoPageComponent } from './howto-page/howto-page.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { AuthGuard } from './guards/auth.guard';
import { EventComponent } from './event/event.component';
import { VideosComponent } from './videos/videos.component';
import { NotauthGuard } from './guards/notauth.guard';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'login',
    canActivate: [NotauthGuard] ,
    loadChildren: () => import('./anyonemodule/anyone.module').then(m=>m.AnyoneModule)
  },
  { path: 'how-to', component: HowtoPageComponent},
  {
    path: 'account',
    canActivate: [AuthGuard] ,
    loadChildren: () => import('./account/accountmodule.module').then(m=>m.AccountmoduleModule)
  },
  { path: 'eventpage', component: EventComponent},
  { path: 'videos', component: VideosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

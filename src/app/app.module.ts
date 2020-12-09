import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsListComponent } from './news/news-list/news-list.component';
import { NewsComponent } from './news/news/news.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { OpenNewsComponent } from './news/open-news/open-news.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './shared/auth-guard';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent,
    NewsComponent,
    LoginComponent,
    OpenNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
      { path: 'news-list', component: NewsListComponent, canActivate: [AuthGuard] },
      { path: 'open-news', component: OpenNewsComponent, canActivate: [AuthGuard] },
      { path: '**', component: NotFoundComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

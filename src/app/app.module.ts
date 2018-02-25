import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

// Other dependencies;
import { SqrtPipe } from './app.sqrt';
import { AuthUser } from './authuser/authuser.component';
import { GraphQLModule } from './graphql.module';


@NgModule({
  declarations: [
    AppComponent,
    SqrtPipe,
    AuthUser,

  ],
  imports: [
    GraphQLModule,
  
    BrowserModule,
    RouterModule.forRoot([
    {
      path: 'authuser',
      component:AuthUser
    }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

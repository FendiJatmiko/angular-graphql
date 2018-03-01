import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
// Other dependencies;
import { SqrtPipe } from './app.sqrt';
import { AuthuserComponent } from './authuser/authuser.component';
import { GraphQLModule } from './graphql.module';


@NgModule({
  declarations: [
    AppComponent,
    SqrtPipe,
    AuthuserComponent,

  ],
  imports: [
    GraphQLModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot([
    {
      path: 'authuser',
      component:AuthuserComponent
    }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

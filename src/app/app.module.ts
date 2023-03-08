import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import {MaterialModule} from '../material.module';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { OpenAiPromptComponent } from './open-ai-prompt/open-ai-prompt.component';

import { RouterModule } from '@angular/router';
import { AngularDefaultComponent } from './angular-default/angular-default.component';
import { OpenAiGrammerComponent } from './open-ai-grammer/open-ai-grammer.component';

@NgModule({
  declarations: [
    AppComponent,
    OpenAiPromptComponent,
    AngularDefaultComponent,
    OpenAiGrammerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'home', component: AngularDefaultComponent},
      {path: 'open-ai-prompt', component: OpenAiPromptComponent},
      {path: 'open-ai-grammar', component: OpenAiGrammerComponent},
      {path: '**', redirectTo: '/home'},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

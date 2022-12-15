import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { DirectiveComponent } from './directive/directive.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { AttriComponent } from './attri/attri.component';
import { HooksComponent } from './hooks/hooks.component';
import { DirassignComponent } from './dirassign/dirassign.component';
import { BindingComponent } from './binding/binding.component';
// import { SimpleformComponent } from './simpleform/simpleform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ReactiveFormAssignmentComponent } from './reactive-form-assignment/reactive-form-assignment.component';




@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    DirectiveComponent,
    NgswitchComponent,
    AttriComponent,
    HooksComponent,
    DirassignComponent,
    BindingComponent,
    // SimpleformComponent,
    ReactiveformComponent,
    ReactiveFormAssignmentComponent,
  
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

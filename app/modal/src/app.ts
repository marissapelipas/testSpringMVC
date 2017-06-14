//our root app component
import {Component, NgModule, VERSION} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {AppComponent} from './app.component';
import {ModalComponent} from './modal.component';


@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, ModalComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
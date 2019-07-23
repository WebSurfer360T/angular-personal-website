import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatRadioModule, MatCheckboxModule, MatIconModule } from '@angular/material';
import { ThemakerComponent } from './themaker/themaker.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    ThemakerComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatRadioModule,
    MatIconModule,
    MatButtonModule, MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    MatCardModule,
    MatRadioModule,
    MatButtonModule, MatCheckboxModule,
  ]
})
export class AppModule { }

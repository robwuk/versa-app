import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FlexLayoutModule} from "@angular/flex-layout";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { BillboardMainComponent } from './billboard-main/billboard-main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { DimensionsComponent } from './dimensions/dimensions.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { ColoursComponent } from './colours/colours.component';
import { TrimsComponent } from './trims/trims.component';
import { DetailsComponent } from './details/details.component';
import { HighlightDirective } from './highlight.directive';
import { InteriorBillboardComponent } from './interior-billboard/interior-billboard.component';
import { VersaTextComponent } from './versa-text/versa-text.component';
import { BillboardBottomComponent } from './billboard-bottom/billboard-bottom.component';
import { FooterComponent } from './footer/footer.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { OffersButtonComponent } from './offers-button/offers-button.component';



@NgModule({
  declarations: [
    AppComponent,
    BillboardMainComponent,
    NavbarComponent,
    HeaderComponent,
    DimensionsComponent,
    LayoutsComponent,
    ColoursComponent,
    TrimsComponent,
    DetailsComponent,
    HighlightDirective,
    InteriorBillboardComponent,
    VersaTextComponent,
    BillboardBottomComponent,
    FooterComponent,
    ContactFormComponent,
    OffersButtonComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FontAwesomeModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

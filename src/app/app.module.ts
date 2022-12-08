import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { DetailComponent } from './pages/detail/detail.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RelativeDataComponent } from './core/components/relative-data/relative-data.component';


@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent, HeaderComponent, FooterComponent, DetailComponent, RelativeDataComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgxChartsModule,BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

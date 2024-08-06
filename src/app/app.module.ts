import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SectionHeadingComponent } from '../shared/component/sectionheading/sectionheading.component';
import {
  AngularIcon,
  AppIcon,
  AssemblerIcon,
  DialIcon,
  UserIcon,
} from '../shared/svgComponent';
import { CommonModule } from '@angular/common';
import { LevelPipe } from '../pipes/custom.pipe';
import { AboutComponent, ContactComponent, LandingComponent } from '../section';
import { ReactiveFormsModule } from '@angular/forms';
import { NavigationBar } from '../shared/component/navigation/navigation.component';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { StoreModule } from '@ngrx/store';
import { LanguageReducers } from '../store/reducers';
import { DropdownDirective } from '../directives/dropdown.directive';
import { DataService } from '../service/data.service';

const components = [
  SectionHeadingComponent,
  AppComponent,
  LandingComponent,
  NavigationBar,
  AboutComponent,
  ContactComponent,
];
const directives = [DropdownDirective];
const pipes = [LevelPipe];
const icons = [UserIcon, AssemblerIcon, AngularIcon, AppIcon, DialIcon];

@NgModule({
  declarations: [...components, ...icons, ...directives, ...pipes],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({
      languagex: LanguageReducers,
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => new TranslateHttpLoader(http),
        deps: [HttpClient],
      },
    }),
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class PortfolioApp {}

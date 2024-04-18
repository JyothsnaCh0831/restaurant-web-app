import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'contact-us', component: ContactUsComponent },
];
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'gastronomia-cipo';
    items!: MenuItem[];

    ngOnInit() {
        this.items = [
            {
                label:'Inicio',
                icon:'pi pi-fw pi-home',
                routerLink:'./inicio'
            },
            {
                label:'Productos',
                icon:'pi pi-fw pi-apple',
                routerLink:'./productos'
            },
            {
                label:'Fotos',
                icon:'pi pi-fw pi-images',
                routerLink:'./fotos'
            },
            {
                label:'Nosotros',
                icon:'pi pi-fw pi-users',
                routerLink:'./nosotros'
            },
            {
                label:'Contactos',
                icon:'pi pi-fw pi-phone',
                routerLink:'./contactos'
            }
        ];
    }
}

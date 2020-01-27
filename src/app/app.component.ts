import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { FCM } from '@ionic-native/fcm/ngx';
import { Router } from '@angular/router'

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    public appPages = [
        {
            title: 'Weather',
            url: '/home',
            icon: 'cloudy-night'
        },
        {
            title: 'Trees',
            url: '/trees',
            icon: 'leaf'
        },
        {
            title: 'Log Book',
            url: '/logbook',
            icon: 'book'
        },
        {
            title: 'List',
            url: '/list',
            icon: 'list'
        }
    ];

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private fcm: FCM,
        private router: Router,
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();


            this.fcm.getToken().then(token => {
                console.log("Token", token);
            })

            this.fcm.onTokenRefresh().subscribe(data => {
                console.log("refresh", data);
                console.log("Somethin different");
            });

            this.fcm.onNotification().subscribe(data => {
                console.log(data);
                if (data.wasTapped) {
                    console.log("Recieved in background");
                } else {
                    console.log("Recieved in Foreground");
                }
            })
        });
    }
}

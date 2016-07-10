import { Component } from '@angular/core'
import { Hero } from './hero'
import { ClickMeComponent } from './click-me.component'
import { ClickMe2Component } from './click-me2.component'
import { keyUpComponent_v1, keyUpComponent_v2, keyUpComponent_v3, keyUpComponent_v4 } from './keyup.component'
import { LoopBackComponent } from './loop-back.component'

@Component ({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [
        ClickMeComponent,
        ClickMe2Component,
        keyUpComponent_v1,
        keyUpComponent_v2,
        keyUpComponent_v3,
        keyUpComponent_v4,
        LoopBackComponent
    ]
})

export class AppComponent {
    title = 'Tour of heroes';
    heroes = [
        new Hero(1, 'Windstorm'),
        new Hero(13, 'Bombasto'),
        new Hero(15, 'Magneta'),
        new Hero(20, 'Tornado')
    ];
    myHero = this.heroes[0];
}
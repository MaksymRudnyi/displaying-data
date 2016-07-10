import { Component } from '@angular/core'

@Component({
    selector: 'click-me',
    template: `
        <button (click)="onClickMe()">Click me!</button>
        <p>{{clickMessage}}</p>
    `
})

export class ClickMeComponent {
    clickMessage = '';
    onClickMe () {
        this.clickMessage = 'You are my hero!'
    }
}
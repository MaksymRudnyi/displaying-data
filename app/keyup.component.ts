import { Component } from '@angular/core'

@Component ({
    selector: 'key-up1',
    template: `
        <input (keyup)="onKey($event)"/>
        <p>{{values}}</p>
    `
})
export class keyUpComponent_v1{
    values = '';
    //onKey(event: any){
    //    this.values += event.target.value + ' | ';
    //}

    onKey(event: KeyboardEvent){
        this.values += (<HTMLInputElement>event.target).value + ' | ';
    }
}

////////////////////////

@Component ({
    selector: 'key-up2',
    template: `
        <input #box (keyup)="onKey(box.value)"/>
        <p>{{values}}</p>
    `
})
export class keyUpComponent_v2{
    values = '';
    onKey (value: string){
        this.values += value + ' | '
    }
}

////////////////////////

@Component ({
    selector: 'key-up3',
    template: `
        <input #box (keyup.enter)="values=box.value"/>
        <p>{{values}}</p>
    `
})
export class keyUpComponent_v3{
    values = '';
}

////////////////////////

@Component ({
    selector: 'key-up4',
    template: `
        <input #box (keyup.enter)="values=box.value" (blur)="values=box.value"/>
        <p>{{values}}</p>
    `
})
export class keyUpComponent_v4{
    values = '';
}
import {Component,Prop,h } from '@stencil/core';

@Component({
    tag:'my-map',
    styleUrl:'my-map.css',
    shadow: true,
})
export class MyMap{
    @Prop()
    reader: string

    render(){
        return(
            <div>
                <p>This is {this.reader} map</p>
            </div>)
        }
}

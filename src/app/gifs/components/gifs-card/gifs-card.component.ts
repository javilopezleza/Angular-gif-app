import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './gifs-card.component.html',

})
export class GifsCardComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    if ( !this.gif ) throw new Error('Gif property requiered');
  }

  @Input()
  public gif!: Gif;



}

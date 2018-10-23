import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Instrument } from './instrument';
import { InstrumentsService } from './instruments.service';

@Component({
  selector: 'grid',
  templateUrl: './grid.component.html',
  providers: [InstrumentsService],
  styles:[`
    .collection { border: 0px solid; }
    .capitalize::first-letter { text-transform: uppercase; }
    .descriptionImage {
      height: 400px!important;
      position:absolute;
      top:0;
      bottom:0;
      margin:auto;
      left:0;
    }
    #wrap{
      content: "";
      display: inline-block;
      height: 100%;
      vertical-align: middle;
    }
    #wrap {
        list-style:none;
        behavior: expression(
            function(t){
                t.insertAdjacentHTML('afterBegin','<span class="frame_before"></span>');
                t.runtimeStyle.behavior = 'none';
            }(this)
        );
    }
    .inline-icon {
       vertical-align: bottom;
       font-size: 18px !important;
    }
    .enlarge{
      line-height: 2.5rem;
    }
  `]
})

export class GridComponent {

  instruments:Instrument[];
  instrument:Instrument;
  imgPath:string = "/instrumentsmusicals/assets/"
  imgPathLocal:string = "/assets/"

  article_id:number = 0;

  constructor(private instrumentService : InstrumentsService){
    this.instruments = instrumentService.getAllInstruments();
  }

  ngOnInit() {
    this.instrument = this.instruments[0];
    this.article_id = 0;
  }

  updateDescription(id){
    this.instrument = this.instruments[id];
    this.article_id = this.instrument.article_id;
  }

}

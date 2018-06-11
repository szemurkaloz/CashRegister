import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { IdoTartam } from "../shared/ido-tartam";

@Component({
  selector: 'app-datum-megadas',
  templateUrl: './datum-megadas.component.html',
  styleUrls: ['./datum-megadas.component.scss']
})
export class DatumMegadasComponent implements OnInit, OnDestroy {

  @Output() putRingOnIt: EventEmitter<any>;
  idoTartam: IdoTartam;

  constructor() { this.putRingOnIt = new EventEmitter(); }

  ngOnInit(){
  }

  ngOnDestroy() {
    this.putRingOnIt.unsubscribe();
  }

  onSubmit(form: any): void {
    console.log("you submitted value", form);
    this.idoTartam.kezd = form.dateofstarting;
    this.idoTartam.vége = form.dateofending;
    this.putRingOnIt.emit(IdoTartam);
    }

}

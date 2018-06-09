import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-datum-megadas',
  templateUrl: './datum-megadas.component.html',
  styleUrls: ['./datum-megadas.component.scss']
})
export class DatumMegadasComponent implements OnInit {

  @Output() putRingOnIt: EventEmitter<string>;

  constructor() { }

  ngOnInit() {
  }

  onClik(): void {
    this.putRingOnIt.emit("oh oh oh");
    }

}

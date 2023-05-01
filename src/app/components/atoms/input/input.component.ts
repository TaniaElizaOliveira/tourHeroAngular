import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor() { }
  @Input() inputStyle = ''
  @Output() handlerValue : EventEmitter<any> = new EventEmitter();

  handler(event:any) {
    this.handlerValue.emit(event)
  }
  ngOnInit(): void {
  }

}

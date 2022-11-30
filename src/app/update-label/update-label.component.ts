import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Label } from '../model/label.model';

@Component({
  selector: 'app-update-label',
  templateUrl: './update-label.component.html',
  styleUrls: ['./update-label.component.css']
})
export class UpdateLabelComponent implements OnInit {

  @Input()
  label!: Label;

  @Output()
  labelUpdated = new EventEmitter<Label>();

  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit() de UpdateLabelComponent", + this.label);
  }

  saveLabel() {
    this.labelUpdated.emit(this.label);
  }

}

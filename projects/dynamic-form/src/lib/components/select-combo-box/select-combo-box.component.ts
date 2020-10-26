import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlConfig } from '../../models/control.interface';

@Component({
  selector: 'app-select-combo-box',
  templateUrl: './select-combo-box.component.html',
  styleUrls: ['./select-combo-box.component.css']
})
export class SelectComboBoxComponent implements OnInit {

  control: ControlConfig;
  group: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}

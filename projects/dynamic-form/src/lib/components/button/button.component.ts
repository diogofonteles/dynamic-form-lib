import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlConfig } from '../../models/control.interface';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  control: ControlConfig;
  group: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}

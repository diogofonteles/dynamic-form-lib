import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlConfig } from '../../models/control.interface';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  control: ControlConfig;
  group: FormGroup;
  constructor() {}
  ngOnInit() {}
}

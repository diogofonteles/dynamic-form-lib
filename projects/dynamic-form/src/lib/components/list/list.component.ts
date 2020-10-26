import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlConfig } from '../../models/control.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  control: ControlConfig;
  group: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}

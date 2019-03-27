import { Component, OnInit, Input } from '@angular/core';
import {Show} from '../../models/show';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.sass']
})
export class SeasonsComponent implements OnInit {
  @Input() show: Show;
  constructor() { }

  ngOnInit() {
  }

}

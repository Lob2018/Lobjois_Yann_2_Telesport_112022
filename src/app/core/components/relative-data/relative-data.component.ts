import { Component, Input, OnInit } from '@angular/core';
import { RelativeData } from '../../models/relative-data.model';

@Component({
  selector: 'app-relative-data',
  templateUrl: './relative-data.component.html',
  styleUrls: ['./relative-data.component.scss'],
})
export class RelativeDataComponent {
  @Input() relativeData!: RelativeData;
}

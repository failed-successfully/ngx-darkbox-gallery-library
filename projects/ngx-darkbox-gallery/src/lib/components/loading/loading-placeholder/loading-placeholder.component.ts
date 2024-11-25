import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'loading-placeholder',
    templateUrl: './loading-placeholder.component.html',
    styleUrls: ['./loading-placeholder.component.scss'],
    standalone: false
})
export class LoadingPlaceholderComponent implements OnInit {

  @Input()
  placeholderHeight: string;

  @Input()
  placeholderWidth: string;

  constructor() { }

  ngOnInit(): void {
  }
}

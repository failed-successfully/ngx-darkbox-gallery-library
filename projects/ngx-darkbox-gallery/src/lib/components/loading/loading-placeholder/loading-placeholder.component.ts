import { Component, Input, OnInit } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
    selector: 'loading-placeholder',
    templateUrl: './loading-placeholder.component.html',
    styleUrls: ['./loading-placeholder.component.scss'],
    imports: [NgStyle]
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

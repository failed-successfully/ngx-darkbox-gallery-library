import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-svg-loader',
  templateUrl: './svg-loader.component.html',
  styleUrls: ['./svg-loader.component.scss']
})
export class SvgLoaderComponent implements OnInit {

  @Input()
  loaderType;

  constructor() { }

  ngOnInit(): void {
  }
}

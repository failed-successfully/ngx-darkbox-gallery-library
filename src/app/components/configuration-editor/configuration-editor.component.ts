import { Component, OnInit } from '@angular/core';
import { Configuration } from 'projects/ngx-darkbox-gallery/src/public-api';

@Component({
  selector: 'app-configuration-editor',
  templateUrl: './configuration-editor.component.html',
  styleUrls: ['./configuration-editor.component.scss']
})
export class ConfigurationEditorComponent implements OnInit {


  currentConfiguration: Configuration;

  constructor() { }

  ngOnInit(): void {
  }
}

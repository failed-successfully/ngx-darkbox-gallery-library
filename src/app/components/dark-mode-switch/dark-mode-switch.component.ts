import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-dark-mode-switch',
    templateUrl: './dark-mode-switch.component.html',
    styleUrls: ['./dark-mode-switch.component.scss'],
    imports: [FormsModule]
})
export class DarkModeSwitchComponent implements OnInit {

  darkModeEnabled: boolean;

  constructor(private renderer: Renderer2) {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    // Call the initialization with the OS default
    this.onDarkModeChanged(prefersDarkScheme.matches);
  }

  ngOnInit(): void {
  }

  /**
   * Function which enables/disables the dark mode
   * @param darkModeEnabled Whether the dark mode is enabled or not
   */
  onDarkModeChanged(darkModeEnabled: boolean): void {
    this.darkModeEnabled = darkModeEnabled;
    if (darkModeEnabled) {
      this.renderer.addClass(document.body, 'dark-theme');
    } else {
      this.renderer.removeClass(document.body, 'dark-theme');
    }
  }
}

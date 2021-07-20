import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  public isShow = false;
  public isDark = false;
  public isBgWhite: Boolean = false;

  constructor() {
    this.checkThemeStatus();
  }

  checkThemeStatus(): void {
    if (localStorage.getItem('ThemeStatus') === undefined) {
      localStorage.setItem('ThemeStatus', 'false');
      this.isDark = false;
    }

    if (localStorage.getItem('ThemeStatus') === 'true') {
      this.isDark = true;
    } else {
      this.isDark = false;
    }
  }

  toLight(): void {
    localStorage.setItem('ThemeStatus', 'false');
    this.checkThemeStatus();
  }

  toDark(): void {
    localStorage.setItem('ThemeStatus', 'true');
    this.checkThemeStatus();
  }

  toOrange(): void {
    localStorage.setItem('ThemeStatus', 'true');
    this.checkThemeStatus();
  }
}

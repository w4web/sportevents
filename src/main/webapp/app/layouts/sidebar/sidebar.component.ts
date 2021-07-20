import { Component, OnInit } from '@angular/core';
import { AUTO_STYLE, animate, state, style, transition, trigger } from '@angular/animations';
import { CommonService } from 'app/shared/services/common.service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

const DEFAULT_DURATION = 300;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('collapse', [
      state('true', style({ height: AUTO_STYLE, visibility: AUTO_STYLE })),
      state('false', style({ height: '0', visibility: 'hidden' })),
      transition('false => true', animate(DEFAULT_DURATION + 'ms ease-in')),
      transition('true => false', animate(DEFAULT_DURATION + 'ms ease-out')),
    ]),
  ],
})
export class SidebarComponent implements OnInit {
  sidebarData = [
    {
      title: 'Search',
      icon: 'fas fa-search',
      page: '/search',
    },
    {
      title: 'Dashboard',
      icon: 'fas fa-home',
      page: '/dashboard',
    },
    {
      title: 'Users',
      icon: 'fas fa-users',
      page: '/users',
    },
    {
      title: 'Calendar',
      icon: 'far fa-calendar',
      page: '/calendar',
    },
    {
      title: 'Setting',
      icon: 'fas fa-cog',
      page: '/setting',
    },
  ];
  level1 = '';
  level2 = '';

  constructor(private router: Router, public commonService: CommonService, public translate: TranslateService) {
    translate.setDefaultLang('English');
  }

  onToggle(text: any): void {
    if (this.level1 === text) {
      this.level1 = '';
    } else {
      this.level1 = text;
    }
  }

  closeSidebar(): void {
    if (window.innerWidth < 1024) {
      this.commonService.isShow = false;
    }
  }

  redirectTo(uri: string, id: number | undefined): void {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => this.router.navigate([uri, id]));
  }

  ngOnInit(): void {
    if (window.innerWidth < 1024) {
      this.commonService.isShow = false;
    }
  }
}

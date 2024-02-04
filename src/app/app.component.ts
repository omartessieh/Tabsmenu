import { Component, OnInit } from '@angular/core';
import { menuController } from '@ionic/core';
import { Router } from '@angular/router';
import { UtilService } from './services/util.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public isMenuEnabled: boolean = true;
  public selectedIndex = 0;

  constructor(private util: UtilService, private router: Router) { }

  ngOnInit() {
    this.selectedIndex = 1;

    this.util.getMenuState().subscribe(menuState => {
      this.isMenuEnabled = menuState;
    });
  }

  navigate(path: any, selectedId: any) {
    this.selectedIndex = selectedId;
    this.router.navigate([path]);
  }

  close() {
    menuController.toggle();
  }
}

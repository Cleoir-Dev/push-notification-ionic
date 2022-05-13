import { Component, OnInit } from '@angular/core';
import { FcmService } from '../services/fcm.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private fcmService: FcmService) {}

  ngOnInit() {
    this.initializeApp()
  }
  initializeApp() {
      // Trigger the push setup
      this.fcmService.initPush();
  }
}

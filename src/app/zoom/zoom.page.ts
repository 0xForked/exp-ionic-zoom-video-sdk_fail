import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import ZoomVideo from '@zoom/videosdk';

@Component({
  selector: 'app-zoom',
  templateUrl: './zoom.page.html',
  styleUrls: ['./zoom.page.scss'],
})
export class ZoomPage implements OnInit, OnDestroy {
  zoomSDKClient = null;

  mute = true;

  constructor(private navController: NavController) { }

  ngOnInit(): void {
    const client = ZoomVideo.createClient();
    client.init('en-US', '/node_modules/@zoom/videosdk/dist/lib/');
    this.zoomSDKClient = client;
  }

  async onDecline() {
    this.navController.back();
  }

  async onMute() {
    this.mute = !this.mute;
  }

  async onSwitch() {}

  ngOnDestroy(): void {
    //
  }

}

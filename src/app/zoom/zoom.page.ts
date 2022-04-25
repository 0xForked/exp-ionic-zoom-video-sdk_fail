import { Component, OnInit } from '@angular/core';
import ZoomVideo from '@zoom/videosdk';

@Component({
  selector: 'app-zoom',
  templateUrl: './zoom.page.html',
  styleUrls: ['./zoom.page.scss'],
})
export class ZoomPage implements OnInit {
  zoomSDKClient = null;

  constructor() { }

  ngOnInit(): void {
    const client = ZoomVideo.createClient();
    client.init('en-US', '/node_modules/@zoom/videosdk/dist/lib/');
    this.zoomSDKClient = client;
  }

}

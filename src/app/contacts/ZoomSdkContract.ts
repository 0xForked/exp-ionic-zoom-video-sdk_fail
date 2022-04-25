import { registerPlugin } from '@capacitor/core';

export interface ZoomSdkPlugin {

  runZoomLayout(options: object): Promise<{ value: object }>;

}

const zoomSdk = registerPlugin<ZoomSdkPlugin>('ZoomSdkBridge');

export default zoomSdk;

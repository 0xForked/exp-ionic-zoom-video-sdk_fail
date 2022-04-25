package io.ionic.starter;

import android.content.Context;

import com.getcapacitor.Plugin;

import us.zoom.sdk.ZoomSDK;
import us.zoom.sdk.ZoomSDKInitParams;

public class ZoomSdkBridge extends Plugin
{
  // TODO Change it to your web domain
  public final static String WEB_DOMAIN = "https://zoom.us";
  // TODO Change to your current JWT
  public final static String TOKEN = "Your JWT token here";

  public void InitializeZoomSDK(Context context) {
    ZoomSDKInitParams params = this.initParams();


  }

  private ZoomSDKInitParams initParams() {
    ZoomSDKInitParams params = new ZoomSDKInitParams();
    params.domain = WEB_DOMAIN;
    params.jwtToken = TOKEN;
    params.enableLog = true;
    return params;
  }

//  private ZoomSDK initVideoSDK(ZoomSDKInitParams params) {
//
//  }
}

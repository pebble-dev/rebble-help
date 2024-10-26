---
layout: post
title: "Setup Rebble Web Services"
prompt: "I need help setting up Rebble Web Services"
date:   2024-07-08 07:14:42
author: "Will0"
hideFirstStepNumber: true
osSpecific: true
os: android
---

# Android 14 blocks Pebble installation

Android 14 introduced new restrictions around SDK target version for apps you can install. Because the Pebble app is no longer actively maintained, some phones will refuse to install it.

In this guide we'll use ADB to bypass this.

# Try the install helper

If you have a computer running Google Chrome, you can use our [install helper](/android-installer) to install the Pebble app on your phone. If that doesn't work, continue with the manual instructions.

# Install ADB

If you don't already have it setup, install Android Debug Bridge using [the instructions linked here](https://www.xda-developers.com/install-adb-windows-macos-linux/)

# Download the the Pebble APK

On your PC, download the Pebble APK from the following link:

[APK Download](https://binaries.rebble.io/apks/pebble-4.4.3.apk)

Save the file to your PC.

# Connect ADB to your phone

Connect your phone to your computer with a cable, and ensure you have debugging enabled in developer settings:

![](/images/adb/debugging.jpg)

If you don't see the developer options menu in settings, [first follow these instructions](https://developer.android.com/studio/debug/dev-options), then enable debugging.

On your computer run `adb devices` in a terminal. If you see a prompt on your phone like the one below, accept it.

![](/images/adb/allow.jpg)

# Install the app

Now run `adb install --bypass-low-target-sdk-block pebble-4.4.3.apk` on your computer. This will install the Pebble app onto your phone.

![](/images/adb/terminal.png)

Make sure the Pebble APK is in the same folder you're running your terminal in.

The Pebble app is now installed on your phone!

# Grant restricted settings access

- Go to Settings > Apps > Pebble
- Tap the top left button (should be three dots)
- Tap on "Restricted Settings" (or something similar)
- Allow the Pebble app to have all permissions

For more information, please check [this Google Help page](https://support.google.com/android/answer/12623953#allowrestrictedsettings)

# Setup the Pebble app

[Click here to continue](/setup-android/#6)

<hidenav />

---
layout: post
title: "Sideloading the Pebble app on Android"
prompt: "How to install / sideload the Pebble Android app"
keywords: "android 14 apk"
date:   2023-10-04 00:00:00
author: "bmacphail"
hideFirstStepNumber: true
osSpecific: false
---

# The Pebble app is no longer available in the Google Play store.

You can install it manually using the steps in this guide.

The steps vary by the version of Android your device is running. 

If you're not sure which version of Android you have, follow these steps to find out:

1. Open your phone's settings app.
2. Press the search button.
3. Type "Android version" and press the item that comes up.
4. You should be brought to a page where you can see your Android version number.

**If your phone is running Android 13 or below, follow the steps outlined in the section immediately following this one. If your phone is running Android 14 or above, [skip to the section after that](https://help.rebble.io/sideload-android-app/#3).**

# Sideload the Pebble app on Android 13 or below

On your Android device, download the Pebble APK from the following link:

[APK Download](https://rebble.io/apk)

<notmobile>
or via this QR code:   
   
   <qr url="https://rebble.io/apk" />
</notmobile>

Once you've downloaded the .apk file, open it on your phone by selecting it, then selecting **Install**:   

![](/images/setup/3.png)


You might be prompted with the following screen:

![](/images/setup/1.png)


If so, click through to Settings and select "Allow from this source" to enable installation of apps from unknown sources for your preferred file manager. 

![](/images/setup/2.png)

Press the back button if necessary, and tap install.

After following these steps, [go back to the setup guide to activate Rebble Web Services in your Pebble app](/setup-android).

# Sideload the Pebble app on Android 14 or above

> You'll need a computer running [Google Chrome](https://www.google.com/intl/en_ca/chrome/), [Microsoft Edge](https://www.microsoft.com/en-us/edge), or [Opera](https://www.opera.com/), and a USB cable to connect your phone to your computer with. 

On your phone, turn on USB debugging:

1. Open the Settings app.
2. Search for "Build number". Tap the first result.
3. In the menu that opens, tap the "Build number" item 7 times. You will get a notification that developer mode has been enabled.
4. Go back to the main Settings menu, and search for "USB debugging". Tap the first result.
5. In the menu that opens, toggle USB debugging on.

Now connect your phone to your computer via your USB cable, and do the following on your computer.

1. [Download the Pebble app APK file to your computer.](https://rebble.io/apk)
2. Go to [Tango ADB](https://tango-adb.github.io/old-demo/) in your browser.
3. Click the blue "⊕ Add" button, and select your phone from the menu that pops up.
4. Click the "Connect" button. Accept the prompt on your phone.
5. Click the "Install APK" menu option, ensure that the "--bypass-low-target-sdk-block (Android 14)" toggle is checked, and click "Browse APK".
6. Find the Pebble app APK that you downloaded in step 1 on your computer.
7. You should receive a message that the install was successful. 
8. After about 15 seconds, the app should appear on your phone.

After following these steps, [go back to the setup guide to activate Rebble Web Services in your Pebble app](/setup-android).
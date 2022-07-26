---
layout: post
title: "Sideloading the Pebble app on iOS with Sideloadly"
prompt: "How to install / sideload the Pebble iOS app using Sideloadly"
keywords: "removed app apple ios iphone store sideload ipa"
date:   2022-07-26 15:00:00
author: "robonxt"
hideFirstStepNumber: true
osSpecific: false
---

<h1 id="header">
Sideloading the Pebble app on iOS with Sideloadly
</h1>

>## [Looking for download links? Go to the end of the guide]!

---
The Pebble app is [no longer on the App Store](/ios-app-unavailable).

No worries! If you have an Apple ID, you can install the app yourself! 

Please note that you have to do this every 7 days for the app to keep working.

If you do not redo the process after a week, your Pebble will still receive notifications, but the Pebble app will no longer work.

###### *(written by robonxt, last updated on June 6, 2022)*
---

<h2 id="what-we-do">
What we are going to do:
</h2>

1. Download Pebble IPA.
2. Download Sideloadly.
3. Install Sideloadly on the computer.
4. Use Sideloadly to sideload the Pebble IPA file onto the iOS device.

<h2 id="requirements">
Requirements:
</h2>

- Apple ID (Apple ID account).
- Computer (Windows 10, or macOS 10.14 and higher) with internet access.
- iOS device (iOS 7 or higher) with internet access.
- Cable for iOS device.
- (Optional) Latest iTunes installed (for the Apple device drivers).

<h2 id="before-starting">
Before starting:
</h2>

- Read this guide carefully!
- Make sure that...
    - Computer is connected to the internet.
    - iOS device is connected to the internet.
    - iOS device is **not** connected to the computer.

> **[INFORMATION BOXES]** Slow down and read carefully!

---

<h2 id="install">
Installation:
</h2>

1. Download the appropriate Pebble IPA file to your computer.
    > **[IMPORTANT]** If you have a...
    >   * iPhone 5, iPad 4, iPad Mini 3, iPad Air 1, or older: download 32-bit IPA [(See links below)](#downloads).
    >   * iPhone 5S, iPad 5, iPad Mini 4, iPad Air 2, iPad Pro 1 or newer: download 64-bit IPA [(See links below)](#downloads).
    >   * Any iOS device running iOS 13 or newer: download 64-bit IPA [(See links below)](#downloads).
2. Download and install Sideloadly on your computer [(See links below)](#downloads).

3. Connect your iOS device to your computer using the iOS device cable. 
    > **[ALERT]**: There may be a popup on the iOS device asking to trust the computer, press Allow.
5. Run Sideloadly. 
	> **[INFO]**: Make sure your iOS device is showing in the dropdown list named "iDevice"!
6. Click on the IPA icon. Select the Pebble IPA file you downloaded in step 1.
    > **[INFO]**: Depending on your device, you may need to go into Advanced Options and tick the appropriate boxes.
7. Fill in your Apple ID in the "Apple account" section.
8. Press "Start" and wait for Sideloadly to install the app on the iOS device.
    > **[ALERT]**: At some point, there will be a popup that asks for your Apple ID password. Enter your Apple ID password.
9. The Pebble app is now installed. If "Untrusted Developer" pops up on the iOS device when opening the app, go to the Settings app > General > Device Management > (your Apple ID email) and click on  "Trust (your Apple ID email)" The Pebble app should now have a "Verified" on that same settings page.
10. Go to the Rebble website and create a Rebble account (or sign in if you already have one).
11. Click the "Switch to Rebble" button.
12. **Redo steps 3-6 every week.**
13. Enjoy your Pebble!

---

<h2 id="help">
Help:
</h2>

- Windows users: If Sideloadly does not detect the iOS device, install the latest iTunes and restart the computer before starting the process.
    > If Sideloadly still does not detect the iOS device after installing iTunes, check if the service "Apple Mobile Device Service" is running. You can do that by opening up Task Manager -> More Details (if tabs are not shown) -> Services -> look for "Apple Mobile Device Service". Right click on it and select "Start" (if it is currently stopped) from the dropdown menu; then start from step #3 in the guide.
- If Sideloadly gives you error about Anisette not working, try switching from "Local" to "Remote". If it still does not work, please wait for a fix from Sideloadly.
	> MacOS users: If you have a error about the mail plugin not installed, try "Remote Anisette" as well. If it still does not work, please wait for a fix from Sideloadly.
- If the app does not start/crashes, go to the Settings app > General > Device Management > (your Apple ID email). The Pebble app should have a "Verified" status. If not, repeat steps 3-6 from the guide.
- If Sideloadly does not work for you, try using **AltStore***.

###### **may be added in a future guide update*

>#### If you experience any problems that this guide did not resolve, please join the Rebble Discord server [(See links below)](#links) and ask in the **#rebble-help** channel; a helpful volunteer will be happy to help you out!

<h2 id="downloads-links">
Downloads and Links:
</h2>

<h3 id="downloads">
DOWNLOADS
</h3>

- 64bit Pebble IPA for iOS 13 and newer (thanks Doakyz!): [com.getpebble.pebbletime-iPhone13.ipa](https://cdn.discordapp.com/attachments/461686541027377152/939035930138923008/com.getpebble.pebbletime-iPhone13.ipa)
- 64bit Pebble IPA: [com.getpebble.pebbletime.ipa](https://binaries.rebble.io/ipas/com.getpebble.pebbletime.ipa)
- 32bit Pebble IPA (thanks Tamago's friend!): [com.getpebble.pebbletime-32bit.ipa](https://binaries.rebble.io/ipas/com.getpebble.pebbletime-32bit.ipa)
- Sideloadly: [https://sideloadly.io/#download](https://sideloadly.io/#download)
- iTunes for Window users (direct from Apple's website): [iTunes64Setup.exe](https://www.apple.com/itunes/download/win64)

<h3 id="links">
LINKS
</h3>

- **Rebble Website: [https://rebble.io/](https://rebble.io/)**
    - **Rebble Discord Server: [https://rebble.io/discord](https://rebble.io/discord)**
    - **Rebble Setup: [https://boot.rebble.io/](https://boot.rebble.io/)**
    - **Rebble FAQ: [https://rebble.io/faq/](https://rebble.io/faq/)**
	
- Sideloadly Website: [https://sideloadly.io/](https://sideloadly.io/)
    - Sideloadly Privacy Policy: [https://sideloadly.io/privacy](https://sideloadly.io/privacy)
    - Sideloadly FAQ: [https://sideloadly.io/#faq](https://sideloadly.io/#faq)

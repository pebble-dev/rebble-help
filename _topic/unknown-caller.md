---
layout: post
title: "Unknown Caller"
prompt: "Calls appear as Unknown"
keywords: "android 9 9+ unknown caller calls phone dialer"
date:   2021-02-01 07:14:42
author: "Will0"
osSpecific: false
os: android
---

# On Android (9.0+), incoming calls are displayed on the watch as “Unknown caller”

    This topic is incomplete, and is just a placeholder

In order to fix “Unknown caller” or altogether missing notifications on incoming calls for Pebble paired with Android 9.0 devices, there is a workaround with Dialer for Pebble app:

- Install Dialer for Pebble companion app and a respective App for Pebble.
- Open the Pebble app on your phone, and go to Notifications. Then disable notifications for Phone Calls.
- Open the Dialer for Pebble app on your phone, and enable Call Popup for Incoming and Outgoing calls.
- Make sure Dialer for Pebble app has system permissions to access Contacts, Call Log, Dialer and SMS on your phone.

This should fix the issue. In case if Dialer for Pebble works inconsistently, make sure it runs in background both on your Pebble (Settings and then Background App) and on your phone.
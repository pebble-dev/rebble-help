---
layout: post
title: "Troubleshooting Android connection issues"
prompt: "I can't pair my watch on Android"
keywords: "pairing connection bluetooth pair setup"
date:   2023-10-16 09:00:00
author: "Will0"
osSpecific: false
hideFirstStepNumber: true
---

# Android Pairing Issues

On some newer versions of android, you may find that when trying to pair your watch to your phone, you cannot find it. Some users report that they can see the watch in Android's bluetooth settings, but not the Pebble app. To fix this, please follow the steps provided.

# Forget bluetooth (if already paired)

If you have already paired your phone with the watch _directly_ in your Phone's bluetooth settings, forget it before continuing.

# Restart your phone

Now restart your phone, then proceed to the next step.

# Ensure Location is enabled

Check that your phone's location functionality is enabled, and check that the Pebble app has been granted the location permission.
This is required for an app to scan for bluetooth devices.

# Airplane Hack

Put your phone into airplane mode. Once it's enabled, re-enable only bluetooth. Now open the Pebble app and [attempt the pairing process](/setup-android/#6). If you are trying to pair a Pebble 2, this can sometime take many attempts.

At this point you should be successful in pairing your watch to your phone. If you are still having issues, drop by #rebble-help on our [Discord server](https://rebble.io/discord)
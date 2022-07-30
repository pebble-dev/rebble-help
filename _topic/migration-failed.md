---
layout: post
title: "Migration Failed Error"
prompt: "I get 'Migration Failed' error on Pebble or Pebble Steel"
keywords: "original OG upgrade firmware"
date:   2021-02-01 07:14:42
author: "Will0"
osSpecific: false
---

# During setup of original Pebble or Pebble Steel, the firmware upgrade step displays “Migration Failed”

With Pebble Classic or Pebble Steel, you may see an error where the update screen shows 'Could not find any migration firmware to install'.   

To resolve this, you need a device with a Pebble app that has not been switched to Rebble. 
You can either:
- Use another device
- [Remove Rebble from the Pebble app](/unrebble/) 
- Uninstall the Pebble app from your phone and reinstall it (highly not recommended if on a iOS device!)

Once you have done one of the above options, when you pair the watch again it will now complete the firmware upgrade.

After that, you can [start using Rebble Web Services again](/boot/).

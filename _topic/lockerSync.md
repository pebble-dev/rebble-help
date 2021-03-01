---
layout: post
title: "Locker Sync Issue"
prompt: "Trouble downloading Rebble apps"
keywords: "locker sync download not available lockersync installed unsupported watchface app"
date:   2021-02-01 07:14:42
author: "Will0"
osSpecific: false
---

# Locker Sync Issues 

If your apps appear installed in the Rebble store, but aren't actually in your app locker, your phone is likely out of sync with the servers:

![](/images/lockersync/2.png)  
   
Uninstalling and reinstalling the Pebble app fixes this issue, but there are two less drastic fixes to attempt first.


Firstly, reboot your phone.   
    
If that does not work, continue to the next step.

# Manually downloading the app

If the Rebble servers think your app or face is already installed, you can manually download it to fix the problem.   
   
Open [apps.rebble.io/?dev_settings=true](https://apps.rebble.io/?dev_settings=true) on your phone.   

<notmobile>
You can scan this QR code to go there:

<qr url="https://apps.rebble.io/?dev_settings=true" />
</notmobile>

Search for the app or watchface that is out of sync.

# Download the .pbw

At the bottom of the store page you'll see an option '*download pbw*'. Click it.

![](/images/lockersync/3.png)  

Once the .pbw file downloads, find the file and open it with the Pebble app.

If you don't get the option to open the file with the Pebble app, [click here](/topic/sideloading/)

The app is now installed and no longer out of sync with Rebble.
---
layout: post
title: "Submit an app"
prompt: "Publish an app or watchface to the Rebble store"
keywords: "developer portal dev submit publish face app watchface store beta support upload"
date:   2021-02-01 07:14:42
author: "Will0"
hideFirstStepNumber: true
osSpecific: false
---

# Publish an app to the Rebble appstore

So you've written a shiny new Pebble app or watchface and want to get it onto the store? Great! Here's how.   
   
First thing you'll need to do is build your app using `pebble build`, and make sure you've got the .pbw file.     
    
When you've got your .pbw ready, head on over to [rebble.io/submit](https://rebble.io/submit)   

Once you're there, continue to the next step.

# Fill out the base information

The first 4 fields to fill will be the basic information about your app.  
   
Fields marked with an asterisk are required, but you already knew that, didn't you? :)

![](/images/submit/1.png)

- **App Name** is the name of your application as it will appear in the store

- **Website URL** is an optional field pointing to a website. Perphaps put your personal site or twitter url here.

- **Source Code URL** is an optional field, here's where your github or other repo url should go if applicable.

- **Developer ID** is where your Developer ID should go. You'll have one if you have submitted an app to the store before. If not you can leave this blank.

# Select app or face

Here, you'll choose whether what you're uploading is a watchapp or watchface. 

![](/images/submit/2.png)

If it's a watchapp, you'll also be asked to pick its category. Here's the breakdown from the [developer document](https://developer.rebble.io/developer.pebble.com/guides/appstore-publishing/publishing-an-app/index.html):

![](/images/submit/3.png)

# App descriptions

Next, you'll need to fill out the app descriptions.

![](/images/submit/4.png)

- **App description** is the description of your app or face

- **Release notes** should describe what has changed in this update. If it's the first release, just write 'hello world' or something :)

# Icons

If you're submitting a watchapp you'll be asked for a large and small icon.

![](/images/submit/5.png)   

If you're submitting a watchface, you can skip this next step.

# Screenshots

Next, you'll be asked to submit screenshots of your app or face.    
This is what is displayed on the watch in the appstore.   
You must submit at least 1 screenshot.

![](/images/submit/6.png)   

By default the screenshots you will upload will be used across all platforms. If you want to submit platform specific watchfaces, click the toggle switch:

![](/images/submit/7.png)   

Once you've uploaded at least 1 screenshot, continue to the next step.

# Upload a banner

Next you can upload a banner. This is an image displayed above the watchapp in the store.

![](/images/submit/8.png)  
   
Banners are required for apps, and optional for watchfaces.
 
![](/images/submit/10.png)   
*A banner in the store*

# Upload your .pbw

Next, you'll need to upload the .pbw for your watchapp or face.

![](/images/submit/9.png)   

Once you're done with that, press "I'm ready, zip me up!"

The tool will then create a .zip app bundle and download it to your computer.

# Almost there

![](/images/submit/11.png) 

All that's left now is to email it to [support@rebble.io](mailto:support@rebble.io) so it can be uploaded to the appstore!    

This normally happens pretty quickly, but can sometimes take longer. You will receive an email when it's live, how exciting! :D

For help with the submission process or app development, check out the [Rebble Alliance Discord server.](https://rebble.io/discord) See you there!

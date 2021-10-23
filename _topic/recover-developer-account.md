---
layout: post
title: "I cannot access my original developer account"
prompt: "I cannot access my original developer account"
keywords: ""
date:   2021-05-25 09:00:00
author: "Will0"
hideFirstStepNumber: true
osSpecific: false
---

# Developer account issues

_This topic applies to users who were Pebble developers before the Pebble company shutdown, and now cannot access their apps through the dev portal_

Back in 2018, we asked you to [prepare for the Pebble company shutdown](https://rebble.io/2018/06/13/get-ready-to-rebble.html). If you did this sucessfully, then when you visit [the developer portal](https://dev-portal.rebble.io) for the first time all your watchfaces and apps will already be there.

If you did not do this, then upon your first login you may see the new user page:

![](/images/devportal/newuser.png)

or an existing user page, but with no apps:

![](/images/devportal/emptyuser.png)

This guide will show you how to submit the required information to Rebble, such that we can link your Rebble login to your developer account.

# Find your Rebble login identifier

In order to link your Rebble ID with your developer account, you first need to find your Rebble Auth ID.

Visit [auth.rebble.io/account](https://auth.rebble.io/account). If you are not already logged in, log in.

You will now see your account information:

![](/images/misc/account.png)

Note down your Log-in provider, we'll need this later. If you have more than one, select the first one.

In the above image, you would note down `twitter:5555555555`.

# Find the Developer ID that you want to link your account with

Now you have your Rebble ID, you need to find your original developer account ID. Once you have both they can be linked together.

To find your developer account ID:   
- Find the listing for one of your original apps on the [rebble appstore](https://apps.rebble.io).  
- Scroll down and select 'see more by this developer'.   
- Note the developer ID in the URL.   

For a more detailed guide on finding a developer ID on the store, [click here](/find-developer-id).

Once you have the developer ID for your original developer account, proceed to the next step.

# Prove ownership of the developer account

Before we can link your Rebble account to the appstore developer ID, you will need to prove that you are the original owner of the developer ID.

How you do this depends on what information is available. Below are the suggested methods.
   
### <i class="fab fa-github"></i> Github   
If the the developer ID you want to control includes a watchface or app that links to a github repo, you can update the github repo with a text file containing the Rebble ID (from Step 2). This proves you control both.

### <i class="fas fa-globe"></i> Website
If the the account you want to control includes a watchface or app with a website link, you can update the website to contain the Rebble ID you want to link the developer account to.

### <i class="fas fa-at"></i> Email
If you created your developer account _after_ the Pebble shutdown by using rebble.io/submit, then simply emailing us from the same email you've always used will suffice as proof of ownership.


### <i class="far fa-frown-open"></i> None of the above
If you don't have any of the above, then proving you own the original developer account might be slightly harder. You can still email us, but it may be quicker to drop by the [Rebble Discord](https://rebble.io/discord) to talk to someone in #rebble-help.

# Email us

Once you have your Rebble ID, the ID of the developer account you want to control, and some method of verifying you are the original owner of the developer account, send us an email at [support@rebble.io](mailto://support@rebble.io).

For example:

    Address: support@rebble.io   
    Subject: Developer Account Link   
   
    Body:   
        Hi Rebble,
        I want to link the developer account 53997c796c003bfdab0000d9 to my Rebble ID twitter:5555555555. 

        To prove I am the original owner of the account 53997c796c003bfdab0000d9, I have updated the Github repo linked in that account's only watchface to include a file with my Rebble ID in it.

        This is viewable at github.com/example/rebble-example

If you have any issues, don't have all 3 prerequisites, or just have any questions, drop by the [Discord server](https://rebble.io/discord) and ask away!

# Account linked!

Once you recieve a response from us, your Rebble ID will have been linked to your original developer account again!

![noborder](/images/setup/13.png)

Simply log in to the [dev portal](https://dev-portal.rebble.io) with your Rebble ID to manage your apps and faces!
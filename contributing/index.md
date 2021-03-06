---
layout: viewall
title: "Contributing"
prompt: ""
keywords: ""
date:   2021-02-01 07:14:42
author: "Will0"
hideFirstStepNumber: true
osSpecific: false
---

# Contributing a help topic

The help topics for the Rebble support center are all contributed by volunteers - This could include you!     

To get started, visit [the Github repo](https://github.com/pebble-dev/rebble-help) and look at the existing support topics, these are in the folder _topic.    

To make a new topic, all you need to do is create a new markdown (.md) file in the _topic folder. Copy & Paste an existing one to get started.   

If you get stuck, ask for help [on Discord](https://rebble.io/discord).

# Topic Metadata

You'll notice at the top of the markdown file are some attributes. These are used by [Jekyll](https://jekyllrb.com) when the site is built.   
For example:

    ---
    layout: post
    title: "Contributing"
    prompt: "Contributing to a help topic"
    keywords: "help contribute write new topic contributor"
    date:   2021-02-01 07:14:42
    author: "Will0"
    hideFirstStepNumber: true
    osSpecific: false
    ---

**layout**   
This is the layout of the page. Currently this must always be 'post'    

**title**   
This is the page title for the topic (as in what shows up when you bookmark the page). It should be short.     

**prompt**   
This is the prompt that appears in the search results, it might be the same as the title.

**keywords**   
These are any other keywords that, when a user searches for them, should cause this support topic to appear in the search results.

**date**   
This is the date you first write the topic. Use the format YYYY-MM-DD HH:MM:SS

**author**   
The name of the author. That's you!

**hideFirstStepNumber**   
An optional field that will cause the first step to not have a number against it. Useful for when you want to write an overview as the first step.

**osSpecific**   
This optional field says whether the step is specific to a phone OS. See below for an explanation on how to write OS specific topics

Once you have filled out the header, anything underneath the '---' is the content of the support topic.
    

# Formatting your support topic content

The support topics are written in [markdown](https://en.wikipedia.org/wiki/Markdown).    
If you're new to markdown, it's useful to have [this cheat sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) open as you work. 

## Including images

If you want to include images in your topic, you should put the image files in the 'images' folder, inside a subfolder you make for the support topic.    

I.e. If you're writing about 'Pebble 2 hardware', make a folder /images/p2hardware/, and put the image in there.   
You can then include your image in the topic with the syntax:   
`![](/images/p2hardware/image.png)`

## Customising images

There are two types of special images you can use by altering the alt-text:

`![icon](/images/p2hardware/image.png)` will make the image 50x50, useful for icons

`![noborder](/images/p2hardware/image.png)` will stop the image having the 6px black border around it

## Desktop only

If you have content you don't want to show on mobile (for example, a QR code), you can encapsulate it in `<notmobile> </notmobile>` tags.

## QR Codes

If you want to display a QR code to a URL, you can do so with the QR tag:    
`<qr url="https://example.com" />`

Make sure you include the self-closing `/` in the tag.   
You should probably combine qr tags with the notmobile tag too.

# Step-by-step

The Rebble help center uses Jekyll to process markdown into HTML. Then it automatically turns the documents into step-by-step tutorials.

The steps are determined by the h1 headers, in markdown as `#header`. Use these to split up your steps.    
For example:

    # Step one
    This is the first step. It will have '1. ' prepended next to it's title. 
    You can turn this off for the first step (see 'hideFirstStepNumber')

    # Step two
    This is the second step. The user will have to press 'next' once to get here.
    It will always have '2. ' prepended to the title

# OS Specific help

Sometimes you might want to have a seperate guide for iOS and android. To do this, you need to create 3 markdown files instead of 1:

**topicTitle.md**   
This will show up in the search results, and display the OS selection dialogue

**topicTitle-android.md**   
This is the android specific instructions. It must match the name of the previous file, with -android appended.

**topicTitle-ios.md**   
This is the iOS specific instructions. It must match the name of the previous file, with -ios appended.

Inside the files you also need to modify the page attributes.

The first page, which is the selection dialogue must have 

    
    osSpecific: true
    os: choose
    ---

This will cause it to be the selection dialogue. The content of this topic entry will never be shown to the user

The -android file must have:


    osSpecific: true
    os: android
    ---

and the -ios file must have:

    
    osSpecific: true
    os: ios
    ---

Now the user will get an OS prompt when the click the topic, and be taken to the correct guide.

# Building the site

If you've written a topic and want to build the site locally, you first need to [install Jekyll](https://jekyllrb.com/docs/installation/).   
Then install the site dependencies with `bundle install`.   
Then you can build the site with `jekyll build`.   
The site will be built into _site.

# Opening a PR

If you want to contribute firstly - Thank you! It's the community effort that keeps Rebble alive. Simply fork the repo and open a pull request, and we'll get your support topic merged asap.





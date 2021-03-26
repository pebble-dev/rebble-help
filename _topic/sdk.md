---
layout: post
title: "Install the SDK"
prompt: "Installing the Pebble SDK"
keywords: "sdk apps software development kit python vm virtual machine write face watchface"
date: 2021-02-01 07:14:42
author: "Will0"
hideFirstStepNumber: false
osSpecific: false
---

# Installing the Pebble SDK

The Pebble SDK allows you to write apps and watchfaces for Pebble. You'll need a desktop or laptop for this, and there are *many* installation methods.   
   
The recomended approach is a native installation:    

If installing on Ubuntu or another Debian-based Linux distribution, [follow this guide](https://willow.systems/blog/pebble-sdk-installation-guide/).    

If installing on Arch Linux, [follow this guide](https://github.com/pebble-dev/RebbleOS/blob/master/docs/arch_build.md).    

If installing on Windows or MacOS, [see here](https://old.reddit.com/r/pebble/comments/9i9aqy/developing_for_pebble_without_cloudpebble_windows/).

## Virtual machine

The easiest installation option is the [Pebble Virtual Machine](https://willow.systems/pebble/vm).

## Nix package

If you're using NixOS, you can install via the [nix package](https://github.com/Sorixelle/pebble.nix).

## Docker image

You can also install via the [Docker image](https://hub.docker.com/r/rebble/pebble-sdk), though getting the emulator to work is an involved, undocumented procedure.


For support, assistance, or general questions, come and talk to other Pebble developers on the [Rebble Discord server](https://rebble.io/discord). See ya there! :)

---
title: "The Welsh LiDAR Portal"
pubDate: 2025-09-01
description: "What if anyone could help rediscover Wales' lost landscapes? A community-powered platform built with React, Django and PostGIS, letting the public explore LiDAR terrain, record ancient features, and contribute to a shared archaeological database."
image:
  url: "/images/projects/the-welsh-lidar-portal.webp"
  alt: ”Hero image showing a LiDAR image background overlaid with the website title, tag line and call-to-action buttons"
tags:
  [
    "HTML",
    "CSS",
    "React",
    "Leaflet",
    "Django",
    "PostgreSQL",
    "PostGIS",
    "Djosser",
    "AWS",
  ]
github: "https://github.com/enrightc/The-Welsh-LiDAR-Portal"
livesite: "https://mappingthepast.co.uk/"
minutes: "3"
---

## overview

The Welsh LiDAR Portal is a fully deployed, community-powered web application
that turns passive map viewers into active contributors to Welsh archaeological
heritage. Built as an evolution of LiDARFind, the platform allows users to
explore Wales' historic landscape using open LiDAR data, draw polygon features
such as ancient enclosures and barrows, and save discoveries to a shared,
growing database.

With over 100 registered users, this is a real-world platform built around a
genuine passion for archaeology, open data, and public engagement with the
historic environment.

---

## the goal

The aim was to build a platform that goes beyond passive LiDAR viewing by:

- Allowing users to actively record archaeological discoveries by drawing
  polygon features directly on the map
- Building a shared, community-driven database of Welsh archaeological sites
- Making LiDAR data and archaeology accessible to everyone — from curious
  beginners to experienced researchers
- Supporting research, education, and heritage protection through open,
  collaborative data

Wales has some of the best LiDAR coverage in the UK, yet no platform existed
that focused exclusively on empowering users to actively contribute to a
record of its archaeology. The Welsh LiDAR Portal was built to fill that gap.

---

## key features

- **Interactive LiDAR map**  
  A Leaflet-powered map displaying open LiDAR data from DataMapWales, allowing
  users to explore Wales' landscape and uncover hidden archaeological features.

- **Polygon drawing tools**  
  Registered users can draw complex shapes — such as enclosures, field systems,
  and barrows — directly on the map, going beyond simple point markers to
  accurately define the extent of a discovery.

- **Record submission form**  
  Each drawn feature can be described in detail through a structured form,
  capturing information such as site type, period, and interpretation.

- **Scheduled Monument overlay**  
  Official Scheduled Monument data from CADW via DataMapWales is displayed as
  an additional layer, providing context and supporting research.

- **Personal profiles**  
  Registered users have a profile page displaying their recorded features,
  biography, location, and social links — fostering a sense of community
  among contributors.

- **Public profiles**  
  Other users can view a contributor's public profile, see their discoveries,
  and engage with the growing community.

- **User authentication**  
  Secure registration, login, and session management powered by Djoser and
  Django REST Framework.

- **Responsive design**  
  The interface adapts across desktop and mobile, with conditional UI elements
  that respond to the user's login state and device.

---

## design approach

The design prioritises clarity and focus, keeping the map at the centre of
the experience:

- **Tech stack:** React for the frontend, Django REST Framework for the
  backend API, and PostGIS for spatial data storage and querying
- **Mapping:** Leaflet with Leaflet Draw for polygon creation, served
  alongside Cloud-Optimised GeoTIFFs (COGs) for efficient LiDAR tile delivery
- **Data:** Open datasets from DataMapWales, including LiDAR hillshade tiles
  and Scheduled Monument boundaries from CADW
- **Layout:** Clean and minimal, ensuring the map and its data remain the
  primary focus at all times

---

## user experience

The platform was designed to serve a wide range of users:

- **Casual visitors** can explore the LiDAR map and browse existing
  community discoveries without needing an account
- **Registered users** can draw features, submit records, and build a
  personal log of their archaeological findings
- **Researchers and enthusiasts** benefit from the polygon drawing tools
  and structured record forms, enabling precise and detailed documentation
- **The wider community** can view public profiles and explore each other's
  contributions, supporting knowledge sharing and collaboration

---

## what I learned

- How to build a decoupled, full-stack application using **React** on the
  frontend and **Django REST Framework** as a backend API — a significant
  architectural step beyond previous projects
- How to work with **PostGIS** for the first time, storing and querying
  spatial (geographic) data in a PostgreSQL database
- How to implement **polygon drawing** on an interactive map using
  Leaflet Draw, and how to capture, serialise, and save geometric data
  to a database
- How to serve and optimise large geographic datasets using
  **Cloud-Optimised GeoTIFFs (COGs)** and AWS S3 for efficient tile delivery
- How to integrate open government datasets — including LiDAR data and
  Scheduled Monument boundaries — from **DataMapWales** and **CADW** into
  a live application
- That building something with genuine real-world purpose — a platform now
  used by over 100 people passionate about Welsh heritage — is the most
  rewarding outcome a developer can achieve

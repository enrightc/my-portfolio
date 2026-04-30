---
title: "LiDARFind: The Welsh LiDAR Portal"
pubDate: 2024-07-01
description: "Discover what's hidden beneath the Welsh landscape. A full-stack Python and Flask app with an interactive Leaflet map, letting users explore LiDAR terrain, record archaeological finds, and contribute to a growing, community-driven heritage database."
image:
  url: "/images/projects/lidarfind.webp"
  alt: "Welsh LiDAR Portal shown across multiple devices with terrain visualisation and interactive map."
tags: ["HTML", "CSS", "Python", "Flask", "MongoDB", "JavaScript", "Leaflet"]
github: "https://github.com/enrightc/LiDARFind"
livesite: "https://lidarfind-a137ffb9e451.herokuapp.com/"
minutes: "3"
---

## overview

LiDARFind is a full-stack web application designed to document and share archaeological
discoveries using LiDAR data in Wales. The platform provides an interactive mapping
experience where users can explore, record, and manage archaeological sites,
contributing to a growing community database of Welsh heritage.

The project was born out of a genuine passion for archaeology and public engagement
with heritage. While several platforms exist for recording archaeological discoveries
across the UK, none focus exclusively on Wales — despite its extensive LiDAR coverage.
LiDARFind was built to fill that gap.

---

## the goal

The aim was to create a collaborative, community-driven platform that:

- Allows users to explore LiDAR data overlaid on an interactive map of Wales
- Enables registered users to record, edit, and manage their own archaeological
  discoveries
- Encourages citizen science by making LiDAR data accessible to enthusiasts and
  professionals alike
- Provides administrators with tools to manage users and maintain data integrity

The platform was designed with inclusivity in mind, welcoming everyone from
first-time hobbyists to experienced researchers.

---

## key features

- **Interactive map**  
  A full-screen Leaflet map allowing users to explore recorded archaeological sites
  across Wales, with toggleable layers including OpenStreetMap, Bing Satellite
  imagery, and a Welsh-language map layer.

- **LiDAR data overlay**  
  LiDAR data is served as a WMS overlay, providing detailed topographic information
  that users can switch on or off as needed.

- **Record creation**  
  Registered users can log discoveries directly on the map by clicking to set
  coordinates, with dynamic dropdowns that adapt based on selected site type.

- **User profiles**  
  Each user has a personal profile displaying their contributions, membership
  details, and skill level, with full control to edit or delete their own records.

- **Role-based access**  
  Navigation and permissions adapt based on user type — guest, registered user,
  or administrator — ensuring users only see what is relevant to them.

- **Admin dashboard**  
  Administrators can manage all users and records from a dedicated dashboard,
  including the ability to delete users and all associated records.

- **Map filtering**  
  Users can filter map markers by search criteria to narrow down discoveries by
  site type, period, or other attributes.

- **Responsive design**  
  The platform is fully responsive, providing a consistent experience across
  desktop, tablet, and mobile devices.

---

## design approach

The design was kept deliberately minimal to keep the focus on the maps and data:

- **Colour palette:** a muted blue-grey background (#e1eaec) with a dark navy
  navbar (#263238) and green call-to-action buttons (#4CAF50), chosen to feel
  professional and unobtrusive
- **Typography:** _Inter_ used throughout for its clarity and legibility in
  digital interfaces, particularly at smaller sizes
- **Layout:** clean and functional, ensuring the interactive map remains the
  centrepiece of the experience

Accessibility was considered throughout, with strong colour contrast, clear
typography, and aria-labels applied to interactive elements.

---

## user experience

LiDARFind was designed to serve a broad audience:

- **Newcomers and enthusiasts** can explore the map and browse discoveries without
  needing an account, with clear calls-to-action encouraging registration
- **Registered users** can actively contribute to the database, managing their own
  discoveries from a personalised profile
- **Researchers and professionals** benefit from detailed record fields, LiDAR
  overlay data, and the ability to filter and search the database
- **Administrators** have full oversight of the platform, maintaining data quality
  and managing the community

---

## what I learned

- How to build a full-stack web application for the first time, using **Python**
  and **Flask** to handle server-side logic and routing
- How to work with a **non-relational database (MongoDB)** to store and retrieve
  structured data across multiple collections with defined relationships
- How to integrate **Leaflet** into a real-world project, including the significant
  challenge of customising and iterating on the map to meet the project's specific
  requirements
- How to implement **role-based access control**, ensuring different users see and
  can do different things depending on their permissions
- How to use **Jinja templating** to dynamically generate HTML pages from
  server-side data
- How to deploy a full-stack application to the cloud using **Heroku**, including
  configuring environment variables and managing a live database
- That building something you are genuinely passionate about — in this case,
  making Welsh archaeological heritage more accessible to everyone — makes the
  challenges of a complex project far more rewarding to work through

---
title: "Botanic Labs"
pubDate: 2024-10-01
description: "Bringing the joy of plants to your doorstep. A full-stack eCommerce platform built with Django, PostgreSQL and Stripe, featuring a curated seasonal catalogue, in-depth care guides, and a seamless checkout experience for green-fingered shoppers."
image:
  url: "/images/projects/botanic-labs.webp"
  alt: "Responsive web app interface titled ‘Botanic Labs’ displayed across desktop, laptop, and tablet devices"
tags:
  [
    "HTML",
    "CSS",
    "JavaScript",
    "Python",
    "Django",
    "PostgreSQL",
    "AWS",
    "Stripe",
  ]
github: "https://github.com/enrightc/Gothams-Dark-Decisions"
livesite: "https://enrightc.github.io/Gothams-Dark-Decisions/"
minutes: "3"
---

## overview

Botanic Labs is a full-stack eCommerce platform built for plant enthusiasts of all
experience levels. The platform allows users to browse and purchase a curated
selection of plants organised by season, with detailed care information to help
gardeners make informed choices.

This was the final project on my coding course and the most technically complex
project I have built to date, bringing together a fully functional online store
complete with secure payments, cloud-based file storage, and a structured relational
database.

---

## the goal

The aim was to build a complete, real-world eCommerce experience that:

- Allows users to browse, filter, and purchase plants organised by season
- Provides detailed product information including planting periods, soil drainage,
  light exposure, and lifespan to help users find the right plants for their garden
- Enables registered users to manage their profile, save delivery details, and
  view order history
- Gives administrators full control over products, articles, and FAQs directly
  from the front end

The platform was designed to feel like a genuine, production-ready online shop
rather than a course exercise.

---

## key features

- **Seasonal product catalogue**  
  Products are organised by season, allowing users to quickly find plants suited
  to the current time of year. Sorting by price, rating, and season is available
  throughout.

- **Detailed product pages**  
  Each product includes comprehensive care information — lifespan, type, light
  exposure, soil drainage, and planting and flowering periods — alongside product
  recommendations to encourage further browsing.

- **Secure checkout with Stripe**  
  A fully integrated Stripe payment system handles secure transactions, with
  webhook support to ensure orders are captured even if a user closes the browser
  mid-checkout.

- **Guest and registered checkout**  
  Users can complete purchases without an account, or register to save delivery
  details and access their full order history.

- **Cloud-based file storage with AWS S3**  
  All static and media files are served via Amazon Web Services S3, ensuring
  reliable delivery of images and assets on the live site.

- **Articles and FAQs**  
  Admin users can publish gardening articles and manage FAQs directly from the
  front end, providing educational content alongside the product catalogue.

- **Role-based access**  
  Superusers have access to product management, article management, and FAQ
  management directly from the site interface, without needing to use the Django
  admin panel.

- **Email order confirmations**  
  Customers receive an automated email confirmation after every successful
  purchase, providing a clear record of their order.

---

## design approach

The design was kept deliberately minimal to let the products take centre stage:

- **Colour palette:** a soft natural beige background (#FAF7F2) with bold magenta
  call-to-action buttons (#C83274), creating a fresh, contemporary feel suited to
  a modern plant shop
- **Typography:** _Inter_ used throughout for its clarity and legibility in digital
  interfaces, particularly at smaller sizes
- **Layout:** clean and uncluttered, with seasonal category cards on the homepage
  giving users an immediate, intuitive entry point into the catalogue

Accessibility was considered throughout, with strong colour contrast, clear
typography, and consistent navigation across all device sizes.

---

## user experience

Botanic Labs was designed to serve a broad range of users:

- **Casual browsers** can explore the full catalogue and filter by season without
  needing to create an account
- **Shoppers** benefit from a streamlined checkout process, with the option to
  complete a purchase as a guest or save details for faster future checkouts
- **Returning users** can log in to view their order history and manage their
  saved delivery information
- **Administrators** can manage the entire product catalogue, publish articles,
  and update FAQs directly from the front end without touching the Django admin
  panel

---

## what I learned

- How to build a fully functional **eCommerce platform** from the ground up as
  the final and most complex project of my coding course
- How to integrate **Stripe payments** into a Django application, including
  configuring webhooks to ensure orders are reliably captured regardless of
  what happens after payment
- How to set up and configure **Amazon Web Services S3** for serving static and
  media files on a live deployment — a significant challenge and a real achievement
- How to design and build a **structured relational database** using PostgreSQL,
  with carefully considered model relationships covering products, orders, users,
  articles, and FAQs
- How to implement **role-based access control** in Django, ensuring that
  admin-only features are protected from unauthorised access
- How to deploy a production-ready full-stack application to **Heroku**, managing
  environment variables, static file collection, and database migrations across
  both local and live environments

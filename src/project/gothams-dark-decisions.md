---
title: "Gothams Dark Decisions"
pubDate: 2024-04-01
description: "Hero or villain? Step into the shadows of Gotham and let your choices decide. A JavaScript-powered, narrative-driven quiz that maps your moral instincts onto the Batman character you most resemble."
image:
  url: "/images/projects/gotham-dark-decisions.webp"
  alt: "“Responsive web app interface titled ‘Gotham’s Dark Decisions’ displayed across desktop, laptop, and tablet devices, featuring a dark cityscape background with a centred modal and start button.”"
tags: ["HTML", "CSS", "JavaScript"]
github: "https://github.com/enrightc/Gothams-Dark-Decisions"
livesite: "https://enrightc.github.io/Gothams-Dark-Decisions/"
minutes: "3"
---

## overview

Gotham's Dark Decisions is an interactive frontend quiz experience that immerses users in the world of Batman. Players choose their path — hero or villain — and answer a series of questions that dynamically adapt to their choices, ultimately revealing which character from the Batman universe they most closely resemble.

The project was designed to feel less like a traditional quiz and more like an interactive graphic novel, with atmospheric visuals, dynamic colour schemes, and smooth transitions that evolve as the user progresses.

---

## the goal

The aim was to create a fully interactive, JavaScript-powered experience that:

- Responds dynamically to user input, adapting the quiz path based on choices made
- Immerses users in the atmosphere of Gotham City through deliberate design decisions
- Provides a personalised and replayable experience with multiple possible outcomes

The project was built with Batman fans and quiz enthusiasts in mind, offering an engaging experience whether users are long-time fans or newcomers to the universe.

---

## key features

- **Hero or villain path**  
  The first question branches the entire quiz into two distinct journeys — Bat family or Batman villain — with tailored questions for each path.

- **Dynamic colour scheme**  
  Button colours shift from blue to red depending on the path chosen, reinforcing the hero or villain theme throughout the experience.

- **Background image transitions**  
  Background imagery dynamically changes with a fadeIn/fadeOut effect as users progress, creating a sense of turning pages in a graphic novel.

- **Character reveal**  
  Upon completing the quiz, users are shown their closest Batman character match, complete with a character bio and image.

- **Audio narration**  
  An optional voice-over narration on the landing page sets the tone and adds to the immersive atmosphere.

- **Progress tracking**  
  A progress bar keeps users informed of how far they are through the quiz at all times.

- **Quiz reset**  
  Users can restart the quiz at any point to explore a different path and discover a different character outcome.

---

## design approach

The design was built around the dark, gritty atmosphere of Gotham City:

- **Colour palette:** a minimalist scheme centred on black and white, with dynamic accents of yellow, blue, and red that shift based on user choices
- **Typography:** _Judson_ used consistently for both headings and body text, lending an elegant and cohesive feel throughout
- **Imagery:** AI-generated background images that change progressively as the quiz unfolds, reinforcing the graphic novel aesthetic
- **Transitions:** fadeIn/fadeOut effects used deliberately to mimic the experience of turning pages

Accessibility was considered throughout, with strong colour contrast, clear font choices, and aria-labels applied to interactive icon elements.

---

## user experience

The quiz was designed with engagement and replayability in mind:

- **First-time users** are guided clearly from the landing page through to their character reveal with minimal friction
- **Returning users** are encouraged to retake the quiz and explore the alternate path they didn't choose first time
- **Batman enthusiasts** are rewarded with atmospheric visuals, thematic audio, and character outcomes that feel authentic to the universe

The branching structure ensures that no two playthroughs feel identical, giving the experience genuine replay value.

---

## what I learned

- How to write and structure JavaScript for the first time, building confidence
  with core concepts such as arrays, functions, and event handling
- How to use **jQuery** for the first time, finding its intuitive syntax made
  tasks like DOM manipulation, animations, and event handling more straightforward
  than plain JavaScript
- How to implement **dynamic colour changes** based on user input, using colour
  to reinforce the hero or villain theme throughout the experience
- How to manage **background image transitions** using fadeIn/fadeOut effects,
  including the challenge of timing and sequencing them correctly across the quiz
- How to debug a real-world CSS issue — a persistent hover effect on touchscreen
  devices — by researching and applying a solution found on Stack Overflow

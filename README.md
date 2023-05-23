# Headless CMS Workshop using Next.js, Sanity and Vercel<!-- omit in toc -->

This is a starter repo used as a part of the Headless CMS Workshop. It walks through the steps needed to build out a statically generated website that uses [Next.js](https://nextjs.org/) for the frontend, [Sanity](https://www.sanity.io/) to handle its content and [Vercel](https://vercel.com/) to deploy to production.

Access the workshop presentation [here](https://docs.google.com/presentation/d/1L_wW6yrLEmNiVBJEPtweJorlA7yYOjbNUX4Tc9KGA6w/edit?usp=sharing), which will guide you through the steps to build out your own site! You can find the completed example by checking out the `complete-example` branch.

## Topics

- Intro

  - What is headless architecture?
  - What is Next.js?
  - What is Sanity.io?

- Setting up the Repo
- Setting up Sanity.io
  - Content modeling
  - Querying content with GROQ
- Setting up Next.js
  - Dynamic routing
  - Fetching page data
  - Page builder
- Deploying to production on Vercel

## Running the project locally

### Storybook

[Storybook](https://storybook.js.org/) contains all the prebuilt components we'll be working with. To access storybook locally run:

```bash
npm run storybook
```

Navigate to http://localhost:6006.

### Next.js App

You can start development environment for the frontend app by running:

```bash
npm run dev
```

Navigate to http://localhost:3000

### Sanity Studio

For this implementation, the Sanity Studio is embedded inside our Next.js app. This means that you just need to start the development environment for the frontend app and navigate to http://localhost:3000/studio.

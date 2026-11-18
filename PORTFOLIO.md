# Logistics Website — Engineering Case Study

**Project type:** Public website for a logistics company  
**Focus:** Next.js, TypeScript, lead capture, maintainable page structure  
**Source:** [GitHub repository](https://github.com/bomberman9000/logistics-site)

## Problem and solution

A logistics company needs a clear public presentation of services and shipping routes, with an accessible way for prospective customers to submit inquiries.

The repository implements a Next.js App Router website with service and route pages, reusable UI components, and an API route for passing lead information to Telegram.

## Technical scope

- Next.js 16.1.0, React 19.2.3 and TypeScript (per `package.json`)
- Reusable page and form components
- Dynamic route pages (`/routes/[slug]`)
- API-based lead intake; Telegram integration is described in the repository README
- Tailwind CSS styling

## What to inspect

- `app/api/lead/`: request handling
- `app/routes/`: route-specific pages
- `components/LeadForm.tsx`: form UI
- `data/routes.ts`: route data

## Validation status

Source structure and declared dependencies were reviewed for this case study. Live lead delivery, form abuse protection, production uptime, and end-to-end conversion metrics were **not independently verified**.

## Portfolio next steps

Add an approved screenshot, an end-to-end form demo with synthetic data and a CI status link once verified. Keep live credentials and customer information out of public documentation.

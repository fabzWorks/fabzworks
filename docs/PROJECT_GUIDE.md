# FabzWorks — Project Guide

Welcome! This file explains the codebase in plain language: what's where,
how the interactive parts work, and how to hook up real data later.

---

## 1. The big picture

This is a **Next.js (App Router) + TypeScript + Tailwind CSS** website.
Right now everything runs on **static data** (plain `.ts` files in
`src/data/`), so the whole site works and feels real without a backend.
When you're ready, you replace the data-file imports with real API calls —
the UI components don't need to change.

```
src/
  app/            → every page and route (Next.js App Router)
  components/
    atoms/        → smallest building blocks (Button, Badge, Logo...)
    molecules/    → small combinations of atoms (PageHero, ThemeSwitcher...)
    organisms/    → full sections (Navbar, Footer, Hero, ApplyForm...)
  data/           → static content: team.ts, blog.ts, services.ts, etc.
  lib/            → theme/auth/toast context + the contact server action
  types/          → shared TypeScript types for all the data
docs/
  PROJECT_GUIDE.md → this file
```

This is "atomic design": atoms are the smallest pieces, molecules combine a
few atoms, organisms are full page sections, and pages assemble organisms.

---

## 2. Where content lives (and how to edit it)

Every piece of content on the site comes from a file in `src/data/`:

| File | Powers |
|---|---|
| `services.ts` | Services grid + `/services/[slug]` detail pages |
| `team.ts` | Team grid + `/team/[slug]` profiles |
| `blog.ts` | Blog grid + `/blog/[slug]` articles |
| `careers.ts` | Careers list + `/careers/[slug]` + apply form job info |
| `case-studies.ts` | Case study cards + detail pages |
| `testimonials.ts` | The rotating testimonial on the homepage |
| `faqs.ts` | The FAQ accordion |
| `stats.ts` | The stat numbers in the hero and About page |
| `contact.ts` | Email, phone, address shown in the footer/contact page |
| `nav.ts` | Header links, dropdown menus, footer sitemap |
| `themes.ts` | The 4 accent color options in the theme switcher |

**To edit content:** open the relevant file and change the data. Every
item has a `slug` field — that's the URL segment used for its detail page
(e.g. `slug: "erp-solutions"` → `/services/erp-solutions`). Add a new
object to the array to add a new team member, blog post, job, etc. — the
detail pages and listing pages update automatically because they read
straight from these arrays.

---

## 3. How "modal or detail page" works (the interesting part)

You asked for team members and the job-application flow to open in a
**modal**. Modals that also work as real, shareable, refreshable pages are
tricky — Next.js has a specific pattern for this called **intercepting
routes**, and this project uses it for real (not faked with plain
`useState`):

```
src/app/team/
  layout.tsx              → renders {children} AND {modal} side by side
  page.tsx                → the /team grid page
  @modal/
    default.tsx            → renders nothing by default
    (.)[slug]/page.tsx      → THIS renders when you click a team card
  [slug]/
    page.tsx                → THIS renders on a hard refresh or direct link
```

**What actually happens:**
- Click a team card from `/team` → Next.js does a client-side navigation
  and slots the `@modal/(.)[slug]/page.tsx` component into the page as an
  overlay. The grid stays visible behind it. This is `TeamModal.tsx`.
- Copy that URL and open it in a new tab, or hit refresh → there's no
  "previous page" to intercept from, so Next.js renders the plain
  `[slug]/page.tsx` full page instead. Same content, no modal.
- Both routes render the exact same `TeamMemberContent.tsx` component, so
  you only maintain the content layout once.

The **careers apply flow** (`src/app/careers/`) uses the identical
pattern for `/careers/[slug]/apply`. If you want to add this pattern to
something else (say, blog posts), copy the `@modal` folder structure and
point it at a new content component.

Blog posts, services, and case studies intentionally use **plain detail
pages** instead of modals — for content people read start-to-finish, a
full page (with its own URL, good for SEO and sharing) is the better UX.
The spec allowed either, so we used whichever pattern fit each content
type best.

---

## 4. The Apply flow

- `src/components/organisms/ApplyForm.tsx` is the shared form: full name,
  email, phone, portfolio link, resume upload (UI only — see below), and a
  cover message. It validates fields client-side and shows inline errors.
- On submit, it currently **simulates** a network request (a `setTimeout`
  with a small random failure chance so you can see the error state too).
  Look for the comment `// Static-frontend demo:` inside the file — that's
  exactly where you'd replace the simulated call with a real `fetch()` to
  your applicant-tracking system or API route.
- The resume "upload" only reads the file name for display — no file is
  actually sent anywhere yet. Wire this up to real storage (S3, an API
  route, etc.) when you have a backend.
- Success and error states, plus a loading spinner on the submit button,
  are all built in.

---

## 5. Authentication (login / signup / forgot password)

`src/lib/auth-context.tsx` is a **demo** auth system: it "logs in" any
email + 6-character password, stores a fake user in `localStorage`, and
updates the navbar to show you're logged in (with a logout button).

This is intentionally simple so the UI, loading states, and error states
are all real and functional — but there is no real backend, no real
password checking, and no real security. When you're ready to add real
auth:

1. Swap the body of `login()` / `signup()` in `auth-context.tsx` for real
   API calls (or use a library like NextAuth/Auth.js, or a hosted service
   like Clerk/Supabase Auth).
2. Keep the same function signatures (`login(email, password)` returning
   `{ ok, error? }`) and the login/signup pages won't need any changes.

---

## 6. The contact form (Resend-ready)

`src/lib/actions.ts` is a **Next.js Server Action** (`"use server"`) that
validates the contact form with `zod` and returns clear field-level
errors. It's already structured for **Resend**:

1. `npm install resend`
2. Set `RESEND_API_KEY` and `CONTACT_TO_EMAIL` in your `.env`
3. Uncomment the `Resend` block inside `submitContactForm()`

Until you do that, submissions are validated and "sent" (simulated) so the
full loading/success/error UI already works end to end.

---

## 7. Theming (dark/light + 4 accent colors)

- `src/lib/theme-context.tsx` manages two independent settings: **mode**
  (`light`/`dark`) and **accent** (`gold` / `ocean` / `sea` / `floral`).
  Both persist to `localStorage` and apply instantly with no flash on
  reload (there's a tiny inline script in `app/layout.tsx` that sets the
  right classes before React even loads).
- All the actual colors live in `src/app/globals.css` as CSS variables
  (`--bg`, `--text`, `--accent`, etc.), scoped per mode/accent combination.
  Components never hardcode colors — they use `var(--accent)`,
  `var(--text-muted)`, and so on, so switching themes instantly restyles
  everything.
- To add a 5th accent theme: add a new `[data-accent="yourtheme"]` block
  in `globals.css` (light + `.dark` variants), then add it to
  `src/data/themes.ts` so it shows up in the theme switcher UI.

---

## 8. Replacing static data with a real API later

Because every page reads from `src/data/*.ts`, connecting a real backend
is mostly a matter of swapping *where the data comes from*, not
rewriting the UI:

1. Turn the relevant page (e.g. `app/blog/page.tsx`) into a component that
   `await`s your API/database call instead of importing from `data/blog.ts`.
2. Keep the shape of the data the same as the TypeScript types in
   `src/types/index.ts` (or update the types to match your real schema,
   and TypeScript will show you every place that needs updating).
3. Components like `BlogBrowser`, `ServicesBrowser`, etc. just take arrays
   as input — they don't care whether that array came from a static file
   or a database query.

---

## 9. Design notes

- **Fonts:** the project uses curated system font stacks (no external
  font downloads needed, so it builds fully offline). If you have
  internet access at build time and prefer Google Fonts, swap the
  `--font-display` / `--font-sans` / `--font-mono` variables in
  `globals.css` for a `next/font/google` import in `app/layout.tsx`.
- **Icons:** from `lucide-react`. Note that this package doesn't ship
  trademarked brand logos (LinkedIn, GitHub, etc. as literal logos) — the
  team page uses neutral icons for social links instead. Swap in your own
  SVGs if you want literal brand marks.
- **Animation:** Framer Motion is used throughout for section reveals,
  the theme switcher menu, modals, and form state transitions.

---

## 10. Running the project

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build
npm run start    # run the production build
```

That's it — everything else is regular Next.js. If anything in this guide
doesn't match what you find in the code, trust the code and treat this
file as a map, not gospel.

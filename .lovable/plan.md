# Virunga Acrobat Club — Institutional NGO Platform

A bilingual (French primary, English secondary) institutional website with a database-backed content system, secure admin area, and strict child-safeguarding separation. The brief is very large, so the build runs in phases; each phase leaves a working, publishable site.

## Guiding rules from the brief

- No invented facts. Registration numbers, statistics, bank details, phone numbers, partner logos and team members start empty and are filled in by an administrator.
- Safeguarding reports are isolated: only Super Admin and Safeguarding Officer can ever see them, and email alerts never contain report content.
- Child-related photos and stories cannot be published without recorded consent and safeguarding approval.
- French is the default language; missing translations fall back to French.
- Built mobile-first for low-bandwidth connections, targeting WCAG 2.2 AA.

## Phase 1 — Foundation and public site (this build)

**Design system**: deep institutional blue, natural green, warm ochre accent, warm off-white background, dark charcoal text, all as reusable tokens. Generous whitespace, strong typography, restrained motion. Light mode now, dark-mode-ready structure.

**Bilingual shell**: French/English routing (`/fr/...`, `/en/...`) with Swahili slot reserved, accessible language switcher, remembered choice, graceful fallback to French.

**Pages**: Home (all 14 sections in the specified order), About, Programs overview plus the four program pages, Projects, Impact, Stories, News, Events, Resources, Partners, Get Involved (+ Partner / Volunteer / Support), Safeguarding, Report a Concern, Contact, Search, Privacy, Terms, Cookies, Accessibility, Complaints, custom 404.

**Core components**: header, mobile menu, language switcher, hero, program/project/story/news/event/resource/partner/team cards, impact counters, filters, pagination, breadcrumbs, empty/loading/error states, footer with auto-updating year.

**SEO**: per-page titles, descriptions, canonical URLs, social tags, sitemap, robots, Organization/Article/Event/Breadcrumb structured data.

At the end of Phase 1 every page renders with real structure and approved copy from the brief; dynamic areas show honest empty states until content is added.

## Phase 2 — Cloud backend, content, forms

Enable Lovable Cloud (database, logins, file storage, server-side code) and add:

- Content tables with translations: pages, programs, projects, impact indicators and verified values with reporting periods, news, stories, events, resources, partners, team, legal documents, site settings.
- Publication workflow: Draft → Review → Safeguarding review (when relevant) → Approved → Published → Archived, with approval history and soft-delete.
- Public forms with validation, rate limiting, spam protection and file-type/size checks: contact, partnership, volunteer (private CV storage), event registration, newsletter, complaints.
- Report a Concern stored in a separate restricted table, anonymous submission allowed, no retrieval by the submitter, every access logged.
- Storage separated into public media, public documents, private admin documents, volunteer documents, consent records and safeguarding attachments; private files only via signed links.
- Row-level security on every table, verified so anonymous visitors can read only published public content.

## Phase 3 — Admin dashboard and roles

- Secure `/admin` with invite-only accounts, password reset, protected routes.
- Nine roles (Super Admin, Executive Director, Communications Manager, Program Manager, Content Editor, Safeguarding Officer, Finance Officer, Translator, Viewer) with granular permissions, stored in a dedicated roles table.
- Managers for every content type, media library with consent records, translation workspace with translation status, enquiry/application inboxes with their workflows, legal information, site settings, users, audit log.
- Dashboard overview counters; safeguarding shows nothing at all to normal admins.
- Audit logging for logins, edits, publishing, role changes, document access and sensitive-record access.

## Phase 4 — Support, notifications, polish

- Support page with online donations behind a disabled feature flag and a payment-provider-agnostic structure for later; bank/mobile-money details only if an administrator enters them.
- Branded transactional emails (contact, partnership, volunteer, event, newsletter, admin invite, password reset, content-free safeguarding alert).
- Optional analytics settings that load nothing until configured; cookie banner only if non-essential tracking is switched on.
- Accessibility and performance pass: keyboard paths, focus states, skip link, reduced motion, lazy and responsive images, code splitting, loading skeletons.

## Technical notes

TanStack Start + React + TypeScript, Tailwind v4 tokens in `src/styles.css`, shadcn/ui, TanStack Query, React Hook Form + Zod. Backend on Lovable Cloud (Postgres, auth, storage, server functions) with UUID keys, `created_at`/`updated_at`/`created_by` and RLS on every table. Translations held as per-entity translation rows plus UI message files.

## Open items for you

These stay as editable placeholders until you supply them: legal registration and authorization numbers, headquarters address, official email/phone/WhatsApp, social links, logo and photographs, partner permissions, verified impact figures, team profiles, and any bank or mobile-money details.

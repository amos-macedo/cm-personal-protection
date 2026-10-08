# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary visitors are people who hire private security on behalf of an event, a company, or an artist:

- **Live-event producers** — organizers of immersions and live events in the digital-marketing market (e.g. Subido ao Vivo, Extremo ao Vivo, O Novo Mercado ao Vivo, Protagon) who need security for the event and its headliners.
- **Companies** — hiring private security for executives or corporate events.
- **Artists and their management/production companies.**

Their job: assess whether CM Personal Protection is serious, discreet, and experienced enough to entrust with someone's physical safety, then request a proposal.

Not a primary audience: the VIP/influencer contracting directly (they appear as proof, not as the target buyer).

## Product Purpose

Single, fixed institutional site for CM Personal Protection® — a company specialized in private and personal security for large companies, public figures, artists, and large events. It exists to build trust and generate proposal requests. Success = a qualified visitor contacts the company to request a personalized proposal.

## Positioning

Personal security with a documented track record at the major live events of Brazil's digital-marketing scene, led by its own director in the field, combining risk assessment, planning, a specialized team, and discretion — every service adapted to the individual needs of each client and event.

## Operating Context

- Service flow (from the official presentation): contact → risk assessment (event type, participant profile, environment) → personalized security plan/proposal → operation throughout the event.
- Services: risk assessment; security planning (prevention, access control, participant screening, camera monitoring, coordination with local authorities, emergency protocols); specialized team (advanced security techniques, crowd management, first aid, crisis management); advanced technology (video surveillance, metal detection, electronic access control); discretion and professionalism.
- Base of operation: São Paulo.

## Capabilities and Constraints

- Site is a single fixed page for this one company; no multi-tenant/slug logic.
- Stack: TanStack Start + React + Tailwind v4, synced with Lovable (do not rewrite pushed git history).
- All site content lives in `src/content/site.ts`.
- **Undecided / missing:** official WhatsApp number and company Instagram. Until provided, the primary CTA opens an email to the official address. Coverage region beyond São Paulo, 24h availability, armed/unarmed policy, team size, and founding year are not confirmed — do not state them.

## Brand Commitments

- Name: **CM Personal Protection®** (registered mark).
- Official logo: "C" monogram + wordmark, extracted from the presentation (`public/logo-full.png`, `public/logo-mark.png`).
- Source of truth for brand and copy: `docs/brand/cm-personal-protection-apresentacao.pdf` (not published on the site). Do not invent company information beyond it and the confirmed facts below.
- Voice: formal, reassuring, discreet; Brazilian Portuguese.

## Evidence on Hand

- **Leadership (confirmed):** Cledjan Medeiros — Gestor de Segurança and Diretor de Segurança Privada, CM Personal Protection, São Paulo. He is the man photographed throughout the presentation. Personal Instagram: `@medeiros_cx`. He has handled security logistics for digital-market experts at Protagon (Wendel Carvalho), O Novo Mercado ao Vivo (Ícaro de Carvalho), Subido ao Vivo (Pedro Sobral), and Extremo ao Vivo (Tiago Tessmann).
- **Official email (confirmed):** cmpersonalprotection@gmail.com
- **Client proof (authorized for public use):** photos with @pedrosobral, @tiagotessmann, @priscila_zillo, @icarode.carvalho, @berudolph (crops in `src/assets/cm/`). Other people in those photos are already blurred in the source.
- **Absent — do not fabricate:** testimonials or quotes from clients, numeric metrics (operations count, years, team size), certifications, press, pricing.

## Product Principles

1. **Discretion is the product.** Nothing on the site should expose more than a client would want exposed.
2. **Proof over claims.** Lead with real events, real clients, and the real director; never inflate.
3. **Personalized, not packaged.** Every message reinforces that security is planned per client and per event.
4. **One clear next step.** Every section points to requesting a confidential proposal.

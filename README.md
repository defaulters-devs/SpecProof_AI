# SpecProof AI

> **Procurement Decisions, Backed by Evidence.**<br />
> *From scattered quotations to structured, verifiable purchasing decisions.*

Developed by **Team DEFAULTERS**

---

## 1. Project Overview

**SpecProof AI** is an AI-powered procurement intelligence and quotation verification platform engineered to help organizations convert unstructured purchase requirements and vendor quotations into structured, comparable, and evidence-backed purchasing decisions.

Its central principle is:
> **Every important procurement claim should have evidence, a verification status, and a traceable explanation.**

### Core Product Principles
1. **Evidence-Linked Verification:** Technical and commercial claims are corroborated against authoritative datasheets, OEM documentation, and supplier registries.
2. **Requirement-Level Compliance:** Non-negotiable mandatory specifications are explicitly validated; unknown or ambiguous items are never assumed compliant.
3. **Human-Controlled Decisions:** Automated intelligence assists but never bypasses human authorization. Consequential purchase orders require verified sign-off.

---

## 2. Capabilities & Workflow

SpecProof AI delivers a 6-stage structured pipeline:
1. **Requirement Extraction:** Converts raw RFPs, emails, and PDFs into structured requirement parameters and mandatory constraints.
2. **Specification Normalization:** Standardizes disparate units, nomenclature, and SKU aliases for apples-to-apples comparison.
3. **Supplier Research with TinyFish:** Researches vendor and manufacturer documentation to gather empirical evidence for product claims.
4. **Evidence-Based Verification:** Evaluates claims against three explicit states:
   - `Verified`: Corroborated by official documentation.
   - `Contradicted`: Available evidence directly conflicts with quoted specs.
   - `Unknown`: Insufficient evidence in accessible records (never treated as compliant).
5. **Cost & Anomaly Analysis:** Normalizes true total costs and surfaces variances and missing fees.
6. **Human Approval & Audit Trail:** Compiles findings into an immutable, audit-ready decision docket.

---

## 3. Technology Stack & Implementation Status

| Component | Technology | Status |
| :--- | :--- | :--- |
| **Frontend Client** | React 19, TypeScript, Vite 8, Modern CSS Design System | **IMPLEMENTED** |
| **Backend Services** | Java 21, Spring Boot 3.x REST API | **IMPLEMENTED** |
| **Supplier Research** | TinyFish API Integration | **IMPLEMENTED** |
| **Persistence & Audits** | PostgreSQL Relational Database Schema | **IMPLEMENTED** |
| **Document Intelligence** | Document OCR / Parsing & NLP Specification Normalizer | *In Development* |

---

## 4. Team DEFAULTERS

The platform is developed by:
1. **Jay Chaurasia** — [GitHub](https://github.com/Jaychaurasia) | [LinkedIn](https://www.linkedin.com/in/jay-chaurasia/)
2. **Kunal Soni** — [GitHub](https://github.com/kunal7828-soni) | [LinkedIn](https://www.linkedin.com/in/kunal-soni-dev)
3. **Krishnkant Chaurasia** — [GitHub](https://github.com/MrChaurasiaJi) | [LinkedIn](https://www.linkedin.com/in/krashnkantchaurasia/)
4. **Piyush Bramhe** — [GitHub](https://github.com/piyush-bramhe) | [LinkedIn](https://www.linkedin.com/in/piyushbramhe/)

### Team Profile Configuration
All developer URLs are centralized in [`src/config/team.ts`](./src/config/team.ts). Update the placeholder URLs before deploying to production.

---

## 5. Getting Started Locally

### Prerequisites
- Node.js `v18+` (Tested on Node.js `v24.17.0`)
- npm `v9+` (Tested on npm `v11.13.0`)

### Installation & Execution
```bash
# Clone the repository
git clone https://github.com/defaulters-devs/SpecProof_AI.git
cd SpecProof_AI

# Install dependencies
npm install

# Start local development server
npm run dev

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 6. Public Hosting & Deployment

The frontend produces a high-performance static build in `./dist`.

### Deployment Options:
- **Vercel / Netlify:** Connect the GitHub repository; set the build command to `npm run build` and output directory to `dist`.
- **Cloudflare Pages / GitHub Pages:** Point to `./dist` after running `npm run build`.

---

## 7. Status & Disclaimer
This release is a public-facing landing page and frontend demonstration interface. The authentication modal operates in honest demonstration mode (no credentials transmitted or cached) until the Spring Boot backend service is connected.

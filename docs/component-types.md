# Component Types

TEDI ships two kinds of components: **TEDI-Ready** and **Community**. They differ in who maintains them, how contributions are reviewed, and who is responsible when something breaks. This guide explains how to tell them apart and what to expect from each.

---

## At a Glance

| | **TEDI-Ready** | **Community** |
|---|---|---|
| **Maintained by** | The TEDI team | The contributor / community |
| **Review before merge to `rc`** | Required — TEDI team review | No TEDI-team approval required (still via pull request) |
| **Unit tests** | Required | Optional (recommended) |
| **Design & accessibility guidelines** | Strictly enforced | Encouraged |
| **Bug fixes & stability** | Owned by the TEDI team | Owned by the contributor / community |

> **Rule of thumb:** if the TEDI team guarantees it, it's **TEDI-Ready**. If the community owns it, it's a **Community** component.

---

## TEDI-Ready Components

These components are fully **supervised and maintained by the TEDI team**.

- Updates and contributions are **reviewed by the TEDI team** before merging into the `rc` branch.
- They **require unit tests**.
- They follow **strict design and accessibility guidelines**.
- The TEDI team ensures stability and fixes issues in these components.

Use TEDI-Ready components when you need a stable, supported foundation — they are the safest choice for production.

---

## Community Components

These are **community-driven components**, and the **community is responsible for maintaining them**.

- **Contributors own their components** — they are responsible for bug fixes, updates, and stability.
- Unit tests are **optional but recommended**.
- **Anyone can contribute** without TEDI-team approval. Changes still go through the standard pull request process — this only removes the requirement for TEDI-team review, it does not allow pushing directly to `rc`.
- Community contributions can still improve TEDI-Ready components, but those changes **must go through TEDI-team review**.

---

## Responsibility When Components Depend on Each Other

A Community component may depend on a TEDI-Ready component. When an issue arises, responsibility is decided by **where the bug actually lives**:

| Where the issue originates | Who handles it |
|---|---|
| A defect **inside the TEDI-Ready** dependency | The **TEDI team** |
| A defect **inside the Community** component itself | The **contributor / community** |
| **Incorrect usage** of a TEDI-Ready component by the Community component (wrong props, unsupported pattern) | The **contributor / community** |
| A **broken or incompatible contract** in the TEDI-Ready component (e.g. a breaking API change) | The **TEDI team** |

In other words: the TEDI team stands behind the TEDI-Ready parts it maintains — including their public API contracts — but a bug inside a Community component, or its misuse of a TEDI-Ready component, remains the responsibility of whoever owns that component, even when it consumes TEDI-Ready building blocks.

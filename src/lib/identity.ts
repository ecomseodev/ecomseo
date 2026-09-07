/**
 * Canonical identity facts for Fabian van Til.
 *
 * The Person node lives on fabianvantil.com, which is the entity home.
 * ecomseo.co does not mint its own Person; every Fabian node here references
 * FABIAN_PERSON_ID so Google resolves one entity across all three sites.
 * That IRI must stay byte-identical to the one fabianvantil.com emits,
 * trailing slash before the fragment included.
 *
 * Mirrored in fabianvantil.com/src/lib/constants.ts and
 * akravo.com/src/lib/identity.ts. Change all three together or not at all.
 *
 * The job title is deliberately one English string in all six locales. It is a
 * free-text literal with no @id to disambiguate it, so six translations of one
 * property on one node would read as six contradictory claims. Identical
 * literals across domains are the corroboration signal. Visible copy is still
 * translated; this is schema only, matching the existing convention in this
 * file (knowsAbout, areaServed and description are already English-only).
 */
export const FABIAN_ENTITY_HOME = "https://fabianvantil.com/";
export const FABIAN_PERSON_ID = "https://fabianvantil.com/#person";
export const FABIAN_JOB_TITLE = "Entrepreneur and organic growth strategist";
export const FABIAN_NAME = "Fabian van Til";
export const FABIAN_IMAGE = "/images/framer/fabian-van-til-new.jpeg";

export const FABIAN_SAME_AS = [
  "https://x.com/til_fabian",
  "https://www.linkedin.com/in/fabian-van-til",
  "https://www.youtube.com/@fabian-ecomseo",
  "https://www.instagram.com/fabianvantil",
  "https://linktr.ee/fabianvantil",
  FABIAN_ENTITY_HOME,
];

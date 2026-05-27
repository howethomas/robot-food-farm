/**
 * The canonical vCon for the Robot Food Farm homepage.
 *
 * Standard spec fields are at the top level (vcon, uuid, created_at,
 * subject, parties, dialog, analysis, attachments, signatures). Anything
 * not part of the spec — biographical context, lineage, tagline, repo
 * counts — lives inside `meta`, which is the spec's documented extension
 * hook.
 *
 * Data sourced from github.com/howethomas/howe-corpus (corpus.yaml, 392 items).
 */
export const homepageVcon = {
  vcon: '0.0.2',
  uuid: '0192e7c4-rff0-7000-8000-robotfoodfarm00',
  created_at: '2026-05-26T00:00:00Z',
  updated_at: '2026-05-26T00:00:00Z',
  subject: 'Thomas McCarthy-Howe',

  meta: {
    also_known_as: ['Thomas Spencer McCarthy-Howe', 'Thomas Howe', 'Mr. Mashup'],
    affiliation: {
      current: 'VCONIC Inc. (co-founder and CTO, 2025-09)',
      primary: 'Strolid (Partner and CTO, then advisory)',
      standards: 'IETF vCon Working Group (co-chair, original author of the spec)',
    },
    tagline: 'growing structured data for humans and machines',
    career_span: '1984 — present',
    documentation_home: 'https://www.conserver.io',
    lineage: [
      { name: 'Julian Bussgang', org: 'Signatron', era: '1980s', topic: 'meteor burst and troposcatter modems' },
      { name: 'Jeff Bernstein', org: 'PictureTel', era: '1990s', topic: 'H.261 codec, first H.323 softclient' },
      { name: 'Howard Resnikoff', org: 'Aware, Inc. + Analog Devices', era: 'mid-1990s', topic: 'first commercial DSL chipset (DMT)' },
      { name: 'Henning Schulzrinne', org: 'Columbia / Sipcom', era: 'early 2000s', topic: 'commercializing SIP research' },
      { name: 'Perry Evans', org: 'VCONIC', era: '2025 — present', topic: 'co-founder; Jabber Inc. veteran; ecosystem expansion playbook' },
      { name: 'Jeremie Miller', org: 'VCONIC', era: '2025 — present', topic: 'co-founder; creator of Jabber / XMPP' },
    ],
    past_roles: [
      { org: 'Signatron, Inc.', role: 'student engineer', era: 'mid-1980s' },
      { org: 'PictureTel', role: 'engineer', era: 'late 1980s — 1990s' },
      { org: 'Aware, Inc. + Analog Devices', role: 'partner engineer', era: 'mid-1990s' },
      { org: 'Pingtel', role: 'UI and DSP architect (xpressa)', era: 'circa 2000' },
      { org: 'Sipcom (Columbia U. spinout)', role: 'CTO', era: 'early 2000s' },
      { org: 'Comverse Technology', role: 'U.S. CTO for VoIP', era: 'mid-2000s' },
      { org: 'L3Harris Technologies (Melbourne, FL)', role: 'System Architect — Call Control, US National Airspace Voice Service', era: '2012-06 — 2013-03' },
      { org: 'Tendigit', role: 'founder', era: 'circa 2009' },
      { org: 'Mindful (post Alpine acquisition of Tendigit)', role: 'engineering leadership', era: '2010s' },
      { org: 'Medallia (acquired Mindful, 2022)', role: 'integrated', era: '2022' },
      { org: 'Strolid, Inc.', role: 'Partner and CTO, then advisory', era: '2022 — present' },
      { org: 'VCONIC Inc.', role: 'co-founder and CTO', era: '2025-09 — present' },
    ],
    corpus_size: 392,
    robot_food: true,
  },

  parties: [
    {
      name: 'Thomas McCarthy-Howe',
      role: 'author',
      mailto: 'hello@robotfoodfarm.example',
      meta: {
        github: 'https://github.com/howethomas',
        linkedin: 'https://www.linkedin.com/in/howethomas',
        ietf: 'https://datatracker.ietf.org/person/Thomas%20McCarthy-Howe',
        documentation: 'https://www.conserver.io',
      },
    },
  ],
  dialog: [
    {
      id: 'talk-tadsummit-2021-strolid-keynote',
      type: 'keynote',
      venue: 'tadsummit',
      date: '2021-12-08',
      title: 'TADSummit 2021 — Strolid keynote (vCon proposal)',
      url: 'https://blog.tadsummit.com/2021/12/08/strolid-keynote-vcons/',
    },
    {
      id: 'talk-tadsummit-2022-portugal',
      type: 'keynote',
      venue: 'tadsummit',
      date: '2022-11-08',
      title: 'TADSummit 2022 Portugal — vCon keynote',
      url: 'https://youtu.be/ZBRJ6FcVblc',
    },
    {
      id: 'talk-ietf-115-london-2022',
      type: 'ietf',
      venue: 'ietf',
      date: '2022-11',
      title: 'IETF 115 London — vCon presentation',
      url: 'https://youtu.be/dJsPzZITr_g',
    },
    {
      id: 'talk-ietf-116-yokohama-bof',
      type: 'ietf-bof',
      venue: 'ietf',
      date: '2023-03',
      title: 'IETF 116 BoF (Yokohama) — vCon',
      url: 'https://youtu.be/EF2OMbo6Qj4',
    },
    {
      id: 'talk-tadsummit-2023-paris-keynote',
      type: 'keynote',
      venue: 'tadsummit',
      date: '2023-10',
      title: 'TAD Summit 2023 Paris — vCon keynote',
      url: 'https://youtu.be/TVq7Y1SoGo4',
    },
    {
      id: 'talk-tadsummit-2024-rise-and-rise-of-vcon',
      type: 'keynote',
      venue: 'tadsummit',
      date: '2024-10',
      title: 'The rise and rise of vCon',
    },
  ],
  analysis: [
    {
      id: 'medium-laws-of-communications-mashups',
      type: 'essay',
      venue: 'medium',
      date: '2015-05-11',
      title: 'The laws of communications mashups',
      url: 'https://medium.com/@thomashowe/the-laws-of-communications-mashups-aeda2aadeb31',
    },
    {
      id: 'medium-introducing-kisst',
      type: 'essay',
      venue: 'medium',
      date: '2015-06-08',
      title: 'Introducing KISST',
      url: 'https://medium.com/@thomashowe/introducing-kisst-b38f7d164171',
    },
    {
      id: 'medium-automation-age-of-business-communications',
      type: 'essay',
      venue: 'medium',
      date: '2017-06-06',
      title: 'The automation age of business communications',
      url: 'https://medium.com/the-mobile-contact-center/the-automation-age-of-business-communications-2d41d638fdc0',
    },
    {
      id: 'medium-most-important-business-communications-problem',
      type: 'essay',
      venue: 'medium',
      date: '2018-05-02',
      title: 'The most important business communications problem and why',
      url: 'https://medium.com/the-mobile-contact-center/the-most-important-business-communications-problem-and-why-14bdc542bbbc',
    },
    {
      id: 'medium-beyond-unified-communications',
      type: 'essay',
      venue: 'medium',
      date: '2018-05-06',
      title: 'Beyond unified communications — optimized vs unified',
      url: 'https://medium.com/the-mobile-contact-center/beyond-unified-communications-optimized-vs-unified-e93852f5a81e',
    },
  ],
  attachments: [
    {
      id: 'draft-ietf-vcon-vcon-container',
      type: 'internet-draft',
      venue: 'ietf',
      title: 'vCon Conversation Container (IETF core draft)',
      authorship: 'co-author',
      co_authors: ['Dan Petrie'],
      url: 'https://datatracker.ietf.org/doc/draft-ietf-vcon-vcon-container/',
    },
    {
      id: 'draft-ietf-vcon-overview',
      type: 'internet-draft',
      venue: 'ietf',
      title: 'The vCon — Conversation Data Container — Overview',
      authorship: 'primary',
      url: 'https://datatracker.ietf.org/doc/draft-ietf-vcon-overview/',
    },
    {
      id: 'patent-us9762734-intermediary-device-2017',
      type: 'patent',
      venue: 'uspto',
      date: '2017-09-12',
      title: 'US 9,762,734 — intermediary device for data message network routing',
      co_inventors: ['Gary George Brandt'],
      url: 'https://patents.google.com/patent/US9762734',
    },
    {
      id: 'patent-us11665282b2-secure-transitory-data-storage-2023',
      type: 'patent',
      venue: 'uspto',
      date: '2023-05-30',
      title: 'US 11,665,282 — secure transitory data storage and management',
      url: 'https://patents.google.com/patent/US11665282B2',
    },
    {
      id: 'code-howe-corpus',
      type: 'code-repo',
      venue: 'github',
      title: 'howe-corpus — 392-item vCon-structured archive',
      url: 'https://github.com/howethomas/howe-corpus',
    },
    {
      id: 'code-vcon-dev',
      type: 'code-org',
      venue: 'github',
      title: 'vcon-dev — implementations and tools',
      url: 'https://github.com/vcon-dev',
    },
  ],
  signatures: [
    {
      alg: 'EdDSA',
      kid: 'did:web:robotfoodfarm.example#key-1',
      sig: 'placeholder.signature.value',
    },
  ],
};

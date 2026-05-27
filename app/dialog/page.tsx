import SectionPage from '@/components/SectionPage';
import Entry from '@/components/Entry';
import CorpusCallout from '@/components/CorpusCallout';

export const metadata = { title: 'Dialog — Robot Food Farm' };

export default function Dialog() {
  return (
    <SectionPage
      field="dialog"
      title="Dialog."
      lede="Twenty-six talks, keynotes, and podcasts indexed in the corpus. A representative subset below — the arc from the 2007 mashup era through the years vCon moved from a slide to a working group document."
    >
      <section className="space-y-1">
        <Entry
          date="2021-12-08"
          kind="keynote · TADSummit"
          title="Strolid keynote — the vCon proposal"
          meta="earliest major public framing of vCon"
          body={
            <p>
              The keynote that first put vCons in front of the telecom industry: a
              proposal that the conversation itself should be a portable, structured
              artifact rather than an internal product of whoever recorded it last.
            </p>
          }
          action={{
            label: 'tadsummit writeup',
            href: 'https://blog.tadsummit.com/2021/12/08/strolid-keynote-vcons/',
          }}
        />

        <Entry
          date="2022-11-08"
          kind="keynote · TADSummit Portugal"
          title="vCon keynote — Aveiro"
          meta="vCon on the product roadmap"
          body={
            <p>
              The talk that pushed vCon from concept into something businesses should
              actually plan around.
            </p>
          }
          action={{ label: 'watch on youtube', href: 'https://youtu.be/ZBRJ6FcVblc' }}
        />

        <Entry
          date="2022-11"
          kind="ietf · 115 London"
          title="vCon presentation at IETF 115"
          meta="entering the standards world"
          body={
            <p>
              First serious presentation of vCon into the IETF process. The room where
              this stops being a talk and starts being a draft.
            </p>
          }
          action={{ label: 'watch on youtube', href: 'https://youtu.be/dJsPzZITr_g' }}
        />

        <Entry
          date="2023-03"
          kind="ietf · 116 Yokohama BoF"
          title="vCon Birds-of-a-Feather session"
          meta="path to working group"
          body={
            <p>
              The BoF that gathered the community of interest required to charter a
              working group. The chartering decision flowed from this room.
            </p>
          }
          action={{ label: 'watch on youtube', href: 'https://youtu.be/EF2OMbo6Qj4' }}
        />

        <Entry
          date="2023-10"
          kind="keynote · TAD Summit Paris"
          title="vCon keynote — Paris"
          meta="ecosystem coming together"
          body={
            <p>
              Keynote tracing the year between Yokohama and Paris: drafts adopted,
              implementations spreading, the format starting to be assumed rather than
              argued for.
            </p>
          }
          action={{ label: 'watch on youtube', href: 'https://youtu.be/TVq7Y1SoGo4' }}
        />

        <Entry
          date="2024-10"
          kind="keynote · TADSummit 2024"
          title="The rise and rise of vCon"
          meta="vCon meets SCITT and governance"
          body={
            <p>
              Sponsor keynote walking through the years from 2021 concept to IETF
              ecosystem, and pivoting into SCITT as the governance and provenance
              layer the conversation file needs to live a long life.
            </p>
          }
        />

        <Entry
          date="2025-02-18"
          kind="podcast · ITEXPO"
          title="From automotive to AI — how vCon is transforming customer experience"
          meta="why vCons matter in the deepfake era"
          body={
            <p>
              Interview tying the origin story (high-volume automotive operations) to
              the present: CX, AI agents, deepfake-era sensitivity, and the need for
              structured, signed conversation records.
            </p>
          }
        />
      </section>

      <CorpusCallout
        count="26 talks"
        blurb="are indexed in the corpus, from mashup-era ETel demos in 2007 through TADSummit, IETF, ITEXPO, and CPaaSAA sessions in 2025."
        href="https://github.com/howethomas/howe-corpus/tree/main/vcons/talks"
        label="open vcons/talks/ →"
      />
    </SectionPage>
  );
}

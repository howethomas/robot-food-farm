import SectionPage from '@/components/SectionPage';
import ThemeArc from '@/components/ThemeArc';
import CorpusCallout from '@/components/CorpusCallout';

export const metadata = { title: 'Analysis — Robot Food Farm' };

export default function Analysis() {
  return (
    <SectionPage
      field="analysis"
      title="Analysis."
      lede="Long-form writing, organized as arcs. Five threads run through the work before vCon, plus the bridge document that opens into it. Each arc lists its canonical pieces. Click a title to open the original at its source."
    >
      <section className="space-y-1">
        <ThemeArc
          num="01"
          span="2007 — 2010"
          title="Mashups."
          blurb={
            <p>
              The era that earned the durable nickname{' '}
              <em>Mr. Mashup</em>. The argument: communications have to become
              composable software primitives, not vertical products. Voice as an
              ingredient, not a service. Two artifacts anchor the period — the
              O’Reilly ETel 2007 demo that put the thesis on stage, and the 2008{' '}
              <em>Voice Is A Spice</em> deck that gave it a name.
            </p>
          }
          items={[
            {
              date: '2007-02-26',
              kind: 'blog · thomashowe.blogspot',
              title: 'ETel Telephony Mashup Finalist? (going in)',
              href: 'https://thomashowe.blogspot.com/2007/02/etel-telephony-mashup-finalist.html',
            },
            {
              date: '2007-02-27',
              kind: 'blog · thomashowe.blogspot',
              title: 'After Hours Doctor’s Office (O’Reilly ETel mashup demo)',
              href: 'https://thomashowe.blogspot.com/2007/02/after-hours-doctors-office-page.html',
            },
            {
              date: '2007-03-04',
              kind: 'blog · thomashowe.blogspot',
              title: 'The Human Race — ETel 07 (post-event recap)',
              href: 'https://thomashowe.blogspot.com/2007/03/human-race-etel-07.html',
            },
            {
              date: '2008-03',
              kind: 'slides · slideshare',
              title: 'Voice Is A Spice (21-slide deck)',
              href: 'https://www.slideshare.net/slideshow/voice-is-a-spice/306536',
            },
            {
              date: '2008',
              kind: 'slides · slideshare',
              title: 'Enterprise Voice Mashups (BroadSoft-era companion deck)',
              href: 'https://www.slideshare.net/slideshow/enterprise-voice-mashups/108270',
            },
            {
              date: '2009-11',
              kind: 'talk · telco 2.0 brainstorm · london',
              title: 'Cooking with Voice (no public recording; carries the spice thesis into industry)',
            },
            {
              date: '2010-02',
              kind: 'executive briefing · stl partners',
              title: 'Voice & Messaging 2.0 — new API use cases',
              href: 'https://stlpartners.com/research/voice-messaging-2-0-new-api-use-cases/',
            },
            {
              date: '2010',
              kind: 'book · self-published',
              title: 'Cloud Communications Book (16-contributor ebook)',
            },
          ]}
          note="Reading order: the three 2007 blog posts give you the live experience of the ETel demo; the 2008 SlideShare deck is the canonical artifact of the spice thesis; the 2010 STL Partners briefing is the cleanest industry-audience condensation of the whole period."
        />

        <ThemeArc
          num="02"
          span="2015"
          title="KISST and the texting-first thesis."
          blurb={
            <p>
              The proposal that messaging, not voice, was the new center of
              business communications. Read the three pieces in order; they form
              the framing, the proposal, and the design rationale.
            </p>
          }
          items={[
            {
              date: '2015-05-11',
              kind: 'essay · medium',
              title: 'The laws of communications mashups',
              href: 'https://medium.com/@thomashowe/the-laws-of-communications-mashups-aeda2aadeb31',
            },
            {
              date: '2015-06-08',
              kind: 'essay · medium',
              title: 'Introducing KISST',
              href: 'https://medium.com/@thomashowe/introducing-kisst-b38f7d164171',
            },
            {
              date: '2015-07-17',
              kind: 'essay · medium',
              title: 'Understanding KISST Design — Part 1',
              href: 'https://medium.com/@thomashowe/understanding-kisst-design-part-1-fe2e7c6ffe60',
            },
            {
              date: '2015-06-23',
              kind: 'essay · medium',
              title: 'KISST — TADHack Global 2015 winner (Ballot Box)',
              href: 'https://medium.com/@thomashowe/kisst-tadhack-global-2015-winner-1c127ae89a89',
            },
          ]}
          note="Proof-by-demo: Ballot Box won TADHack Global 2015 the same month KISST launched."
        />

        <ThemeArc
          num="03"
          span="2015 — 2018"
          title="The smartphone as conversation platform."
          blurb={
            <p>
              Eponymous Medium publication. The frame reorganizes business
              communications around the device people actually carry. The best
              single entry is the 2017 periodization; the 2015 piece is the
              cleaner primer; the 2018 piece is the corrective.
            </p>
          }
          items={[
            {
              date: '2017-06-06',
              kind: 'essay · medium',
              title: 'The automation age of business communications',
              href: 'https://medium.com/the-mobile-contact-center/the-automation-age-of-business-communications-2d41d638fdc0',
            },
            {
              date: '2015-10-27',
              kind: 'essay · medium',
              title: 'Sites, apps and bots',
              href: 'https://medium.com/the-mobile-contact-center/sites-apps-and-bots-4a58b3eea95d',
            },
            {
              date: '2018-05-06',
              kind: 'essay · medium',
              title: 'Beyond unified communications — optimized vs unified',
              href: 'https://medium.com/the-mobile-contact-center/beyond-unified-communications-optimized-vs-unified-e93852f5a81e',
            },
          ]}
        />

        <ThemeArc
          num="04"
          span="2018"
          title="Call avoidance and the contact-center critique."
          blurb={
            <p>
              The operational thesis: the central problem in business
              communications is call avoidance, and smartphone-native messaging
              is the answer the industry kept refusing to commit to. The polemic
              follows the proposition by three months.
            </p>
          }
          items={[
            {
              date: '2018-05-02',
              kind: 'essay · medium',
              title: 'The most important business communications problem and why',
              href: 'https://medium.com/the-mobile-contact-center/the-most-important-business-communications-problem-and-why-14bdc542bbbc',
            },
            {
              date: '2018-08-13',
              kind: 'essay · medium',
              title: 'Google Contact Center AI looks backwards',
            },
          ]}
        />

        <ThemeArc
          num="05"
          span="2009 — 2021"
          title="Intermediary devices and session management."
          blurb={
            <p>
              The engineering line that ran in parallel to the writing and quietly
              became the substrate for vCon. Once a session can be an object,
              the next move is the conversation as an object.
            </p>
          }
          items={[
            {
              date: '2017-09-12',
              kind: 'patent · uspto',
              title: 'US 9,762,734 — intermediary device for data message network routing',
              href: 'https://patents.google.com/patent/US9762734',
            },
            {
              date: '2021-10-12',
              kind: 'patent · uspto',
              title: 'US 11,146,517 — adds the lobby-construct assignment',
              href: 'https://patents.google.com/patent/US11146517',
            },
            {
              date: '2022-08-30',
              kind: 'patent · uspto',
              title: 'US 11,431,847 — intermediary device and contact-center enhancement',
              href: 'https://patents.google.com/patent/US11431847B2',
            },
          ]}
          note="The TDC Bridge family. Priority dates reach back to 2016, with antecedents in 2009 cloud callback work."
        />

        <ThemeArc
          num="06"
          span="2020"
          title="Bridge — Addressing the Crowd."
          blurb={
            <p>
              The book-length manuscript that tightens the customer-contact and
              communications-design strands into something that wanted to be a
              standard. The immediate predecessor to the vCon proposal.
            </p>
          }
          items={[
            {
              date: '2020-12-22',
              kind: 'manuscript · unpublished',
              title: 'Addressing the Crowd (chapter index)',
              href: 'https://github.com/howethomas/howe-corpus/tree/main/vcons/writing',
            },
          ]}
          note="One year later, the TADSummit 2021 keynote proposes vCon by name."
        />
      </section>

      <CorpusCallout
        count="54 essays + 222 blog posts"
        blurb="are indexed in the corpus, each one already a vCon: parties, dialog, analysis, attachments. The arcs above are a reading path through the full set."
        href="https://github.com/howethomas/howe-corpus/tree/main/vcons"
        label="open vcons/writing/ and vcons/blog/ →"
      />
    </SectionPage>
  );
}

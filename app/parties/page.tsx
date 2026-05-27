import SectionPage from '@/components/SectionPage';
import Entry from '@/components/Entry';
import CorpusCallout from '@/components/CorpusCallout';

export const metadata = { title: 'Parties — Robot Food Farm' };

export default function Parties() {
  return (
    <SectionPage
      field="parties"
      title="Parties."
      lede="Four decades at the origin point of almost every generation of real-time communications technology, from troposcatter modems to vCon. Identity and background, in chronological order. Names used: Thomas McCarthy-Howe (inventor of record: Thomas Spencer McCarthy-Howe; also published as Thomas Howe; durable nickname: Mr. Mashup)."
    >
      <section className="space-y-1">
        <Entry
          date="mid-1980s"
          kind="signatron, inc."
          title="Meteor burst and troposcatter modems"
          meta="under Dr. Julian Bussgang and Prof. Jay Weitzen"
          body={
            <p>
              Hired as a UMass Lowell EE student into the Lexington defense
              electronics firm founded by <em>Bussgang Theorem</em> author
              Dr. Julian Bussgang. Work on meteor burst and troposcatter modems
              under Prof. Jay Weitzen. The discipline of extracting reliable
              communication from unreliable channels became a thread for the
              next forty years. Signatron alumni later seeded the DSL ecosystem.
            </p>
          }
        />

        <Entry
          date="late 1980s — 1990s"
          kind="picturetel"
          title="H.261 codec, far-end camera control, the first H.323 softclient"
          meta="under Jeff Bernstein"
          body={
            <p>
              Helped build the first commercial H.320 videoconferencing room
              system — the foundation of the industry that became unified
              communications. Implemented the H.261 codec on the DSPs of the
              day (motion estimation, DCT-based compression in real time).
              Built far-end camera control conformant to ITU-T H.224 and H.281.
              Led development of the first H.323 softclient, predating RFC 2543
              and SIP itself.
            </p>
          }
        />

        <Entry
          date="mid-1990s"
          kind="aware, inc. + analog devices"
          title="The first commercial DSL chipset"
          meta="with Dr. Howard Resnikoff"
          body={
            <p>
              Partnered with Dr. Howard Resnikoff — former Assistant Director of
              the NSF, foundational figure in wavelet theory — to design the
              first commercial DSL chipset. Multicarrier signal processing
              (discrete multitone, DMT) became the basis of ADSL and the global
              broadband infrastructure. The Aware DSP team included Michael
              Tzannes, a Signatron alumnus; the multicarrier expertise traveled
              with him.
            </p>
          }
        />

        <Entry
          date="circa 2000"
          kind="pingtel"
          title="UI and DSP architecture of the xpressa — the first commercial SIP hardphone"
          meta="with Dan Petrie (future vCon co-author)"
          body={
            <p>
              Designed the user interface and DSP architecture of the xpressa,
              the first commercial SIP hardphone. Worked alongside Dan Petrie,
              software architect of xpressa and — two decades later — co-author
              of the IETF vCon specification. The Pingtel codebase became
              sipXecs, one of the most influential open-source SIP servers and
              a training ground for a generation of engineers.
            </p>
          }
        />

        <Entry
          date="early 2000s"
          kind="sipcom · cto"
          title="Commercializing Henning Schulzrinne's SIP research"
          meta="Columbia University spinout"
          body={
            <p>
              Recruited by the Columbia University tech transfer office as CTO
              of Sipcom, the spinout commercializing the SIP research of
              Prof. Henning Schulzrinne (principal author of RFC 2543, RFC 3261,
              RTSP, and significant parts of RTP). The protocol made the trip
              from academic specification to production carrier infrastructure,
              and the role sat at that exact transition.
            </p>
          }
        />

        <Entry
          date="mid-2000s"
          kind="comverse technology · u.s. cto for voip"
          title="TDM-to-IP migration for one of the largest voicemail bases on earth"
          meta="3GPP IMS architecture"
          body={
            <p>
              Owned the architecture for migrating Comverse's installed base of
              mobile-operator voicemail and messaging from TDM signaling to IP
              and SIP, integrating with the emerging 3GPP IMS architecture.
              Five-nines availability, lawful intercept, integrated billing,
              regulatory compliance, and the operational tooling tier-one NOCs
              require — all of which still inform the architecture choices in
              the present platform.
            </p>
          }
        />

        <Entry
          date="2009 — 2022"
          kind="tendigit · mindful · medallia"
          title="Founded Tendigit; acquired by Alpine; operated as Mindful; acquired by Medallia"
          meta="callback and customer experience platform"
          body={
            <p>
              Founded Tendigit, the callback and customer experience platform,
              which was acquired by Alpine Investors and rebuilt as Mindful.
              Medallia acquired Mindful in 2022, folding callback and
              conversational orchestration into its experience management
              portfolio. The conviction that came out of this run — that
              conversational data is the most undertapped enterprise asset
              class — became the founding thesis of the next chapter.
            </p>
          }
        />

        <Entry
          date="2022 — present"
          kind="strolid · partner and cto, then advisory"
          title="Where vCon was incubated"
          meta="automotive BDC operations as proving ground"
          body={
            <p>
              Joined Strolid after the Medallia earnout. With the CEO,
              identified automotive dealership BDC operations as an ideal
              proving ground for conversational intelligence (high volume,
              regulatory exposure, direct revenue attribution). Inside Strolid,
              authored and shepherded the IETF vCon specification, and built
              the conversational intelligence platform on top of it.
            </p>
          }
        />

        <Entry
          date="2025-09 — present"
          kind="vconic, inc. · co-founder and cto"
          title="The commercial home for vCon"
          meta="co-founders previously built Jabber and XMPP"
          body={
            <p>
              Spun out of Strolid in 2026 to operate the vCon standard and its
              commercial platform independently. Co-founders previously built
              Jabber and XMPP — the open standards behind global real-time
              messaging — bringing the ecosystem-expansion playbook
              complementary to protocol authorship and operator experience.
              Patent-pending IP sits underneath the scalability layer.
            </p>
          }
        />

        <Entry
          date="2022 — present"
          kind="ietf vcon working group · co-chair"
          title="The standard"
          meta="co-author Dan Petrie · in final ratification in 2026"
          body={
            <p>
              Original author of the IETF vCon specification: the first open
              standard for structured conversational data across voice, video,
              chat, and email. Addresses what SIP, H.323, and WebRTC never did
              — durable identity and provenance, structured consent and
              chain-of-custody for GDPR, CCPA, PCI DSS and HIPAA, and a
              portable conversational record that decouples enterprises from
              proprietary contact-center platforms.
            </p>
          }
          action={{
            label: 'datatracker profile',
            href: 'https://datatracker.ietf.org/person/Thomas%20McCarthy-Howe',
          }}
        />

        <Entry
          kind="documentation home"
          title="conserver.io"
          meta="implementer-facing"
          body={
            <p>
              The home for vCon as deployed reality: the conserver, the
              schemas, the reference material. Where the engineering meets the
              standard.
            </p>
          }
          action={{ label: 'conserver.io', href: 'https://www.conserver.io' }}
        />

        <Entry
          kind="lineage · through-line"
          title="Bussgang → Bernstein → Resnikoff → Schulzrinne"
          meta="four mentors across forty years"
          body={
            <p>
              Bussgang at Signatron (1980s). Bernstein at PictureTel (1990s).
              Resnikoff at Aware (mid-1990s). Schulzrinne at Columbia/Sipcom
              (early 2000s). Four names that connect troposcatter modems to
              the conversation-as-object standard now in final IETF
              ratification.
            </p>
          }
        />
      </section>

      <CorpusCallout
        count="392 items"
        blurb="across talks, essays, patents, IETF drafts, and a 222-post blog archive are indexed under one subject: Thomas McCarthy-Howe."
        href="https://github.com/howethomas/howe-corpus"
        label="open the corpus repo →"
      />
    </SectionPage>
  );
}

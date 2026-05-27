import SectionPage from '@/components/SectionPage';
import Entry from '@/components/Entry';
import CorpusCallout from '@/components/CorpusCallout';

export const metadata = { title: 'Attachments — Robot Food Farm' };

export default function Attachments() {
  return (
    <SectionPage
      field="attachments"
      title="Attachments."
      lede="The supporting record. Eleven patent filings across eight families, eleven IETF drafts and working-group documents, plus the corpus itself. In the file formats engineers actually open: USPTO filings, IETF drafts, JSON, code."
    >
      <section className="space-y-1">
        <Entry
          date="ongoing"
          kind="ietf · core"
          title="draft-ietf-vcon-vcon-container"
          meta="working group document"
          body={
            <p>
              The core IETF specification of the vCon container: parties, dialog,
              analysis, attachments. Originally <code>draft-petrie-vcon</code>; now a
              working group deliverable. Co-author with Dan Petrie.
            </p>
          }
          action={{
            label: 'open draft',
            href: 'https://datatracker.ietf.org/doc/draft-ietf-vcon-vcon-container/',
          }}
        />

        <Entry
          date="2026-03-02"
          kind="ietf · overview"
          title="draft-ietf-vcon-overview"
          meta="purpose and scope"
          body={
            <p>
              Explains the purpose and scope of vCon as a standardized container for
              conversation-related data, metadata, analysis, and attachments. First
              submitted 2025-07-07; latest revision 2026-03-02.
            </p>
          }
          action={{
            label: 'open draft',
            href: 'https://datatracker.ietf.org/doc/draft-ietf-vcon-overview/',
          }}
        />

        <Entry
          date="ongoing"
          kind="ietf · privacy"
          title="draft-howe-vcon-lawful-basis"
          meta="consent and lawful basis"
          body={
            <p>
              Extension proposal: how lawful basis (GDPR-style consent and processing
              grounds) is carried inside a vCon, so the conversation file can be moved
              without losing what was permitted.
            </p>
          }
          action={{
            label: 'open draft',
            href: 'https://datatracker.ietf.org/doc/draft-howe-vcon-lawful-basis/',
          }}
        />

        <Entry
          date="2017-09-12"
          kind="patent · uspto"
          title="US 9,762,734 — intermediary device for data message network routing"
          meta="TDC Bridge — first in family"
          body={
            <p>
              Core patent of the TDC Bridge platform. An intermediary device that
              receives data messages and uses session-management tuples to route
              messages through a contact center. Co-inventor Gary George Brandt.
            </p>
          }
          action={{
            label: 'open on google patents',
            href: 'https://patents.google.com/patent/US9762734',
          }}
        />

        <Entry
          date="2023-05-30"
          kind="patent · uspto"
          title="US 11,665,282 — secure transitory data storage"
          meta="VHT · profile + vault manager"
          body={
            <p>
              Secure storage and management of transitory conversation data via a
              profile manager, callback manager, context analysis engine, and vault
              manager. Assignee Virtual Hold Technology Solutions.
            </p>
          }
          action={{
            label: 'open on google patents',
            href: 'https://patents.google.com/patent/US11665282B2',
          }}
        />

        <Entry
          date="2021-10-14"
          kind="patent · uspto"
          title="US 2021/0321002 — cloud callback platform"
          meta="profile + callback + context"
          body={
            <p>
              A cloud callback platform integrating a profile manager, callback and
              interaction managers, media server, and context analysis pipeline.
              Priority 2009-01-28.
            </p>
          }
          action={{
            label: 'open on google patents',
            href: 'https://patents.google.com/patent/US20210321002A1',
          }}
        />

        <Entry
          kind="code · github"
          title="howe-corpus"
          meta="392 items, vCon-structured"
          body={
            <p>
              The structured archive of talks, writing, patents, and code that this
              site is built from. Every item is itself a vCon. The site is the front
              end of that corpus.
            </p>
          }
          action={{
            label: 'github.com/howethomas/howe-corpus',
            href: 'https://github.com/howethomas/howe-corpus',
          }}
        />

        <Entry
          kind="code · github"
          title="vcon-dev"
          meta="implementations and tools"
          body={
            <p>
              The vCon community organization on GitHub: reference implementations,
              the conserver, tooling, and the surrounding ecosystem.
            </p>
          }
          action={{ label: 'github.com/vcon-dev', href: 'https://github.com/vcon-dev' }}
        />
      </section>

      <CorpusCallout
        count="11 patents + 11 IETF drafts"
        blurb="plus reference implementations and ecosystem code sit in the corpus, indexed alongside the rest of the supporting record."
        href="https://github.com/howethomas/howe-corpus/tree/main/vcons/patents"
        label="open vcons/patents/ →"
      />
    </SectionPage>
  );
}

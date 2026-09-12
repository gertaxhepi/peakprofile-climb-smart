import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import type { TemplateEntry } from './registry'

// PeakProfile palette
const SNOW = '#F6F5F2'
const ICE = '#DCE6F4'
const PLUM = '#2B1019'
const MUTED = '#5C5560'

function WaitlistConfirmation() {
  return (
    <Html lang="en">
      <Head />
      <Preview>You’re on the PeakProfile early-access list</Preview>
      <Body style={{ backgroundColor: SNOW, margin: 0, padding: '32px 16px' }}>
        <Container
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '16px',
            border: `1px solid ${ICE}`,
            maxWidth: '560px',
            margin: '0 auto',
            padding: '40px 36px',
            fontFamily:
              "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
          }}
        >
          <Text
            style={{
              color: PLUM,
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase' as const,
              margin: '0 0 24px',
            }}
          >
            PeakProfile
          </Text>

          <Heading
            as="h1"
            style={{
              color: PLUM,
              fontSize: '26px',
              fontWeight: 600,
              lineHeight: '1.3',
              margin: '0 0 20px',
            }}
          >
            You’re on the early-access list
          </Heading>

          <Text style={{ color: PLUM, fontSize: '16px', lineHeight: '1.6', margin: '0 0 16px' }}>
            Hi,
          </Text>
          <Text style={{ color: PLUM, fontSize: '16px', lineHeight: '1.6', margin: '0 0 16px' }}>
            Thanks for your interest in PeakProfile.
          </Text>
          <Text style={{ color: MUTED, fontSize: '16px', lineHeight: '1.6', margin: '0 0 16px' }}>
            I’m building PeakProfile to help mountaineers understand their readiness for Alpine
            objectives, discover suitable expeditions, and connect with others preparing for the
            same mountain.
          </Text>
          <Text style={{ color: MUTED, fontSize: '16px', lineHeight: '1.6', margin: '0 0 16px' }}>
            You’re now on the early-access list, and I’ll email you when the first version is ready
            to try.
          </Text>
          <Text style={{ color: MUTED, fontSize: '16px', lineHeight: '1.6', margin: '0 0 24px' }}>
            No newsletter—just the PeakProfile launch update.
          </Text>

          <Hr style={{ borderColor: ICE, margin: '8px 0 24px' }} />

          <Text style={{ color: PLUM, fontSize: '16px', lineHeight: '1.6', margin: '0 0 4px' }}>
            See you in the mountains,
          </Text>
          <Text style={{ color: PLUM, fontSize: '16px', fontWeight: 600, margin: '0' }}>
            Gerta
          </Text>
          <Text style={{ color: MUTED, fontSize: '14px', margin: '2px 0 12px' }}>
            Founder, PeakProfile
          </Text>
          <Section>
            <Link
              href="https://peakprofile.app"
              style={{ color: PLUM, fontSize: '14px', textDecoration: 'underline' }}
            >
              peakprofile.app
            </Link>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

export const template = {
  component: WaitlistConfirmation,
  subject: 'You’re on the PeakProfile early-access list',
  displayName: 'Early-access confirmation',
} satisfies TemplateEntry

import { Metadata } from "next";
import Container, { Section, SectionTitle } from "../components/container";

export const metadata: Metadata = {
  title: "Work | Rodrigo Thauby",
  description: "Home of Rodrigo Thauby",
};

export default function Work() {
  return (
    <>
      <Container className="min-h-[100vh]">
        <Section id="about">
          <SectionTitle title='About me.' />
          <p className="pb-8">My career has spanned front-end, back-end, and cloud infrastructure, with a deep focus on JavaScript, React, and AWS. I love taking ideas from whiteboard sketches to production-ready systems, and I thrive on helping teams grow, share knowledge, and ship software that actually solves problems.</p>
          <p className="pb-8">Along the way, I&apos;ve led small teams of developers, introduced CI/CD pipelines, modernized deployment strategies, and coached engineers to work smarter &mdash; not just harder. I believe in clear communication, maintainable code, and strong documentation as the foundation for any team&apos;s success.</p>

        </Section>
        <Section>
          <SectionTitle title='Where I&apos;ve Worked.' />
          <p className="pb-8">Over the years, I&apos;ve had the chance to work with companies big and small — from startups and studios to global platforms used by millions. Each role gave me new challenges, new tools, and new lessons that shaped the way I build software today.</p>

          <p className="pb-8">I&apos;m currently at Boulevard Consulting, where I lead a small team of engineers on their first large-scale deployment. We&apos;ve taken prototypes and rebuilt them into production-ready applications, migrating systems into DoD-owned environments and navigating strict security requirements. It&apos;s been equal parts engineering and culture-building, making sure the team not only ships but also grows.</p>

          <p className="pb-8">Before that, I spent several years at Evernote. I first joined as a Senior Engineer on the Editor team, where I worked on everything from browser extensions to building a JavaScript version of Skitch for mobile. Later, I stepped into an Engineering Manager role, leading the Growth and Out-of-App teams. My focus there was on mentorship, performance, and building a culture of ownership — the kind of environment where developers thrive and users see the impact.</p>

          <p className="pb-8">At Virtru, I shifted into security and encryption, designing and integrating UI components in React that were used across their apps. I introduced Front End standards with Storybook, helping multiple teams move faster while keeping consistency.</p>

          <p className="pb-8">I&apos;ve also worked in games and creative tech. At Sparkypants Studios, I jumped into a fast-paced launch cycle, designing UI for real-time gameplay data and seeing it through to shipping. At iStrategyLabs, I built high-interactivity experiences for brands — everything from marketing campaigns to CMS systems — and even created the company&apos;s first VR proof of concept in Unreal Engine.</p>

          <p className="pb-8">Earlier in my career, I worked at SocialCode, where I prototyped new advertising tools, and at Forio Business Simulations in San Francisco, where I built dashboards and simulation interfaces for top universities like Harvard, MIT, and Wharton. Those years gave me a foundation in data visualization, usability, and building products for demanding clients.</p>

        </Section>
      </Container>
    </>
  );
}
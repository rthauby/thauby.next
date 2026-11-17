import { Metadata } from "next";
import Container, { Section, SectionTitle } from "../components/container";
import { ProfileLinks } from "../components/profile-links";

export const metadata: Metadata = {
  title: "Work | Rodrigo Thauby",
  description: "Rodrigo Thauby's experience: engineering manager at Evernote, full-stack engineer at Boulevard Consulting building AI-powered tools for federal clients, and 17+ years of web engineering.",
};

const ROLES = [
  { title: 'Full Stack Software Engineer, Expert', company: 'Boulevard Consulting', years: '2023 – Present' },
  { title: 'Engineering Manager, Growth & Out-of-App', company: 'Evernote', years: '2020 – 2023' },
  { title: 'Senior Software Engineer, Editor', company: 'Evernote', years: '2019 – 2020' },
  { title: 'UI Engineer', company: 'Virtru', years: '2017 – 2019' },
  { title: 'UI Developer', company: 'Sparkypants Studios', years: '2017' },
  { title: 'Senior Developer', company: 'iStrategyLabs', years: '2013 – 2017' },
  { title: 'Senior Software Engineer', company: 'SocialCode', years: '2012 – 2013' },
  { title: 'Software Engineer', company: 'Forio Business Simulations', years: '2008 – 2012' },
];

export default function Work() {
  return (
    <>
      <Container className="min-h-[100vh]">
        <Section id="about">
          <SectionTitle title='About me.' />
          <p className="pb-8">My career has spanned front-end, back-end, and cloud infrastructure, with a deep focus on JavaScript, React, and AWS. I love taking ideas from whiteboard sketches to production-ready systems, and I thrive on helping teams grow, share knowledge, and ship software that solves problems.</p>
          <p className="pb-8">Along the way, I&apos;ve managed and led teams of developers, introduced CI/CD pipelines, modernized deployment strategies, and coached engineers to work smarter. I believe in clear communication, maintainable code, and strong documentation as the foundation for any team&apos;s success.</p>
          <ProfileLinks className="pb-8" />
        </Section>
        <Section>
          <SectionTitle title='Roles at a Glance.' />
          <ul className="pb-8 text-2xl/9">
            {ROLES.map((r) => (
              <li key={`${r.company}-${r.title}`} className="pb-4 sm:flex sm:justify-between sm:gap-8">
                <span><strong>{r.title}</strong> &middot; {r.company}</span>
                <span className="block text-gray-500 whitespace-nowrap">{r.years}</span>
              </li>
            ))}
          </ul>
        </Section>
        <Section>
          <SectionTitle title='Where I&apos;ve Worked.' />
          <p className="pb-8">I&apos;ve worked at companies big and small, from startups and studios to a platform used by millions.</p>

          <p className="pb-8">I&apos;m currently at Boulevard Consulting, where I lead a small team of engineers on their first large-scale deployment. We&apos;ve taken prototypes and rebuilt them into production-ready applications, migrating systems into DoD-owned environments and navigating strict security requirements. I also architected, built, and maintain the apps and cloud services behind AI-powered media transcription tools used by federal clients such as the DOJ and the Coast Guard. It&apos;s been equal parts engineering and culture-building, making sure the team not only ships but also grows.</p>

          <p className="pb-8">Before that, I spent several years at Evernote. I first joined as a Senior Engineer on the Editor team, where I worked on everything from browser extensions to building a JavaScript version of Skitch for mobile. Later, I stepped into an Engineering Manager role, leading the Growth and Out-of-App teams of 5–7 engineers. My focus there was on mentorship, performance, and building a culture of ownership. Three of my engineers earned promotions along the way.</p>

          <p className="pb-8">At Virtru, I shifted into security and encryption, designing and integrating UI components in React that were used across their apps. I introduced Front End standards with Storybook, helping multiple teams move faster while keeping consistency.</p>

          <p className="pb-8">I&apos;ve also worked in games and creative tech. At Sparkypants Studios, I jumped into a fast-paced launch cycle, designing UI for real-time gameplay data and seeing it through to shipping. At iStrategyLabs, I built interactive experiences for brands, from marketing campaigns to CMS systems, and even created the company&apos;s first VR proof of concept in Unreal Engine.</p>

          <p className="pb-8">Earlier in my career, I worked at SocialCode, where I prototyped new advertising tools, and at Forio Business Simulations in San Francisco, where I built dashboards and simulation interfaces for top universities like Harvard, MIT, and Wharton. Those years gave me a foundation in data visualization, usability, and building products for demanding clients.</p>

        </Section>
      </Container>
    </>
  );
}

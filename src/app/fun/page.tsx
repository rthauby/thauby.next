import { Metadata } from "next";
import Container, { Section, SectionTitle } from "../components/container";
import { Project } from "../types/project";
import ProjectViewer from "../components/project-viewer";
import PaintBrush from "../components/icons/paint-brush";
import Printed from "../components/icons/3d-printed";

export const metadata: Metadata = {
  title: "Fun Stuff | Rodrigo Thauby",
  description: "Home of Rodrigo Thauby",
};

const TASKS = {
  printed: {
    icon: <Printed />,
    title: '3D Printed'
  },
  painted: {
    icon: <PaintBrush />,
    title: 'Hand Painted'
  }
}

const MODELS = [
  {
    title: 'Cable',
    images: [
      'cable-001.png',
      'cable-002.png',
      'cable-003.png',
    ],
    description: 'From my go-to digital sculptor group, CA3D. 1/6 scale, 32cm tall, 3D printed and hand painted.\nCable is a battle-hardened, time-traveling mutant from the X-Men, known for his cybernetic enhancements, powerful telekinesis, and relentless fight to prevent a dark future.',
    tasks: [TASKS.printed, TASKS.painted]
  } as Project,
  {
    title: 'Chun-Li',
    images: [
      'chunli-001.png',
      'chunli-002.png',
      'chunli-003.png',
      'chunli-004.png',
    ],
    description: 'Also from CA3D. 1/6 scale, 34cm tall, 3D printed and hand painted.\nChun-Li is a skilled martial artist and Interpol officer from the Street Fighter series. Renowned for her lightning-fast kicks, determination, and iconic role as the first female fighter in the series.',
    tasks: [TASKS.printed, TASKS.painted]
  } as Project,
]

export default function Work() {
  return (
    <>
      <Container>
        <Section id="fun">
          <SectionTitle title='Fun Stuff.' />
          <div className="lg:grid grid-cols-3 gap-12">
            <div className='mb-24 col-span-2 text-2xl space-y-8'>
              <p>A collection of my favorite 3D printed models, mostly hand painted by myself. Some of them even sculpted by myself digitally, and others in real mixed media.</p>
            </div>
          </div>
          <div className="mx-auto">
            {MODELS.map((model) => (
              <ProjectViewer key={model.title} model={model} className="mb-24" />
            ))}
          </div>
        </Section>
      </Container>
    </>
  );
}
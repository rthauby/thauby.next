import { Metadata } from "next";
import Container, { Section, SectionTitle, SectionBody } from "../components/container";
import { Project } from "../types/project";
import ProjectViewer from "../components/project-viewer";
import PaintBrush from "../components/icons/paint-brush";
import Printed from "../components/icons/3d-printed";
import cable1 from './cable-001.png'
import cable2 from './cable-002.png'
import cable3 from './cable-003.png'
import chunli1 from './chunli-001.png'
import chunli2 from './chunli-002.png'
import chunli3 from './chunli-003.png'
import chunli4 from './chunli-004.png'

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
    images: [cable1, cable2, cable3],
    description: 'From my go-to digital sculptor group, CA3D. 1/6 scale, 32cm tall, 3D printed and hand painted.\nCable is a battle-hardened, time-traveling mutant from the X-Men, known for his cybernetic enhancements, powerful telekinesis, and relentless fight to prevent a dark future.',
    tasks: [TASKS.printed, TASKS.painted]
  } as Project,
  {
    title: 'Chun-Li',
    images: [chunli1, chunli2, chunli3, chunli4],
    description: 'Also from CA3D. 1/6 scale, 34cm tall, 3D printed and hand painted.\nChun-Li is a skilled martial artist and Interpol officer from the Street Fighter series. Renowned for her lightning-fast kicks, determination, and iconic role as the first female fighter in the series.',
    tasks: [TASKS.printed, TASKS.painted]
  } as Project,
]

export default function Work() {
  return (
    <>
      <Container>
        {/* <Section id="fun_header">
          <SectionTitle title='Fun Stuff.' />
          <SectionBody>
            <p>Stuff that keeps me busy and happy.</p>
          </SectionBody>
        </Section> */}
        <Section>
          <SectionTitle title='Finished Models.' />
          <SectionBody>
            <p>A collection of my favorite 3D printed models, mostly hand painted. Most are 3D Prints of art by talented sculptors online, but some of them are sculpted by myself in real media and digitally.</p>
          </SectionBody>
          <div className="mx-auto pt-24 ">
            {MODELS.map((model) => (
              <ProjectViewer key={model.title} model={model} className="mb-24" />
            ))}
          </div>
        </Section>
      </Container>
    </>
  );
}
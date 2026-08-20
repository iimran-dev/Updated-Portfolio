import { Nav } from '../components/Nav';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { WorkFlow } from '../components/WorkFlow';
import { Work } from '../components/Work';
import { Process } from '../components/Process';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-bg-primary text-text-primary min-h-screen font-body">
      <Nav />
      <main>
        <Hero />
        <About />
        <WorkFlow />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

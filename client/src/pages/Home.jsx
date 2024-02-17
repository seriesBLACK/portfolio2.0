import { useRef } from "react";
import { FloatingNav } from "../components/FloatingNav";
import { Hero } from "../components/Hero";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import SendMessage from "../components/SendMessage";
import { About } from "../components/About";

export default function Home() {
  const home = useRef(null);
  const about = useRef(null);
  const contact = useRef(null);
  const navItems = [
    {
      name: "Home",
      link: "0",
      icon: <IconHome onClick={() => home.current.scrollIntoView({ behavior: 'smooth' })} className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "750",
      icon: <IconUser onClick={() => about.current.scrollIntoView({ behavior: 'smooth' })} className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "1500",
      icon: (
        <IconMessage onClick={() => contact.current.scrollIntoView({ behavior: 'smooth' })} className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div>
      <div className="h-[100vh]" ref={home}>
        <FloatingNav navItems={navItems} />
        <Hero />
      </div>
      <div className="h-[100vh]" ref={about}>
        <About />

      </div>
      <div ref={contact} className="w-full bg-gradient-to-b from-slate-950 to-blue-950">

        <SendMessage />

      </div>
    </div>
  )
}

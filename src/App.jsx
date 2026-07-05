import { Hero, Invitation, Schedule, DressCode, Wishes, RSVP, Contacts } from './components/sections'
import { Marquee,  } from './components/common'
import { Countdown } from './components/ui'
import './App.css'

function App() {
  return (
    <div className="app">
      <Hero />
      <Countdown targetDate="2026-09-26T00:00:00" />
      <Invitation />
      <Schedule />
      <DressCode />
      <Wishes />
      <RSVP />
      <Contacts />
      <Marquee text="до встречи на свадьбе!" />
    </div>
  )
}

export default App
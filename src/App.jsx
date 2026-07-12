import { Hero, Invitation, Schedule, DressCode, Wishes, RSVP, Contacts } from './components/sections'
import { Countdown, MusicPlayer } from './components/ui'
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
      <Countdown targetDate="2026-09-26T00:00:00" />
      <MusicPlayer />
    </div>
  )
}

export default App
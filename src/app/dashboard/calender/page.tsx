'use client'

import { useState, useEffect } from 'react'
import { Calendar } from '@/components/ui/calendar'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/components/ui/card'

type Event = {
  id: string
  date: Date
  title: string
}

export default function FullPageCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [events, setEvents] = useState<Event[]>([])
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [currentEvent, setCurrentEvent] = useState<Event | null>(null)
  const [eventTitle, setEventTitle] = useState('')

  useEffect(() => {
    // Load events from localStorage on component mount
    const savedEvents = localStorage.getItem('calendarEvents')
    if (savedEvents) {
      setEvents(JSON.parse(savedEvents).map((event: Event) => ({
        ...event,
        date: new Date(event.date)
      })))
    }
  }, [])

  useEffect(() => {
    // Save events to localStorage whenever they change
    localStorage.setItem('calendarEvents', JSON.stringify(events))
  }, [events])

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date)
    const existingEvent = events.find(event => 
      event.date.toDateString() === date?.toDateString()
    )
    if (existingEvent) {
      setCurrentEvent(existingEvent)
      setEventTitle(existingEvent.title)
    } else {
      setCurrentEvent(null)
      setEventTitle('')
    }
    setIsDialogOpen(true)
  }

  const handleSaveEvent = () => {
    if (currentEvent) {
      setEvents(events.map(event => 
        event.id === currentEvent.id ? { ...event, title: eventTitle } : event
      ))
    } else if (selectedDate) {
      setEvents([...events, { id: Date.now().toString(), date: selectedDate, title: eventTitle }])
    }
    setIsDialogOpen(false)
    setEventTitle('')
    setCurrentEvent(null)
  }

  const handleDeleteEvent = () => {
    if (currentEvent) {
      setEvents(events.filter(event => event.id !== currentEvent.id))
    }
    setIsDialogOpen(false)
    setEventTitle('')
    setCurrentEvent(null)
  }

  const sortedEvents = [...events].sort((a, b) => a.date.getTime() - b.date.getTime())

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4 text-black">Event Manager</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={handleDateSelect}
              className="rounded-md border"
              modifiers={{
                event: (date) => events.some(event => event.date.toDateString() === date.toDateString())
              }}
              modifiersStyles={{
                event: { fontWeight: 'bold', textDecoration: 'underline' }
              }}
            />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-4">Events</h2>
            {sortedEvents.length === 0 ? (
              <p className="text-gray-500">No events scheduled. Click on a date to add an event.</p>
            ) : (
              <ul className="space-y-2">
                {sortedEvents.map(event => (
                  <li key={event.id} className="flex justify-between items-center bg-white p-2 rounded shadow">
                    <span>{event.date.toLocaleDateString()} - {event.title}</span>
                    <Button variant="ghost" size="sm" onClick={() => handleDateSelect(event.date)}>Edit</Button>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      </div>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{currentEvent ? 'Edit Event' : 'Add Event'}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="event-title" className="text-right">
                Event Title
              </Label>
              <Input
                id="event-title"
                value={eventTitle}
                onChange={(e) => setEventTitle(e.target.value)}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            {currentEvent && (
              <Button variant="destructive" onClick={handleDeleteEvent}>
                Delete
              </Button>
            )}
            <Button onClick={handleSaveEvent}>{currentEvent ? 'Update' : 'Add'}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
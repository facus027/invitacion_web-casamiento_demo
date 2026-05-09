const eventConfig = {
  title: "Casamiento de Emilia & Nicolas",
  description: "Celebramos nuestro casamiento. ¡Te esperamos!",
  location: "Parroquia Ntra Sra del Carmen.",
  startDate: "20261122T110000",
  endDate: "20261123T030000",
}

const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
  eventConfig.title
)}&dates=${eventConfig.startDate}/${eventConfig.endDate}&details=${encodeURIComponent(
  eventConfig.description
)}&location=${encodeURIComponent(eventConfig.location)}`

const icsContent = `
BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${eventConfig.title}
DESCRIPTION:${eventConfig.description}
LOCATION:${eventConfig.location}
DTSTART:${eventConfig.startDate}
DTEND:${eventConfig.endDate}
END:VEVENT
END:VCALENDAR
`.trim()

const downloadIcs = () => {
  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" })
  const url = URL.createObjectURL(blob)

  const link = document.createElement("a")
  link.href = url
  link.download = "casamiento-emilia-nicolas.ics"
  link.click()

  URL.revokeObjectURL(url)
}

export const AddToCalendar = () => {
  return (
    <section className="bg-[#f3eeea] px-10 py-1 text-center">

        <div className="mt-1 flex flex-col gap-3">
          <a
            href={googleCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[#d4af37] bg-gradient-to-r from-[#d4af37] to-[#f1d27a] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[#262e54] shadow-md transition hover:scale-[1.02]"
          >
            Agendar en Google Calendar
          </a>

          <button
            type="button"
            onClick={downloadIcs}
            className="rounded-full border border-[#d4af37]/60 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[#c9a227] transition hover:bg-[#d4af37]/10"
          >
            Agendar en iPhone / iOS
          </button>
        </div>
      
    </section>
  )
}
import { useEffect, useMemo, useState } from "react"

interface CountdownProps {
  targetDate: string | Date
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function getTargetMs(targetDate: string | Date) {
  const d = typeof targetDate === "string" ? new Date(targetDate) : targetDate
  return d.getTime()
}

function getTimeLeft(targetMs: number): TimeLeft {
  const diff = targetMs - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

export function Countdown({ targetDate }: CountdownProps) {
  const targetMs = useMemo(() => getTargetMs(targetDate), [targetDate])

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    getTimeLeft(targetMs)
  )

  useEffect(() => {
    const id = window.setInterval(() => {
      setTimeLeft(getTimeLeft(targetMs))
    }, 1000)

    return () => window.clearInterval(id)
  }, [targetMs])

 return (
    <div className="mx-auto w-full  bg-background p-2 shadow-sm">
      <div className="flex w-full items-center justify-between gap-1">
        <TimeBox label="Días" value={timeLeft.days} />
        <Colon />
        <TimeBox label="Horas" value={timeLeft.hours} />
        <Colon />
        <TimeBox label="Min" value={timeLeft.minutes} />
        <Colon />
        <TimeBox label="Seg" value={timeLeft.seconds} />
      </div>
    </div>
  )
}

function Colon() {
  return (
    <span
      className=" font-montse_medium text-title text-5xl mb-5 leading-none bg-background sm:text-5xl sm:mt-5"
      aria-hidden="true"
    >
      :
    </span>
  )
}

function TimeBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex w-[78px] flex-col items-center justify-center rounded-xl bg-background px-0.5 py-2 sm:w-[90px]">
      <span className="text-5xl font-semibold text-title leading-none sm:text-6xl">
        {String(value).padStart(2, "0")}
      </span>
      <span className="mt-1 text-lg uppercase tracking-widest text-texto sm:text-xl">
        {label}
      </span>
    </div>
  )
}


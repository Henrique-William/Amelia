function ScheduledTime() {
  return (
    <div className="mx-6 mb-3.5">
        <div className="w-full bg-secondary px-3 py-3 text-white flex items-center rounded-lg gap-3">
          <div className="w-12 h-12 bg-violet-300 rounded-xl flex items-center justify-center">
            <img src="/images/icon/calendar.svg" alt="Icone de calendário" />
          </div>
          <div>
            <h3 className="text-base font-medium">Reunião dos jovens</h3>
            <div className="flex gap-1">
              <img src="/images/icon/clock.svg" alt="icone de relógio" />
              <p className="text-xs font-thin">12h - 16h</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ScheduledTime

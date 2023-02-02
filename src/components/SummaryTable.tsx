import { useMemo } from 'react';

import { HabitDay } from './HabitDay';

import { generateRangeDatesFromYearStart } from '../utils/generate-range-dates-from-year-start';

export function SummaryTable() {
  const weekDays = useMemo(() => ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'], []);
  const summaryDates = useMemo(() => generateRangeDatesFromYearStart(), []);
  const minimumSummaryDatesSize = useMemo(() => 18 * 7, []);
  const amountOfDaysToFill = useMemo(
    () => minimumSummaryDatesSize - summaryDates.length,
    [summaryDates.length]
  );

  return (
    <div className="w-full flex">
      <div className="grid grid-row-7 grid-flow-row gap-3">
        {weekDays.map((WeekDay, index) => (
          <div
            key={`S${WeekDay}-${index}`}
            className="text-zinc-400 text-xl font-bold h-10 w-10 flex items-center justify-center"
          >
            {WeekDay}
          </div>
        ))}
      </div>

      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {summaryDates.map((date, index) => (
          <HabitDay key={`${date.toString()}-${index}`} />
        ))}

        {amountOfDaysToFill > 0 &&
          Array.from({ length: amountOfDaysToFill }).map((_, index) => (
            <div
              key={index}
              className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"
            />
          ))}
      </div>
    </div>
  );
}

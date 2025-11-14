import React, { useState } from "react";

const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

interface CalendarProps {
  initialDate?: Date;
  onDateSelect?: (date: Date) => void;
}

export default function Calendar({
  initialDate = new Date(),
  onDateSelect,
}: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(initialDate);
  const [selectedDate, setSelectedDate] = useState(initialDate);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  const changeMonth = (offset: number) => {
    setCurrentDate(new Date(year, month + offset, 1));
  };

  const changeYear = (offset: number) => {
    setCurrentDate(new Date(year + offset, month, 1));
  };

  const selectDate = (day: number) => {
    const newDate = new Date(year, month, day);
    setSelectedDate(newDate);
    onDateSelect?.(newDate);
  };

  return (
    <div className="w-80 h-[355px] p-4 bg-gray-900 text-white rounded-xl shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <button
          onClick={() => changeYear(-1)}
          className="px-2 py-1 rounded hover:bg-gray-700"
          title="Previous Year" // Tooltip for «
        >
          «
        </button>

        <button
          onClick={() => changeMonth(-1)}
          className="px-2 py-1 rounded hover:bg-gray-700"
          title="Previous Month" // Tooltip for ‹
        >
          ‹
        </button>

        <div className="font-semibold text-lg">
          {currentDate.toLocaleString("default", { month: "long" })} {year}
        </div>

        <button
          onClick={() => changeMonth(1)}
          className="px-2 py-1 rounded hover:bg-gray-700"
          title="Next Month" // Tooltip for ›
        >
          ›
        </button>

        <button
          onClick={() => changeYear(1)}
          className="px-2 py-1 rounded hover:bg-gray-700"
          title="Next Year" // Tooltip for »
        >
          »
        </button>
      </div>

      {/* Days Row */}
      <div className="grid grid-cols-7 text-center font-semibold text-gray-400 mb-2">
        {days.map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      {/* Dates */}
      <div className="grid grid-cols-7 text-center gap-1">
        {/* Empty slots before month start */}
        {Array.from({ length: firstDay }).map((_, i) => (
          <div key={"empty" + i}></div>
        ))}

        {/* Actual dates */}
        {Array.from({ length: lastDate }, (_, i) => {
          const day = i + 1;
          const isSelected =
            selectedDate.getFullYear() === year &&
            selectedDate.getMonth() === month &&
            selectedDate.getDate() === day;

          return (
            <button
              key={day}
              onClick={() => selectDate(day)}
              className={`py-2 rounded-full hover:bg-gray-700 transition 
                ${isSelected ? "bg-blue-500 text-white font-bold" : ""}`}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}

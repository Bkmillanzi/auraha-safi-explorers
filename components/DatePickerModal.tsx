"use client";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

interface DatePickerModalProps {
  show: boolean;
  value: string;
  onClose: () => void;
  onChange: (date: string) => void;
}

export default function DatePickerModal({
  show,
  value,
  onClose,
  onChange,
}: DatePickerModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getToday = () => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  };

  const parseValue = (val: string) => {
    const today = getToday();
    if (!val) return today;
    const t = new Date(`${val}T00:00:00`);
    return isNaN(t.getTime()) ? today : t;
  };

  const [selectedDate, setSelectedDate] = useState<Date>(parseValue(value));
  const [monthOffset, setMonthOffset] = useState(0);
  const [hoveredDay, setHoveredDay] = useState<number | null>(null);

  useEffect(() => {
    setSelectedDate(parseValue(value));
  }, [value]);

  if (!show || !mounted) return null;

  const today = getToday();
  const viewDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + monthOffset, 1);
  const daysInMonth = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 0).getDate();
  const firstDayOfWeek = viewDate.getDay();
  const monthName = viewDate.toLocaleString("en-US", { month: "long" });
  const year = viewDate.getFullYear();

  const isSameDay = (d1: Date, d2: Date) =>
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate();

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{
        background: "rgba(8, 4, 18, 0.75)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
    >
      <div className="relative animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
        {/* Ambient glow backgrounds */}
        <div
          className="absolute pointer-events-none"
          style={{
            inset: "-72px",
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse at 50% 55%, rgba(212,151,92,0.55) 0%, rgba(255,210,140,0.28) 35%, rgba(255,240,220,0.14) 55%, transparent 72%)",
            filter: "blur(28px)",
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            inset: "-40px",
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse at 65% 70%, rgba(184,114,46,0.22) 0%, transparent 55%)",
            filter: "blur(18px)",
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            inset: "-72px",
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.30) 1.2px, transparent 1.2px)",
            backgroundSize: "18px 18px",
            maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          }}
        />

        {/* Modal container */}
        <div
          style={{
            position: "relative",
            width: 560,
            maxWidth: "92vw",
            borderRadius: 32,
            overflow: "hidden",
            backdropFilter: "blur(64px) saturate(220%)",
            WebkitBackdropFilter: "blur(64px) saturate(220%)",
            background: "rgba(0, 0, 0, 0.85)",
            border: "1.5px solid rgba(212, 151, 92, 0.25)",
            boxShadow:
              "0 40px 90px rgba(0,0,0,0.7), 0 8px 32px rgba(212,151,92,0.15), inset 0 1.5px 0 rgba(212,151,92,0.18)",
          }}
        >
          {/* Top linear highlight */}
          <div
            className="absolute inset-x-0 top-0 pointer-events-none"
            style={{
              height: 1,
              background:
                "linear-gradient(90deg, transparent 5%, rgba(212,151,92,0.45) 35%, rgba(212,151,92,0.45) 65%, transparent 95%)",
            }}
          />

          {/* Title */}
          <div className="flex items-center justify-center px-5 pt-6 pb-1">
            <div
              className="select-none font-black tracking-tight"
              style={{ fontSize: 26, color: "#f5e0c0", letterSpacing: "-0.01em" }}
            >
              So, when is it?
            </div>
          </div>

          {/* Month & Year Bar */}
          <div className="flex items-center justify-between px-7 pt-5 pb-3">
            <button
              type="button"
              onClick={() => setMonthOffset((prev) => prev - 1)}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-90"
              style={{
                background: "rgba(212,151,92,0.12)",
                border: "1px solid rgba(212,151,92,0.30)",
                color: "#D4975C",
                cursor: "pointer",
              }}
              aria-label="Previous Month"
            >
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <div
              className="font-black text-2xl tracking-tight select-none"
              style={{ color: "#f5e0c0" }}
            >
              {monthName} {year}
            </div>

            <button
              type="button"
              onClick={() => setMonthOffset((prev) => prev + 1)}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-90"
              style={{
                background: "rgba(212,151,92,0.12)",
                border: "1px solid rgba(212,151,92,0.30)",
                color: "#D4975C",
                cursor: "pointer",
              }}
              aria-label="Next Month"
            >
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          {/* Weekday Labels */}
          <div className="grid grid-cols-7 px-5 pb-2">
            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
              <div
                key={d}
                className="text-center select-none font-bold tracking-widest uppercase"
                style={{
                  fontSize: 13,
                  color: "rgba(52, 210, 80, 0.80)",
                  textShadow: "0 1px 8px rgba(52, 210, 80, 0.40)",
                }}
              >
                {d}
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7 px-5 pb-5 gap-y-1">
            {Array.from({ length: firstDayOfWeek }).map((_, r) => (
              <div key={`empty-${r}`} />
            ))}
            {Array.from({ length: daysInMonth }, (_, r) => {
              const dayNum = r + 1;
              const dateObj = new Date(viewDate.getFullYear(), viewDate.getMonth(), dayNum);
              const isSelected = isSameDay(dateObj, selectedDate);
              const isToday = isSameDay(dateObj, today);
              const isHovered = !isSelected && hoveredDay === dayNum;

              let customStyle: React.CSSProperties = {
                color: "rgba(255, 255, 255, 0.80)",
              };

              if (isSelected) {
                customStyle = {};
              } else if (isToday) {
                customStyle = {
                  background: isHovered ? "rgba(212, 151, 92, 0.22)" : "rgba(212, 151, 92, 0.12)",
                  color: "#B8722E",
                  border: "1.5px solid rgba(212, 151, 92, 0.40)",
                };
              } else if (isHovered) {
                customStyle = {
                  background: "rgba(212, 151, 92, 0.18)",
                  color: "#D4975C",
                };
              }

              return (
                <button
                  key={dayNum}
                  type="button"
                  onClick={() => {
                    setSelectedDate(dateObj);
                    setMonthOffset(0);
                  }}
                  onMouseEnter={() => setHoveredDay(dayNum)}
                  onMouseLeave={() => setHoveredDay(null)}
                  className={`aspect-square flex items-center justify-center font-semibold mx-0.5 transition-all duration-150 ${
                    isSelected ? "cal-gold-day" : "rounded-full hover:scale-110 active:scale-90"
                  }`}
                  style={{ fontSize: 18, cursor: "pointer", ...customStyle }}
                >
                  {isSelected ? <span>{dayNum}</span> : dayNum}
                </button>
              );
            })}
          </div>

          {/* Bottom SAVE DATE Button */}
          <div
            className="flex items-center justify-center px-6 py-5"
            style={{ borderTop: "1px solid rgba(212,151,92,0.18)" }}
          >
            <button
              type="button"
              onClick={() => {
                const yr = selectedDate.getFullYear();
                const mo = String(selectedDate.getMonth() + 1).padStart(2, "0");
                const da = String(selectedDate.getDate()).padStart(2, "0");
                onChange(`${yr}-${mo}-${da}`);
                onClose();
              }}
              className="cal-gold-btn"
            />
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

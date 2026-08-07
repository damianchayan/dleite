"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

interface DropdownItem {
  label: string;
  targetId: string;
}

interface DropdownProps {
  title: string;
  id: string;
  items: DropdownItem[];
  styles?: string;
}

export default function Dropdown({ title, items, styles, id }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="content-center relative w-max  " ref={dropdownRef}>
      <button onClick={() => setIsOpen(!isOpen)} className={styles}>
        {title}
        {/* Optional: A small arrow that flips when open */}
        <svg
          className={`inline w-4 h-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={4}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-0 z-50 flex flex-col min-w-40 py-2 mt-1 bg-white border border-gray-100 rounded-lg shadow-lg top-full">
          {items.map((item) => (
            <Link
              key={item.targetId}
              href={`/${id}#${item.targetId}`}
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

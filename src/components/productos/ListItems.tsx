import React from 'react';

interface ListtItemsProps {
  items: { title: string; description: string }[];
}

export default function ListItems({ items }: ListtItemsProps) {
  return (
    <ul className="grid grid-cols-1 gap-8 md:grid-cols-3">
      {items.map(({ title, description }) => {
        return (
          <li
            key={title}
            className="flex gap-2"
          >
            <svg
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
              strokeWidth={2}
              height="24"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="24"
            >
              <path
                d="M0 0h24v24H0z"
                fill="none"
                stroke="none"
              ></path>
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
              <path d="M9 12l2 2l4 -4"></path>
            </svg>
            <p>
              <strong className="text-fontPrimary">{title}</strong>
              <br />
              <span className="max-w-lg inline-flex text-justify">
                {description}
              </span>
            </p>
          </li>
        );
      })}
    </ul>
  );
}

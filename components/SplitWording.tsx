"use client";

interface SplitWordingProps {
  text: string;
}

export default function SplitWording({ text }: SplitWordingProps) {
  const letters = text.split("");

  return (
    <div className="flex">
      <a className="split-word flex">
        {letters.map((letter, i) => (
          <span key={i}>{letter}</span>
        ))}
      </a>
    </div>
  );
}

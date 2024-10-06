'use client'

import { useRouter } from 'next/navigation'

export default function Button({
    label,
    to,
}: {
    label: string;
    to: string;
}) {
  const router = useRouter()

  return (
    <div>
      <button
        className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-violet-700 rounded-full text-white border-violet-700" 
        onClick={() => router.push(to)}
      >
        {label}

      </button>
    </div>
    
  );
}
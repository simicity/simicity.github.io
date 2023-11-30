export function CodeIcon({size}: {size: string}) {

  return (
    <>
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        viewBox="0 0 24 24"
        height={size}
        width={size}
      >
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
      </svg>
    </>
  )
}

import React from 'react';

interface PoliceBadgeProps {
  className?: string;
}

const PoliceBadge: React.FC<PoliceBadgeProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 2L15.09 8.26H22L17.55 12.5L19.63 18.74L12 14.5L4.37 18.74L6.45 12.5L2 8.26H8.91L12 2Z" />
    </svg>
  );
};

export default PoliceBadge;

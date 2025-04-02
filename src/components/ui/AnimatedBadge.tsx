import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
}

const AnimatedBadge = ({ text, className, ...props }: AnimatedBadgeProps) => {
  return (
    <div
      className={cn(
        'inline-block py-1 px-3 text-xs font-medium rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 text-[#D4AF37] animate-fade-in',
        className
      )}
      {...props}
    >
      {text}
    </div>
  );
};

export default AnimatedBadge;
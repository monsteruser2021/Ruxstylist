import React from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'light' | 'dark';
  hoverEffect?: boolean;
  borderGlow?: boolean;
}

const GlassCard = ({
  children,
  className,
  variant = 'light',
  hoverEffect = false,
  borderGlow = false,
  ...props
}: GlassCardProps) => {
  return (
    <div
      className={cn(
        'rounded-lg p-6 transition-all duration-300',
        variant === 'light' ? 'glass-card' : 'glass-dark',
        hoverEffect && 'hover:-translate-y-1 hover:shadow-xl',
        borderGlow && 'animate-border-glow',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassCard;
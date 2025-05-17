import React from 'react';
import { Button } from './ui/button';
import { HelpCircle } from 'lucide-react';
import { useOnboarding } from '../contexts/OnboardingContext';
import { Tooltip } from './ui/tooltip';

export const HelpButton: React.FC = () => {
  const { startOnboarding } = useOnboarding();

  return (
    <Tooltip content="Start tour">
      <Button
        variant="ghost"
        size="icon"
        onClick={startOnboarding}
        className="fixed bottom-6 right-6 z-50 shadow-lg rounded-full bg-white hover:bg-gray-100"
      >
        <HelpCircle className="h-5 w-5 text-gray-600" />
      </Button>
    </Tooltip>
  );
};
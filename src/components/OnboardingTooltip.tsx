import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { useOnboarding } from '../contexts/OnboardingContext';
import { cn } from '../lib/utils';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export const OnboardingTooltip: React.FC = () => {
  const {
    currentStep,
    steps,
    isOnboardingActive,
    nextStep,
    prevStep,
    skipOnboarding,
    completeOnboarding,
  } = useOnboarding();

  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const currentStepData = steps[currentStep];

  useEffect(() => {
    if (!isOnboardingActive || !currentStepData) {
      setIsVisible(false);
      return;
    }

    // Small delay to ensure elements are rendered
    const timer = setTimeout(() => {
      const element = document.getElementById(currentStepData.elementId);
      if (element) {
        const rect = element.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

        let top = rect.top + scrollTop;
        let left = rect.left + scrollLeft;

        // Adjust position based on tooltip placement
        switch (currentStepData.position) {
          case 'top':
            top -= 100; // Tooltip height estimate
            left += rect.width / 2;
            break;
          case 'bottom':
            top += rect.height + 10;
            left += rect.width / 2;
            break;
          case 'left':
            top += rect.height / 2;
            left -= 320; // Tooltip width estimate
            break;
          case 'right':
            top += rect.height / 2;
            left += rect.width + 10;
            break;
        }

        setTooltipPosition({ top, left });
        
        // Highlight the target element
        element.classList.add('onboarding-highlight');
        
        // Smooth scroll to element
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        setIsVisible(true);
      }
    }, 300);

    return () => {
      clearTimeout(timer);
      // Remove highlight from previous element
      const previousElement = document.querySelector('.onboarding-highlight');
      if (previousElement) {
        previousElement.classList.remove('onboarding-highlight');
      }
    };
  }, [currentStep, isOnboardingActive, currentStepData]);

  if (!isOnboardingActive || !currentStepData || !isVisible) {
    return null;
  }

  const isLastStep = currentStep === steps.length - 1;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-[9998] transition-opacity"
        onClick={skipOnboarding}
      />
      
      {/* Tooltip */}
      <div
        className={cn(
          "fixed z-[9999] bg-white rounded-lg shadow-xl p-6 max-w-sm transition-all duration-300",
          "transform animate-in fade-in-0 zoom-in-95"
        )}
        style={{
          top: `${tooltipPosition.top}px`,
          left: `${tooltipPosition.left}px`,
          transform: `translate(-50%, ${currentStepData.position === 'top' ? '0' : '-50%'})`,
        }}
      >
        {/* Close button */}
        <button
          onClick={skipOnboarding}
          className="absolute top-2 right-2 p-1 rounded-md hover:bg-gray-100"
        >
          <X className="h-4 w-4 text-gray-500" />
        </button>

        {/* Content */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">{currentStepData.title}</h3>
          <p className="text-sm text-gray-600">{currentStepData.description}</p>
        </div>

        {/* Progress indicators */}
        <div className="flex justify-center space-x-1 mb-4">
          {steps.map((_, index) => (
            <div
              key={index}
              className={cn(
                "h-2 w-2 rounded-full transition-colors",
                index === currentStep ? "bg-blue-600" : "bg-gray-300"
              )}
            />
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={prevStep}
            disabled={currentStep === 0}
            className="flex items-center"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Previous
          </Button>

          <span className="text-sm text-gray-500">
            {currentStep + 1} of {steps.length}
          </span>

          <Button
            variant="primary"
            size="sm"
            onClick={isLastStep ? completeOnboarding : nextStep}
            className="flex items-center"
          >
            {isLastStep ? 'Finish' : 'Next'}
            {!isLastStep && <ChevronRight className="h-4 w-4 ml-1" />}
          </Button>
        </div>

        {/* Skip option */}
        <div className="text-center mt-3">
          <button
            onClick={skipOnboarding}
            className="text-xs text-gray-500 hover:text-gray-700 underline"
          >
            Skip tour
          </button>
        </div>
      </div>
    </>
  );
};
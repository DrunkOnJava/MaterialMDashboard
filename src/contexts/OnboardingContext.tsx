import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface OnboardingStep {
  id: string;
  elementId: string;
  title: string;
  description: string;
  position: 'top' | 'right' | 'bottom' | 'left';
  order: number;
}

interface OnboardingContextType {
  currentStep: number;
  steps: OnboardingStep[];
  isOnboardingActive: boolean;
  startOnboarding: () => void;
  nextStep: () => void;
  prevStep: () => void;
  skipOnboarding: () => void;
  completeOnboarding: () => void;
  isStepComplete: (stepId: string) => boolean;
}

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

const ONBOARDING_STEPS: OnboardingStep[] = [
  {
    id: 'dashboard-tabs',
    elementId: 'dashboard-tabs',
    title: 'Dashboard Navigation',
    description: 'Navigate between different sections of your dashboard here',
    position: 'bottom',
    order: 1,
  },
  {
    id: 'stat-cards',
    elementId: 'stat-cards',
    title: 'Key Metrics',
    description: 'Monitor your business metrics and KPIs at a glance',
    position: 'bottom',
    order: 2,
  },
  {
    id: 'chart-section',
    elementId: 'chart-section',
    title: 'Data Visualization',
    description: 'View trends and analytics through interactive charts',
    position: 'left',
    order: 3,
  },
  {
    id: 'data-table',
    elementId: 'data-table',
    title: 'Data Management',
    description: 'Manage and filter your data efficiently',
    position: 'top',
    order: 4,
  },
  {
    id: 'sidebar-navigation',
    elementId: 'sidebar-navigation',
    title: 'Main Navigation',
    description: 'Access all features and sections of the application',
    position: 'right',
    order: 5,
  },
  {
    id: 'user-menu',
    elementId: 'user-menu',
    title: 'User Settings',
    description: 'Manage your profile and application settings',
    position: 'bottom',
    order: 6,
  },
];

export const OnboardingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isOnboardingActive, setIsOnboardingActive] = useState<boolean>(false);
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);

  // Check localStorage for onboarding status
  useEffect(() => {
    const hasSeenOnboarding = localStorage.getItem('hasSeenOnboarding');
    const savedCompletedSteps = localStorage.getItem('completedOnboardingSteps');
    
    if (savedCompletedSteps) {
      setCompletedSteps(JSON.parse(savedCompletedSteps));
    }
    
    // Show onboarding for new users
    if (!hasSeenOnboarding) {
      // Small delay to ensure components are mounted
      setTimeout(() => {
        setIsOnboardingActive(true);
      }, 1000);
    }
  }, []);

  const startOnboarding = () => {
    setCurrentStep(0);
    setIsOnboardingActive(true);
    setCompletedSteps([]);
    localStorage.removeItem('completedOnboardingSteps');
  };

  const nextStep = () => {
    if (currentStep < ONBOARDING_STEPS.length - 1) {
      const currentStepId = ONBOARDING_STEPS[currentStep].id;
      setCompletedSteps(prev => [...prev, currentStepId]);
      setCurrentStep(currentStep + 1);
    } else {
      completeOnboarding();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const skipOnboarding = () => {
    setIsOnboardingActive(false);
    localStorage.setItem('hasSeenOnboarding', 'true');
  };

  const completeOnboarding = () => {
    const allStepIds = ONBOARDING_STEPS.map(step => step.id);
    setCompletedSteps(allStepIds);
    localStorage.setItem('completedOnboardingSteps', JSON.stringify(allStepIds));
    localStorage.setItem('hasSeenOnboarding', 'true');
    setIsOnboardingActive(false);
  };

  const isStepComplete = (stepId: string) => {
    return completedSteps.includes(stepId);
  };

  return (
    <OnboardingContext.Provider
      value={{
        currentStep,
        steps: ONBOARDING_STEPS,
        isOnboardingActive,
        startOnboarding,
        nextStep,
        prevStep,
        skipOnboarding,
        completeOnboarding,
        isStepComplete,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
};

export const useOnboarding = () => {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error('useOnboarding must be used within an OnboardingProvider');
  }
  return context;
};
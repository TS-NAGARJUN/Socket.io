'use client'
import react from 'react';
import FeatureCardClientWrapper from './FeatureCard';

export default function FeatureSection() {
    return(
        <section
            id="features"
            className="p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCardClientWrapper
                icon="🚀"
        title="Instant Setup"
        description="Generate a room link in seconds. No account required."
      />
      <FeatureCardClientWrapper
        icon="🔒"
        title="Secure"
        description="Passcode protection for your private conversations."
      />
      <FeatureCardClientWrapper
        icon="💻"
        title="Cross-Platform"
        description="Works on any device with a modern web browser."
      />
    </section>
  );
}
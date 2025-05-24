'use client';
import FeatureCard from "./FeatureCard";

export default function FeatureCardClientWrapper(props: React.ComponentProps<typeof FeatureCard>) {
  return <FeatureCard {...props} />;
}
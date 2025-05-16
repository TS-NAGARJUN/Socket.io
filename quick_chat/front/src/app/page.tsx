import Navbar from "@/components/base/Navbar";
import HeroSection from "@/components/base/HeroSection";
import Footer from "@/components/base/Footer"; 
import FeatureSection from '@/components/base/FeatureSection';
import UserReviews from "@/components/base/Userreviews";
import { authOptions, CustomSession } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

export default async function LandingPage()
{
  const session: CustomSession | null = await getServerSession(authOptions);
  return(
    <div className="min-h-screen flex flex-col">
      {/*header1*/}
      <Navbar user={session?.user ?? null}/>
      {/*hero section*/}
      <HeroSection />

      {/* Features Section */}
      <FeatureSection />

      {/* User Reviews Section */}
      <UserReviews />

      {/* Footer */}
      <Footer />
    </div>
  );
}
import Navbar from "@/components/base/Navbar";
import HeroSectionClientWrapper from "@/components/base/HeroSectionClientWrapper"; 
import { authOptions, CustomSession } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import FeatureSectionClientWrapper from "@/components/base/FeatureSectionClientWrapper";
import UserReviewsClientWrapper from "@/components/base/UserReviewsClientWrapper";
import FooterClientWrapper from "@/components/base/FooterClientWrapper";

export default async function LandingPage()
{
  const session: CustomSession | null = await getServerSession(authOptions);
  return(
    <div className="min-h-screen flex flex-col">
      {/*header1*/}
      <Navbar user={session?.user ?? null}/>
      {/*hero section*/}
      <HeroSectionClientWrapper />

      {/* Features Section */}
      <FeatureSectionClientWrapper />

      {/* User Reviews Section */}
      <UserReviewsClientWrapper />

      {/* Footer */}
      <FooterClientWrapper />
    </div>
  );
}
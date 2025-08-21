import {Hero} from "@/components/Hero";
import {CTASection} from "@/components/CTASection";
import SignatureOutcomes from "@/components/SignatureOutcomes";
import FeaturedCaseStudies from "@/components/FeaturedCaseStudies";
import TrustedBy from "@/components/TrustedBy";

export default function Page() {
    return (
        <>
            <Hero/>
            <SignatureOutcomes/>
            <FeaturedCaseStudies/>
            <TrustedBy/>
            <CTASection/>

            <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context": "https://schema.org", "@type": "Person", "name": "Jason Flatford", "jobTitle": "Product & Engineering Executive", "url": "https://jasonflatford.com/", "image": "https://jasonflatford.com/og-image.png", "sameAs": ["https://www.linkedin.com/in/flatford/"], "worksFor": {"@type": "Organization", "name": "Melee.gg"}, "knowsAbout": ["Product Strategy", "SaaS", "AI", "Gaming", "Civic Tech"]})}}/>
        </>
    );
}

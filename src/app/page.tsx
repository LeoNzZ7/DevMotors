import { Hero } from "@/components/Hero";
import { Services } from "@/components/Home/Services";
import { Submenu } from "@/components/Home/Submenu";
import { getDataHome } from "@/utils/action/get-data";
import { Phone } from "lucide-react";

export default async function Home() {
  const { object } = await getDataHome()

  return (
    <main className="w-full" >
      <Submenu />
      <Hero
        heading={object.metadata.heading}
        buttonTitle={object.metadata.cta_button.title}
        buttonUrl={object.metadata.cta_button.url}
        bannerUrl={object.metadata.banner.url}
        icon={<Phone size={24} color="#FFF" />}
      />
      <Services object={object} />
    </main>
  )
}
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Home/Footer";
import { Services } from "@/components/Home/Services";
import { Submenu } from "@/components/Home/Submenu";
import { getDataHome, getSubMenu } from "@/utils/action/get-data";
import { Phone } from "lucide-react";

export default async function Home() {
  const { object } = await getDataHome()
  const menu = await getSubMenu()

  console.log(menu)

  return (
    <main className="w-full" >
      <Submenu menu={menu} />
      <Hero
        heading={object.metadata.heading}
        buttonTitle={object.metadata.cta_button.title}
        buttonUrl={object.metadata.cta_button.url}
        bannerUrl={object.metadata.banner.url}
        icon={<Phone size={24} color="#FFF" />}
      />
      <Services object={object} />
      <Footer object={object} />
    </main>
  )
}
import { Submenu } from "./components/Home/Submenu";
import { getDataHome } from "@/utils/action/get-data";

export default async function Home() {
  const { object } = await getDataHome()

  console.log(object.title + " Titulo")

  return (
    <main className="w-full" >
      <Submenu />
    </main>
  )
}
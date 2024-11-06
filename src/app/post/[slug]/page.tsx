import { getItemBySlug } from "@/utils/action/get-data"
import { Metadata } from "next"
import { Content } from "./components/content"
import { Suspense } from "react";
import Loading from "./components/loading";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const { slug } = await params;

    try {
        const { objects } = await getItemBySlug(slug)

        if (!objects) {
            return {
                title: "DevMotors - Sua oficina especializada",
                description: "Oficina de carros em Florianópolis",
            }
        }

        return {
            title: `DevMotors - ${objects[0].title}`,
            description: objects[0].metadata.description.text,
            openGraph: {
                title: `DevMotors - ${objects[0].title}`,
                images: [objects[0].metadata.banner.url]
            },
            robots: {
                index: true,
                follow: true,
                nocache: true,
                googleBot: {
                    index: true,
                    follow: true,
                    noimageindex: true,
                }
            }
        }

    } catch (err) { //eslint-disable-line  
        return {
            title: "DevMotors - Sua oficina especializada",
            description: "Oficina de carros em Florianópolis",
        }
    }
}

export default async function Page({ params }: { params: { slug: string } }) {
    const { slug } = await params

    return (
        <main>
            <Suspense fallback={<Loading />} >
                <Content slug={slug} />
            </Suspense>
        </main>
    )
}
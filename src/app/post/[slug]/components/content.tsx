import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { getItemBySlug } from "@/utils/action/get-data";
import { Phone } from "lucide-react";
import Image from "next/image";

export async function Content({ slug }: { slug: string }) {
    const { objects } = await getItemBySlug(slug)

    return (
        <>
            <Hero
                heading={objects[0].title}
                buttonTitle={objects[0].metadata.button.title}
                buttonUrl={objects[0].metadata.button.url}
                bannerUrl={objects[0].metadata.banner.url}
                icon={<Phone size={24} color="#FFF" />}
            />
            <Container>
                <section className="flex flex-col sm:flex-row items-center justify-center gap-12 my-12 mx-3 " >
                    <article className="flex-1 text-center sm:text-start" >
                        <h1 className="text-3xl mb-6" >
                            {objects[0].metadata.description.title}
                        </h1>
                        <p className="mb-6" >
                            {objects[0].metadata.description.text}
                        </p>
                        {objects[0].metadata.description.button_active && (
                            <a
                                className="bg-gray-800 text-white rounded py-2 px-8 m-auto hover:bg-gray-900 duration-300 transition-colors"
                                href={objects[0].metadata.description.button_url as string}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {objects[0].metadata.description.button_title}
                            </a>
                        )}
                    </article>
                    <figure className="w-[300px] max-w-[400px] h-[350px] relative" >
                        <Image
                            src={objects[0].metadata.description.banner.url}
                            alt={objects[0].title}
                            quality={100}
                            fill={true}
                            priority={true}
                            sizes="(max-width: 700px) 100vw, (max-width: 1024px) 75vw, 60vw"
                            className="object-cover rounded-lg w-[300px] h-[350px]"
                        />
                    </figure>
                </section>
            </Container>
        </>
    )
}
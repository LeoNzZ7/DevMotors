import { Container } from "@/components/Container"
import { DataProps as ServicesProps } from "@/utils/action/get-data"
import Image from "next/image"

export const Services = ({ object }: ServicesProps) => {
    return (
        <Container>
            <>
                <section className="flex w-full flex-col sm:flex-row items-center justify-between gap-6 sm:gap-10 my-7 pt-5 px-5" id="serviços" >
                    <article className="flex justify-center items-center flex-col gap-3 w-full" >
                        <h1 className="font-bold text-3xl self-center sm:self-start" >Sobre</h1>
                        <p className="leading-[150%] sm:text-lg sm:max-w-[80%] self-center sm:self-start" >{object.metadata.about.description}</p>
                    </article>
                    <figure className="relative w-full sm:w-[600px] h-96 sm:h-[450p] " >
                        <Image
                            className="object-cover w-80 h-96 rounded-md"
                            src={object.metadata.about.banner.url}
                            alt="Imagem ilustrativa sobre a empresa"
                            quality={100}
                            fill={true}
                            sizes="(max-width: 700px) 100vw, (max-width: 1024px) 75vw, 60vw"
                        />
                    </figure>
                </section>
                <h2 className="uppercase text-gray-950 mt-14 mb-6 text-center text-3xl" >
                    Conheça nossos serviços!
                </h2>
                <section
                    className="flex gap-6 flex-col sm:flex-row sm:px-5" >
                    {object.metadata.services.map((service, index) => (
                        <article className="group sm:flex flex-col w-full flex-wrap items-center justify-center" key={index} >
                            <figure className="relative w-full h-52 overflow-hidden rounded-md group-hover:scale-110 transition-transform duration-300 " >
                                <div className="w-full h-full bg-black"></div>
                                <Image
                                    className="object-cover w-72 h-80 rounded-md opacity-60 hover:opacity-100 transition-opacity duration-300"
                                    src={service.image.url}
                                    alt="Imagem do serviço"
                                    quality={100}
                                    fill={true}
                                    sizes="(max-width: 700px) 100vw, (max-width: 1024px) 75vw, 60vw"
                                />
                            </figure>
                            <p
                                className="text-center my-2 text-md group-hover:font-bold transition-transform duration-300 ">
                                {service.description}
                            </p>
                        </article>
                    ))}
                </section>
            </>
        </Container >
    )
}
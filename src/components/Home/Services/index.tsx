import { Container } from "@/components/Container"
import { DataProps as ServicesProps } from "@/utils/action/get-data"
import Image from "next/image"

export const Services = ({ object }: ServicesProps) => {
    return (
        <Container>
            <>
                <section className="flex w-full flex-col sm:flex-row items-center justify-between gap-6 sm:gap-10 my-7 pt-5 px-5 sm:px-0" >
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
                        />
                    </figure>
                </section>
                <h2 className="uppercase text-gray-950 mt-10 mb-6 text-center text-3xl" >
                    Conheça nossos serviços!
                </h2>
                <section
                    className="flex gap-6 flex-col sm:flex-row" >
                    {object.metadata.services.map((service, index) => (
                        <article className="group " key={index} >
                            <figure className="relative w-full h-52 overflow-hidden rounded-md group-hover:scale-110 transition-transform duration-300 " >
                                <Image
                                    className="object-cover w-72 h-80 rounded-md"
                                    src={service.image.url}
                                    alt="Imagem do serviço"
                                    quality={100}
                                    fill={true}
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
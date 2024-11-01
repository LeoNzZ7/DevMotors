import { DataProps as HomeProps } from "@/utils/action/get-data"
import { Clock, Mail, Map, Phone } from "lucide-react"

export const Footer = ({ object }: HomeProps) => {
    return (
        <footer id="contatos" className="flex flex-col items-center justify-center mt-20 mb-4"  >
            <section className="w-[90%] md:w-[80%] bg-black py-8 px-3 rounded-xl z-20 " >
                <h2 className="text-3xl text-white mb-6 text-center" >
                    Contatos
                </h2>
                <div className="text-white grid gap-3 py-3 px-8 grid-cols sm:grid-cols-2 lg:grid-cols-4 items-center" >
                    <article className="flex gap-3 items-center" >
                        <Mail size={28} color="#FFF" />
                        <div>
                            <strong className="font-bold" >Email</strong>
                            <p>{object.metadata.contact.email}</p>
                        </div>
                    </article>
                    <article className="flex gap-3 items-center" >
                        <Phone size={28} color="#FFF" />
                        <div>
                            <strong className="font-bold" >Telefone</strong>
                            <p>{object.metadata.contact.phone}</p>
                        </div>
                    </article>
                    <article className="flex gap-3 items-center" >
                        <Map size={28} color="#FFF" />
                        <div>
                            <strong className="font-bold" >Endereço</strong>
                            <p>{object.metadata.contact.address}</p>
                        </div>
                    </article>
                    <article className="flex gap-3 items-center text-center" >
                        <Clock size={28} color="#FFF" />
                        <div>
                            <strong className="font-bold" >Horário de funcionamento</strong>
                            <p>{object.metadata.contact.time}</p>
                        </div>
                    </article>
                </div>
            </section>
            <a
                className="flex items-center justify-center gap-3 bg-green-500 text-white px-2 py-3 mt-6 font-medium rounded-lg hover:bg-green-600 duration-300 transition-colors"
                href={object.metadata.cta_button.url}
                target="_blank" >
                <Phone size={24} color="#FFF" />
                <p>Fale com nosso atendente!</p>
            </a>
            <span className="mt-14" >
                Todos os direitos reservados - {object.title} @{`${new Date().getFullYear()}`}
            </span>
        </footer>
    )
}
'use client'

import { Loading } from '@/components/loading-component';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Image from 'next/image';
import { Phone, MapPin, Mail } from 'lucide-react';
import { toast } from "sonner"



export default function Home() {

const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/mediolevante/' : '';

  return (
    <>
        <Loading />
        <div className='relative min-h-screen bg-background'>
          <Navbar />
          
          {/* Hero Section */}
          <div className='w-full h-screen flex flex-col md:flex-row items-center relative overflow-hidden'>
            
            {/* Left side content */}
            <div className='w-full md:w-1/2 flex justify-end items-center z-10 px-6 md:px-12 py-12'>
              <div className="text-center md:text-left">
                <div className='flex flex-row w-full gap-2 text-center bg-red md:text-left justify-center md:justify-start'>
                  <h1 className='text-3xl md:text-6xl font-bold mb-2'>
                    Farinini
                  </h1>
                  <h1 className='text-3xl md:text-6xl font-bold mb-2 text-[#3064AC]'>
                    X
                  </h1>
                  <h1 className='text-3xl md:text-6xl font-bold mb-2 '>
                    Genova
                  </h1>
                </div>
                <span className='flex flex-row flex-wrap justify-center md:justify-start gap-1 text-xl md:text-3xl font-base mb-6 text-muted-foreground'>
                  <p className="w-full text-center md:text-left md:w-auto">Candidato per i municipi:</p>
                  <div className="flex flex-row justify-center md:justify-start gap-1 w-full md:w-auto">
                    <p className='border-b-[1px] border-dashed mr-1 text-[#3064AC] border-[#3064AC]'>Medio Levante</p>
                    <p>e</p>
                    <p className='ml-1 text-[#3064AC] border-[#3064AC] border-b-[1px] border-dashed'>Centro Est</p>
                  </div>
              </span>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className='bg-[#3064AC] p-4 rounded-lg shadow-lg mb-6'
                >
                  <p className='text-xl md:text-2xl font-medium text-white'>
                    Innovazione e metodo, con passione: miglioriamo insieme la nostra città!
                  </p>
                </motion.div>
              </div>
            </div>
              
            {/* Right side with image */}
            <div className='relative w-full md:w-1/2 h-full flex items-center justify-center'>
              <motion.div
                initial={{ opacity: 0, scale:0 }}
                animate={{ opacity: 1, scale:1, }}
                transition={{ delay: 5, duration:1 }}
                viewport={{ once: true }}
                className='relative h-full md:h-4/5 md:w-4/5'
              >
               <div className="flex w-full h-full items-center">
                  <div className="relative h-72 w-72 md:h-160 md:w-160 ml-auto rounded-full overflow-hidden border-4 border-[#3064AC]">
                    <Image
                      src={`${basePath}/Emanuele-Farinini.webp`} // Ensure correct path
                      alt="Emanuele Farini"
                      fill
                      objectFit="cover"
                      className="rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="max-w-6xl mx-auto px-6 py-16">
            {/* Pillars Section */}
            <h2 className="text-4xl font-bold mb-12 text-center">Le nostre priorità</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Pillar 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className=" rounded-xl shadow-lg p-6 border-t-4 border-[#3064AC] hover:transform hover:scale-105 transition duration-300"
              >
                <h3 className="text-2xl font-bold mb-4 text-[#3064AC]">1. Innovazione e metodo</h3>
                <p className="text-lg mb-4">Per una gestione più efficiente del municipio</p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="min-w-6 h-6 rounded-full bg-[#3064AC] text-white flex items-center justify-center mr-3 mt-1">✓</div>
                    <span className="text-lg"><strong>Comunicazione diretta</strong> tra cittadini e Municipio Creazione di una piattaforma online per segnalazioni, aggiornamenti e proposte in tempo reale.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="min-w-6 h-6 rounded-full bg-[#3064AC] text-white flex items-center justify-center mr-3 mt-1">✓</div>
                    <span className="text-lg"><strong>Ottimizzazione dei servizi:</strong> Uso di strumenti di analisi dei dati per rendere più efficienti la manutenzione delle strade, la gestione dei rifiuti e il trasporto pubblico.</span>
                  </li>
                </ul>
              </motion.div>
              
              {/* Pillar 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className=" rounded-xl shadow-lg p-6 border-t-4 border-[#3064AC] hover:transform hover:scale-105 transition duration-300"
              >
                <h3 className="text-2xl font-bold mb-4 text-[#3064AC]">2. Riqualificazione e vivibilità</h3>
                <p className="text-lg mb-4">Per un territorio più curato e sicuro</p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="min-w-6 h-6 rounded-full bg-[#3064AC] text-white  flex items-center justify-center mr-3 mt-1">✓</div>
                    <span className="text-lg"><strong>Aree verdi e spazi pubblici</strong> più curati e sicuri. Creazione di percorsi sportivi all&apos;aperto, potenziamento della manutenzione e maggiore sicurezza nei parchi e nelle piazze.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="min-w-6 h-6 rounded-full bg-[#3064AC] text-white flex items-center justify-center mr-3 mt-1">✓</div>
                    <span className="text-lg"><strong>Interventi mirati</strong> su strade e marciapiedi Mappatura dei punti critici e gestione più efficace degli interventi di ripristino.</span>
                  </li>
                </ul>
              </motion.div>
              
              {/* Pillar 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className=" rounded-xl shadow-lg p-6 border-t-4 border-[#3064AC] hover:transform hover:scale-105 transition duration-300"
              >
                <h3 className="text-2xl font-bold mb-4 text-[#3064AC]">3. Sport, benessere e inclusione</h3>
                <p className="text-lg mb-4">Per una comunità attiva e solidale</p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="min-w-6 h-6 rounded-full bg-[#3064AC] text-white  flex items-center justify-center mr-3 mt-1">✓</div>
                    <span className="text-lg"><strong>Sport per tutti:</strong> Eventi e iniziative per promuovere lo sport come strumento di benessere, inclusione e socialità.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="min-w-6 h-6 rounded-full bg-[#3064AC] text-white flex items-center justify-center mr-3 mt-1">✓</div>
                    <span className="text-lg"><strong>Formazione e cultura</strong> del benessere Collaborazioni con scuole e università per percorsi educativi su scienza, sport e salute.</span>
                  </li>
                </ul>
              </motion.div>
            </div>
            
            {/* Call to Action */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#3064AC] rounded-xl p-8 text-center shadow-xl"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Facciamo la differenza insieme</h2>
              <p className="text-xl mb-6 text-white">Il tuo voto è importante per trasformare il Municipio Medio Levante</p>
              <div className="flex flex-col md:flex-row justify-center gap-4">
              <button 
                className="bg-white hover:bg-gray-100 text-[#3064AC] py-3 px-8 rounded-full text-lg font-bold transition duration-300 shadow-lg"
                onClick={() => {
                  toast("Ci stiamo lavorando! 🥵", {
                    description: "Il programma nei suoi dettagli sarà presto visibile!",
                    action: {
                      label: "Esci",
                      onClick: () => console.log("Esci"),
                    },
                  })
                }
              }>
                Programma completo
              </button>
              </div>
            </motion.div>
          </div>
          
          {/* Candidate Bio */}
          <div className="bg-muted py-16">
            <div className="max-w-4xl mx-auto px-6">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/3">
                  <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden border-4 border-[#3064AC] shadow-lg">
                    <Image
                      src={`${basePath}/Emanuele-Farinini.webp`} // Ensure correct path
                      alt="Emanuele Farini"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                    />
                  </div>
                </div>
                <div className="w-full md:w-2/3 text-center md:text-left">
                  <h2 className="text-4xl font-bold mb-4">
                    <a className='hover:underline' href={basePath + '/curriculum'}>Emanuele Farinini</a>
                  </h2>
                  <h3 className="text-2xl font-medium text-[#3064AC] mb-4">Candidato per aiutare Genova</h3>
                  <p className="text-lg mb-4">
                    Mi occupo di consulenza nell&apos;ambito chemiometrico dal 2019. Con un background sia accademico che pratico, 
                    ho maturato una grande esperienza nell&apos;analisi e risoluzione di problemi industriali che mi permette di affrontare qualsiasi difficoltà.
                  </p>
                  <p className="text-lg mb-4">
                    Il mio approccio combina ricerca analitica con competenze strategiche per fornire soluzioni concrete ai problemi della nostra comunità.
                  </p>
                  <p className="text-lg mb-4">
                    Il mio attaccamento alla città e la mia passione per il miglioramento continuo mi spingono a candidarmi per entrambi i municipi: Medio Levante e Centro Est.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start ">
                    <span className="bg-[#3064AC] bg-opacity-10 text-white px-4 py-2 rounded-full text-sm font-medium w-2/3 md:w-auto">Analisi strategica</span>
                    <span className="bg-[#3064AC] bg-opacity-10 text-white px-4 py-2 rounded-full text-sm font-medium w-2/3 md:w-auto">Risoluzione scientifica</span>
                    <span className="bg-[#3064AC] bg-opacity-10 text-white px-4 py-2 rounded-full text-sm font-medium w-2/3 md:w-auto">Politiche concrete</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Newsletter and Contact */}
          <div className="max-w-4xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 gap-8">
              {/* <div className="group rounded-xl shadow-lg p-6">
                <span className='flex flex-row items-center gap-2 mb-4'><h3 className="text-2xl font-bold">Rimani aggiornato</h3> </span>
                <p className="text-lg mb-4 ">Iscriviti alla nostra newsletter per ricevere aggiornamenti sulla campagna e sulle iniziative nel Municipio.</p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input 
                    type="email" 
                    placeholder="La tua email" 
                    className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#3064AC]"
                  />
                  <button 
                  className="bg-[#3064AC] text-white hover:bg-[#245089] py-3 px-6 rounded-lg font-bold transition duration-300"
                  onClick={() => {
                      toast("Ci stiamo lavorando!🥵", {
                        description: "La newsletter sarà presto attiva. Grazie per la tua pazienza!",
                        action: {
                          label: "Esci",
                          onClick: () => console.log("Esci"),
                        },
                      })
                    }
                  }>
                    Iscriviti
                  </button>
                </div>
              </div> */}
              
              <div className="flex flex-col rounded-xl shadow-lg p-6  justify-center">
                <h3 className="text-2xl font-bold mb-4">Contattami</h3>
                <p className="text-lg mb-4">Hai domande o vuoi partecipare alla campagna? Scrivici!</p>
                <div className="flex flex-col md:flex-row w-full justify-between gap-2">
                    <p className="flex items-center">
                      <span className="w-8 h-8 rounded-full bg-[#3064AC] flex items-center justify-center mr-3"><Mail className='text-white' size={16}/></span>
                      <a 
                        href="mailto:farinixgenova@gmail.com?subject=Richiesta%20di%20Informazioni&body=Buongiorno%20Emanuele%2C%0A%0A
                              Vorrei%20ricevere%20maggiori%20informazioni%20su%20[qui%20specifica%20di%20cosa%20si%20tratta].%0A%0A
                              In%20attesa%20di%20una%20sua%20risposta%2C%20le%20porgo%20cordiali%20saluti.%0A%0A
                              [Il%20tuo%20nome]"
                        className="flex items-center hover:underline"
                      >
                        <span className="text-lg overflow-hidden text-ellipsis">farininixgenova@gmail.com</span>
                      </a>
                    </p>
                    <p className="flex items-center">
                      <span className="w-8 h-8 rounded-full bg-[#3064AC] flex items-center justify-center mr-3"><Phone className='text-white' size={16}/></span>
                      <span className="text-lg">+39... Scrivimi per mail!</span>
                    </p>
                    <p className="flex items-center mr-4">
                      <span className="w-8 h-8 rounded-full bg-[#3064AC] flex items-center justify-center mr-3"><MapPin className='text-white' size={16}/></span>
                      <span className="text-lg">Genova</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        <Footer />
    </>
  )
}



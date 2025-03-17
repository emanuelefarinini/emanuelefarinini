'use client'

import { Loading } from '@/components/loading-component';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Image from 'next/image';

export default function Home() {

  return (
    <>
        <Loading />
        <div className='relative min-h-screen bg-background'>
          <Navbar />
          
          {/* Hero Section */}
          <div className='w-full h-screen flex flex-col md:flex-row items-center relative overflow-hidden'>
            {/* Background Pattern */}
            <div className="absolute inset-0  opacity-5 z-0"></div>
            
            {/* Left side content */}
            <div className='w-full md:w-1/2 flex justify-end items-center z-10 px-6 md:px-12 py-12'>
              <div className="text-center md:text-left">
                <div className='flex flex-row w-full gap-2 text-center md:text-left justify-center md:justify-start'>
                  <h1 className='text-3xl md:text-6xl font-bold mb-2'>
                    Farinini
                  </h1>
                  <h1 className='text-3xl md:text-6xl font-bold mb-2 text-[#3064AC]'>
                    X
                  </h1>
                  <h1 className='text-3xl md:text-6xl font-bold mb-2 '>
                    Mediolevante
                  </h1>
                </div>
                <h2 className='text-xl md:text-3xl font-base mb-6 text-muted-foreground'>
                  Municipio Medio Levante di Genova
                </h2>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className='bg-[#3064AC] p-4 rounded-lg shadow-lg mb-6'
                >
                  <p className='text-xl md:text-2xl font-medium text-white'>
                    Innovazione e metodo, con passione: miglioriamo insieme la nostra città!
                  </p>
                </motion.div>
              </div>
            </div>
              
            {/* Right side with image */}
            <div className='relative w-full md:w-1/2 h-full flex items-end justify-start'>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className='relative h-full md:h-4/5 md:w-4/5'
              >
               <div className="w-full md:w-full ">
                  <div className="relative h-60 w-60 md:h-120 md:w-120 ml-auto rounded-full overflow-hidden border-4 border-[#3064AC] shadow-lg">
                    <Image
                      src="/Emanuele-Farinini.webp"
                      alt="Emanuele Farini"
                      layout="fill"
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
                <button className="bg-white hover:bg-gray-100 text-[#3064AC] py-3 px-8 rounded-full text-lg font-bold transition duration-300 shadow-lg">
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
                      src="/Emanuele-Farinini.webp"
                      alt="Emanuele Farini"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                    />
                  </div>
                </div>
                <div className="w-full md:w-2/3 text-center md:text-left">
                  <h2 className="text-4xl font-bold mb-4">
                    <a className='hover:underline' href='/curriculum'>Emanuele Farini</a>
                  </h2>
                  <h3 className="text-2xl font-medium text-[#3064AC] mb-4">Candidato per il Municipio Medio Levante</h3>
                  <p className="text-lg mb-4">
                    Mi occupo di consulenza nell&apos;ambito chemiometrico dal 2019. Con un background sia accademico che pratico, 
                    ho maturato una grande esperienza nell&apos;analisi e risoluzione di problemi industriali che mi permette di affrontare qualsiasi difficoltà.
                  </p>
                  <p className="text-lg mb-4">
                    Il mio approccio combina ricerca analitica con competenze strategiche per fornire soluzioni concrete ai problemi della nostra comunità.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <span className="bg-[#3064AC] bg-opacity-10 text-white px-4 py-2 rounded-full text-sm font-medium">Analisi strategica</span>
                    <span className="bg-[#3064AC] bg-opacity-10 text-white px-4 py-2 rounded-full text-sm font-medium">Risoluzione scientifica</span>
                    <span className="bg-[#3064AC] bg-opacity-10 text-white px-4 py-2 rounded-full text-sm font-medium">Politiche concrete</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Newsletter and Contact */}
          <div className="max-w-6xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group rounded-xl shadow-lg p-6">
                <span className='flex flex-row items-center gap-2 mb-4'><h3 className="text-2xl font-bold">Rimani aggiornato</h3> <h3 className=' group-hover:text-red-600'>(Building...)</h3></span>
                <p className="text-lg mb-4 ">Iscriviti alla nostra newsletter per ricevere aggiornamenti sulla campagna e sulle iniziative nel Municipio.</p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input 
                    type="email" 
                    placeholder="La tua email" 
                    disabled
                    className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#3064AC]"
                  />
                  <button className="bg-[#3064AC] text-white hover:bg-[#245089] py-3 px-6 rounded-lg font-bold transition duration-300">
                    Iscriviti
                  </button>
                </div>
              </div>
              
              <div className=" rounded-xl shadow-lg p-6">
                <h3 className="text-2xl font-bold mb-4">Contattami</h3>
                <p className="text-lg mb-4">Hai domande o vuoi partecipare alla campagna? Scrivici!</p>
                <div className="space-y-4">
                  <p className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-[#3064AC] flex items-center justify-center mr-3">📧</span>
                    <a 
                      href="mailto:emanuelefarinini@gmail.com?subject=Richiesta%20di%20Informazioni&body=Buongiorno%20Emanuele%2C%0A%0A
                            Vorrei%20ricevere%20maggiori%20informazioni%20su%20[qui%20specifica%20di%20cosa%20si%20tratta].%0A%0A
                            In%20attesa%20di%20una%20sua%20risposta%2C%20le%20porgo%20cordiali%20saluti.%0A%0A
                            [Il%20tuo%20nome]"
                      className="flex items-center hover:underline"
                    >
                      <span className="text-lg">emanuelefarinini@gmail.com</span>
                    </a>
                  </p>
                  <p className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-[#3064AC] flex items-center justify-center mr-3">📱</span>
                    <span className="text-lg">+39 333 690 8545</span>
                  </p>
                  <p className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-[#3064AC] flex items-center justify-center mr-3">📍</span>
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



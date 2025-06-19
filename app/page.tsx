'use client'

import { Loading } from '@/components/loading-component';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Image from 'next/image';
import { Phone, MapPin, Mail, BarChart3, Cog, GraduationCap } from 'lucide-react';
import { toast } from "sonner"

export default function Home() {

const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/emanuelefarinini/' : '';

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
                <div className='flex flex-row w-full gap-2 text-center md:text-left justify-center md:justify-start'>
                  <h1 className='text-3xl md:text-6xl font-bold mb-2'>
                    Emanuele
                  </h1>
                  <h1 className='text-3xl md:text-6xl font-bold mb-2 text-[#3064AC]'>
                    ·
                  </h1>
                  <h1 className='text-3xl md:text-6xl font-bold mb-2'>
                    Farinini
                  </h1>
                </div>
                <span className='flex flex-col gap-2 text-xl md:text-2xl font-base mb-6 text-muted-foreground'>
                  <p className="w-full text-center md:text-left">Consulente Chemiometrico & Data Analyst</p>
                  <div className="flex flex-row flex-wrap justify-center md:justify-start gap-1 text-lg">
                    <p className='border-b-[1px] border-dashed mr-1 text-[#3064AC] border-[#3064AC]'>Experimental Design</p>
                    <p>•</p>
                    <p className='ml-1 text-[#3064AC] border-[#3064AC] border-b-[1px] border-dashed'>Analisi Multivariata</p>
                  </div>
                </span>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className='bg-[#3064AC] p-4 rounded-lg shadow-lg mb-6'
                >
                  <p className='text-xl md:text-2xl font-medium text-white'>
                    Trasformo dati complessi in soluzioni concrete per l'industria
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
                      src={`${basePath}/Emanuele-Farinini.webp`}
                      alt="Emanuele Farinini - Consulente Chemiometrico"
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
            {/* Services Section */}
            <h2 className="text-4xl font-bold mb-12 text-center">I miei servizi</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Service 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#3064AC] hover:transform hover:scale-105 transition duration-300"
              >
                <div className="flex items-center mb-4">
                  <BarChart3 className="text-[#3064AC] mr-3" size={32} />
                  <h3 className="text-2xl font-bold text-[#3064AC]">Analisi Chemiometrica</h3>
                </div>
                <p className="text-lg mb-4">Ottimizzazione processi e controllo qualità</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="min-w-6 h-6 rounded-full bg-[#3064AC] text-white flex items-center justify-center mr-3 mt-1 text-sm">✓</div>
                    <span className="text-base"><strong>Experimental Design:</strong> Progettazione sperimentale per ottimizzare processi industriali in ambito farmaceutico, alimentare e manifatturiero</span>
                  </li>
                  <li className="flex items-start">
                    <div className="min-w-6 h-6 rounded-full bg-[#3064AC] text-white flex items-center justify-center mr-3 mt-1 text-sm">✓</div>
                    <span className="text-base"><strong>Analisi Multivariata:</strong> Elaborazione statistica di dati complessi per identificare pattern e correlazioni</span>
                  </li>
                </ul>
              </motion.div>
              
              {/* Service 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#3064AC] hover:transform hover:scale-105 transition duration-300"
              >
                <div className="flex items-center mb-4">
                  <Cog className="text-[#3064AC] mr-3" size={32} />
                  <h3 className="text-2xl font-bold text-[#3064AC]">Consulenza Industriale</h3>
                </div>
                <p className="text-lg mb-4">Soluzioni personalizzate per l'industria</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="min-w-6 h-6 rounded-full bg-[#3064AC] text-white flex items-center justify-center mr-3 mt-1 text-sm">✓</div>
                    <span className="text-base"><strong>Process Monitoring:</strong> Monitoraggio multivariato di processi produttivi in tempo reale</span>
                  </li>
                  <li className="flex items-start">
                    <div className="min-w-6 h-6 rounded-full bg-[#3064AC] text-white flex items-center justify-center mr-3 mt-1 text-sm">✓</div>
                    <span className="text-base"><strong>Quality Control:</strong> Implementazione di sistemi di controllo qualità basati su tecniche chemiometriche avanzate</span>
                  </li>
                </ul>
              </motion.div>
              
              {/* Service 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#3064AC] hover:transform hover:scale-105 transition duration-300"
              >
                <div className="flex items-center mb-4">
                  <GraduationCap className="text-[#3064AC] mr-3" size={32} />
                  <h3 className="text-2xl font-bold text-[#3064AC]">Formazione & Training</h3>
                </div>
                <p className="text-lg mb-4">Corsi specialistici e trasferimento competenze</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="min-w-6 h-6 rounded-full bg-[#3064AC] text-white flex items-center justify-center mr-3 mt-1 text-sm">✓</div>
                    <span className="text-base"><strong>Corsi Aziendali:</strong> Formazione personalizzata su metodologie chemiometriche per team industriali</span>
                  </li>
                  <li className="flex items-start">
                    <div className="min-w-6 h-6 rounded-full bg-[#3064AC] text-white flex items-center justify-center mr-3 mt-1 text-sm">✓</div>
                    <span className="text-base"><strong>Software CAT:</strong> Sviluppo e supporto per il software chemiometrico gratuito disponibile su gruppochemiometria.it</span>
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
              <h2 className="text-3xl font-bold mb-4 text-white">💡 Hai un problema analitico complesso?</h2>
              <p className="text-xl mb-6 text-white">📊 Insieme possiamo trovare la soluzione ottimale utilizzando approcci data-driven</p>
              <div className="flex flex-col md:flex-row justify-center gap-4">
              <button 
                className="bg-white hover:bg-gray-100 text-[#3064AC] py-3 px-8 rounded-full text-lg font-bold transition duration-300 shadow-lg"
                onClick={() => {
                  toast("Parliamone! 🚀", {
                    description: "Discutiamo insieme il tuo progetto",
                    action: {
                      label: "OK",
                      onClick: () => console.log("OK"),
                    },
                  })
                }
              }>
                Contattami per una consulenza personalizzata
              </button>
              </div>
            </motion.div>
          </div>
          
          {/* Professional Bio */}
          <div className="bg-muted py-16">
            <div className="max-w-4xl mx-auto px-6">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/3">
                  <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden border-4 border-[#3064AC] shadow-lg">
                    <Image
                      src={`${basePath}/Emanuele-Farinini.webp`}
                      alt="Emanuele Farinini PhD"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                    />
                  </div>
                </div>
                <div className="w-full md:w-2/3 text-center md:text-left">
                  <h2 className="text-4xl font-bold mb-4">
                    <a className='hover:underline' href={basePath + '/curriculum'}>Emanuele Farinini, PhD</a>
                  </h2>
                  <h3 className="text-2xl font-medium text-[#3064AC] mb-4">Consulente Chemiometrico</h3>
                  <p className="text-lg mb-4">
                    Mi occupo di consulenza nell&apos;ambito chemiometrico dal 2019. Con un background sia accademico che pratico, 
                    ho maturato una grande esperienza nell&apos;analisi e risoluzione di problemi industriali che mi permette di affrontare qualsiasi difficoltà.
                  </p>
                  <p className="text-lg mb-4">
                    Il mio approccio combina rigore scientifico con competenze strategiche per fornire soluzioni concrete 
                    utilizzando Experimental Design e Analisi Multivariata in ambito farmaceutico, alimentare e manifatturiero.
                  </p>
                  <p className="text-lg mb-4">
                    Collaboro con aziende leader internazionali come Ferrero, Lavazza, Chiesi, Bracco e molte altre, 
                    offrendo consulenza specialistica e corsi di formazione personalizzati.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <span className="bg-[#3064AC] bg-opacity-10 text-[#3064AC] px-4 py-2 rounded-full text-sm font-medium">Experimental Design</span>
                    <span className="bg-[#3064AC] bg-opacity-10 text-[#3064AC] px-4 py-2 rounded-full text-sm font-medium">Analisi Multivariata</span>
                    <span className="bg-[#3064AC] bg-opacity-10 text-[#3064AC] px-4 py-2 rounded-full text-sm font-medium">Process Optimization</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Clienti & Progetti */}
          <div className="max-w-4xl mx-auto px-6 py-16">
            <div className="flex flex-col rounded-xl shadow-lg p-6 justify-center bg-white">
              <h3 className="text-2xl font-bold mb-4">Clienti e Collaborazioni</h3>
              <div className="gap-1 mb-4 inline-block">
                <span>
                  Ho collaborato con <span className="font-bold text-[#3064AC]">20+ aziende</span> leader nei settori farmaceutico, alimentare e manifatturiero, 
                  fornendo consulenza specialistica e formazione in chemiometria
                </span>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
                <div className="text-center p-4 border rounded-lg hover:shadow-md transition">
                  <div className="font-bold text-[#3064AC] text-2xl">20+</div>
                  <div className="text-sm text-gray-600">Aziende clienti</div>
                </div>
                <div className="text-center p-4 border rounded-lg hover:shadow-md transition">
                  <div className="font-bold text-[#3064AC] text-2xl">13</div>
                  <div className="text-sm text-gray-600">Pubblicazioni scientifiche</div>
                </div>
                <div className="text-center p-4 border rounded-lg hover:shadow-md transition">
                  <div className="font-bold text-[#3064AC] text-2xl">17</div>
                  <div className="text-sm text-gray-600">Conferenze internazionali</div>
                </div>
                <div className="text-center p-4 border rounded-lg hover:shadow-md transition">
                  <div className="font-bold text-[#3064AC] text-2xl">5+</div>
                  <div className="text-sm text-gray-600">Anni di esperienza</div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4 text-[#3064AC]">Alcuni dei miei clienti:</h4>
                <div className="flex flex-wrap gap-3 text-sm">
                  <span className="bg-gray-100 px-3 py-1 rounded-full">Ferrero</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full">Lavazza</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full">Chiesi Farmaceutici</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full">Bracco</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full">Olon S.p.A.</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full">Mozarc Medical</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full">J.M. Smucker (USA)</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full">TFTAK Estonia</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 mt-8">
              <div className="flex flex-col rounded-xl shadow-lg p-6 justify-center bg-white">
                <h3 className="text-2xl font-bold mb-4">Contattami</h3>
                <p className="text-lg mb-4">Hai un progetto o vuoi saperne di più sui miei servizi? Scrivimi!</p>
                <div className="flex flex-col md:flex-row w-full justify-between gap-4">
                    <p className="flex items-center">
                      <span className="w-8 h-8 rounded-full bg-[#3064AC] flex items-center justify-center mr-3"><Mail className='text-white' size={16}/></span>
                      <a 
                        href="mailto:farininixgenova@gmail.com?subject=Richiesta%20Consulenza%20Chemiometrica&body=Buongiorno%20Emanuele%2C%0A%0A
                              Vorrei%20ricevere%20maggiori%20informazioni%20sui%20suoi%20servizi%20di%20consulenza%20chemiometrica.%0A%0A
                              Il%20mio%20progetto%20riguarda%3A%20[descrivi%20brevemente]%0A%0A
                              In%20attesa%20di%20una%20sua%20risposta%2C%20le%20porgo%20cordiali%20saluti.%0A%0A
                              [Il%20tuo%20nome]%0A[La%20tua%20azienda]"
                        className="flex items-center hover:underline"
                      >
                        <span className="text-lg overflow-hidden text-ellipsis">farininixgenova@gmail.com</span>
                      </a>
                    </p>
                    <p className="flex items-center">
                      <span className="w-8 h-8 rounded-full bg-[#3064AC] flex items-center justify-center mr-3"><Phone className='text-white' size={16}/></span>
                      <span className="text-lg">Contatti telefonici via email</span>
                    </p>
                    <p className="flex items-center mr-4">
                      <span className="w-8 h-8 rounded-full bg-[#3064AC] flex items-center justify-center mr-3"><MapPin className='text-white' size={16}/></span>
                      <span className="text-lg">Genova, Italia</span>
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

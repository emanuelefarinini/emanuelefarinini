import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const PublicationsList = () => {
  const [activeSection, setActiveSection] = useState('publications');

  const books = [
    {
        authors: "Emanuele Farinini",
        year: 2025,
        title: "Basic Chemometrics for Analytical Chemists",
        chapter: "Experimental Design" ,
        publisher: "World Scientific Publishing."
        
    }
  ]

  const publications = [
    {
      authors: "Monteleone, L.; Speciale, A.; Valenti, G. E.; Leardi, R.; Farinini, E.; Traverso, N.; Ravera, S.; Garbarino, O.; Domenicotti, C",
      year: 2021,
      title: "PKCα Inhibition as a Strategy to Sensitize Neuroblastoma Stem Cells to Etoposide by Stimulating Ferroptosis",
      journal: "Antioxidants, 10(5), 691",
      doi: "10.3390/antiox10050691"
    },
    {
      authors: "Marengo, B.; Pulliero, A.; Corrias, M. V.; Leardi, R.; Farinini, E.; Fronza, G.; Domenicotti, C.",
      year: 2021,
      title: "Potential Role of miRNAs in the Acquisition of Chemoresistance in Neuroblastoma",
      journal: "Journal of personalized medicine, 11(2), 107",
      doi: "10.3390/jpm11020107"
    },
    {
      authors: "Forni, F.; Farinini, E.; Leardi, R.; Rinaldo, A.",
      year: 2021,
      title: "Effects of visual training on motor performance in young tennis players using FitLight Trainer",
      journal: "The Journal of sports medicine and physical fitness",
      doi: "10.23736/S0022-4707.21.12145-0"
    },
    {
      authors: "Turrini, F.; Farinini, E.; Leardi, R.; Grasso, F.; Orlandi, V.; Boggia, R.",
      year: 2022,
      title: "A Preliminary Color Study of Different Basil-Based Semi-Finished Products during Their Storage",
      journal: "Molecules 2022, 27(7), 2059",
      doi: "10.3390/molecules27072059"
    },
    {
      authors: "Mara, A.; Deidda, S.; Caredda, M.; Ciulu, M.; Deroma, M.; Farinini, E.; Floris, I.; Langasco, I.; Leardi, R.; Pilo, M.I.; Spano, N.; Sanna, G.",
      year: 2022,
      title: "Multi-Elemental Analysis as a Tool to Ascertain the Safety and the Origin of Beehive Products: Development, Validation, and Application of an ICP-MS Method on Four Unifloral Honeys Produced in Sardinia, Italy",
      journal: "Molecules, 27(6)",
      doi: "10.3390/molecules27062009"
    },
    {
      authors: "Mameli, V.; Sanna Angotzi, M.; Farinini, E.; Leardi, R.; Lugliè, C.; Cannas, C.",
      year: 2023,
      title: "Intrasource provenance study on Monte Arci (Sardinia) obsidian by pXRF: Role of the data acquisition and analysis tools",
      journal: "Heliyon, vol. 9, no. 3",
      doi: "10.1016/j.heliyon.2023.e13958"
    },
    {
      authors: "Garbarino, O.; Valenti, G. E.; Monteleone L.; Pietra, G.; Mingari, M. C.; Benzi, A.; Santina Bruzzone, S.; Ravera, S.; L., Leardi, R.; Farinini E.; Vernazza, S.; Grottoli, M.; Marengo, B.; Domenicotti, C.",
      year: 2023,
      title: "PLX4032 resistance of patient-derived melanoma cells: crucial role of oxidative metabolism",
      journal: "Front Oncol, vol. 13",
      doi: "10.3389/fonc.2023.1210130"
    },
    {
      authors: "Ferreiro, B.; Farinini, E.; Leardi, R.; Andrade, J.",
      year: 2023,
      title: "Supervised classification combined with genetic algorithm variable selection for a fast identification of polymeric microdebris using infrared reflectance",
      journal: "Marine Pollution Bulletin",
      doi: "10.1016/j.marpolbul.2023.115540"
    },
    {
      authors: "Marchianò, V.; Tricase, A.; Caputo, M.; Farinini, E.; Leardi, R.; Imbriano, A.; Leech, D.; Kidayaveettil, R.; Gentile, L.; Torsi, L.; Macchia, E.; Bollella, P.",
      year: 2023,
      title: "Tailoring Water-based Graphite Conductive Ink Formulation for Enzyme Stencil-Printing: Experimental Design to Enhance Wearable Biosensors Performance",
      journal: "Chemistry of Materials",
      doi: "10.1021/acs.chemmater.3c02229"
    },
    {
      authors: "Minuto, F.; Farinini, E.; Leardi, R.; Solokha, P.; Basso, A.",
      year: 2023,
      title: "Two photons are better than one: continuous flow synthesis of β-lactones through a doubly photochemically-activated Paternò Büchi reaction",
      journal: "Journal of Flow Chemistry",
      doi: "10.1007/s41981-023-00297-7"
    },
    {
      authors: "Donno, D.; Turrini, F.; Farinini E.; Mellano M.G.; Boggia R.; Beccaro G.L.; Gamba G.",
      year: 2024,
      title: "Chestnut Episperm as a Promising Natural Source of Phenolics from Agri-Food Processing by-Products: Optimisation of a Sustainable Extraction Protocol by Ultrasounds",
      journal: "Agriculture",
      doi: "10.3390/agriculture14020246"
    },
    {
      authors: "Ascensão, G.; Farinini, E.; Ferreira, V.M.; Leardi, R.",
      year: 2024,
      title: "Development of Eco-efficient Limestone Calcined Clay Cement (LC3) Mortars by a Multi-step Experimental Design",
      journal: "Chemometrics and Intelligent Laboratory Systems Journal",
      doi: "10.1016/j.chemolab.2024.105195"
    },
    {
      authors: "Cirignano, M., Roshan, H., Farinini, E., Di Giacomo, A., Fiorito, S., Piccinotti, D., Khabbazabkenar, S., Di Stasio, F., Moreels, I.",
      year: 2024,
      title: "Blue CdSe/CdS core/crown nanoplatelet light-emitting diodes obtained via a design-of-experiments approach",
      journal: "Nanoscale",
      doi: "10.1039/D4NR03461A"
    }
  ];

  const conferences = [
    {
      authors: "Farinini, E.; Leardi R.",
      title: "Characterization of a raw material through analytical profiles and data fusion",
      conference: "XVIII Chemometrics in Analytical Chemistry (CAC)",
      date: "July 20-21, 2021"
    },
    {
      authors: "Farinini, E.; Leardi R.",
      title: "Characterization of a raw material through analytical profiles and data fusion",
      conference: "XXVII Congresso Nazionale della Società Chimica Italiana (SCI)",
      date: "September 14-23, 2021"
    },
    {
      authors: "Farinini, E.; Leardi R.",
      title: "Product monitoring and exploratory analysis of historical data",
      conference: "International Conference on NIR (ICNIRS)",
      date: "October 17-21, 2021"
    },
    {
      authors: "Cavagnero, C.; Micera, M.; Destefano, R.; Farinini, E.; Botto, A.; Leardi, R.; Viscardi, G.",
      title: "Optimization of supercritical CO2 oil extraction from waste of tomatoes paste production",
      conference: "Merck Young Chemists' Symposium 2021",
      date: "November 22-24, 2021"
    },
  {
    authors: "Cavagnero, C.; Farinini, E.; Gueguen, V.; Leardi, R.; Pavon-Djavid, G.; Botto, A.; Viscardi, G.",
    title: "NLC synthesis optimization process of lycopene enriched S-CO2 extract",
    conference: "First Symposium for YouNg Chemists: Innovation and Sustainability (SYNC2022)",
    date: "Rome (IT), June 20-23, 2022"
  },
  {
    authors: "Cardellicchio, F.; Farinini, E.; Malegori, C.; Leardi, R.; Salvi, A.M.; Olivieri, P.",
    title: "A chemometric approach for the development of a new cleaning strategy of iron stains on Carrara marbles and its evaluation through image analysis",
    conference: "XIX Congresso Nazionale della Divisione di Chimica dell'Ambiente e dei Beni Culturali",
    date: "Turin (IT), June 20-23, 2022"
  },
  {
    authors: "B. Ferreiro, B.; Andrade, J.M.; Leardi, R.; Farinini, E.",
    title: "Supervised classification combined with genetic algorithm variable selection for microplastics measured by infrared spectrometry",
    conference: "XXVI Encontro Galego-Portugués de Química",
    date: "Santiago De Compostela (ES), November 16-18, 2022"
  },
  {
    authors: "M. Balbi, M.; Bonifacino, T.; Ravera, S.; Fenoglio, D.; Altosole, T.; Filaci G.; Leardi, R.; Farinini, E.; Cerminara, M.; Puliti, A.; Milanese, M.; Bonanno, G.",
    title: "Partial deletion of mGluR5 affects microglia inflammatory phenotype, bioenergetic characteristics, and red-ox state during ALS progression in SOD1G93A mice",
    conference: "Federation European Neuroscience Society (FENS) Forum Congress",
    date: "Paris (FR), July 9-13, 2022"
  },
  {
    authors: "Venezia, E.; Ricci, M.; Salimi, P.; Farinini, E.; Zaccaria, R.P.",
    title: "Linking the performance of lithium sulfur batteries to electrode composition and electrolyte formulation through mixture process design of experiments",
    conference: "The International Conference on Lithium-Sulfur Batteries (ICLSB)",
    date: "June 28 – July 1, 2021"
  },
  {
    authors: "Buccioli, M.; Farinini, E.; Leardi, R.; Moro, A.; Basso, A.",
    title: "Experimental Design: study of an industrial reductive amination reaction",
    conference: "XXII Congresso Nazionale Divisione Chimica Industriale",
    date: "Catania (IT), November 7-8, 2022"
  },
  {
    authors: "Farinini, E.; Leardi, R.; Ascensão, G.",
    title: "Development of eco-efficient cements by a multi-step Experimental Design",
    conference: "PhD day",
    date: "Genova (IT), February 16, 2023"
  },
  {
    authors: "Minuto, F.; Farinini, E.; Leardi, R.; Solokha, P.; Basso, A.",
    title: "Study of a doubly photochemically activated Paternò-Büchi Reaction through Design of Experiments",
    conference: "XLVII \"A. Corbella\" International Summer School on Organic Synthesis (ISOS2023)",
    date: "Gargnano (IT), June 18-23, 2023"
  },
  {
    authors: "Farinini, E.; Leardi, R.; Ascensão, G.",
    title: "Development of eco-efficient cements by a multi-step Experimental Design",
    conference: "Colloquium Chemometricum Mediterraneum XI (CCMXI)",
    date: "Padova (IT), June 27-30, 2023"
  },
  {
    authors: "Cirignano, M.; Roshan, H.; Di Giacomo, A.; Piccinotti, D.; Fiorito, S.; Khabbazabkenar, S.; Farinini, E.; Leardi, R.; Prato, M.; Di Stasio, F.; Moreels, I.",
    title: "Blue-emitting CdSe/CdS core-crowned nanoplatelets: the power of Design of Experiments on optical performances and LED fabrication",
    conference: "14th International Conference on Optical Probes of Organic and Hybrid Semiconductors (OP2023)",
    date: "Como (IT), September 10-15, 2023"
  },
  {
    authors: "Amata, C.; Panizzi, S.; Farinini, E.; Lavagna, L.; Pavese, M.",
    title: "Functionalized carbon nanomaterials in cement, a multivariate approach",
    conference: "European Conference on Composite Materials ECCM21",
    date: "Nantes (FR), July 2-5, 2024"
  },
  {
    authors: "Coniglio, C.; Calvano, C. D.; Farinini, E.; Cataldi, T.R.I.; Patruno, A.; Carriglia, M.; Longobardi, F.",
    title: "Optimizing a sustainable approach: green extraction of anthocyanins from Apulian pigmented wheat landraces",
    conference: "XXVIII Congresso Nazionale della Società Chimica Italiana",
    date: "Milano (IT), August 26-30, 2024"
  },
  {
    authors: "Buccioli, M.; Farinini, E.; Leardi, R.; Moro, A.; Maes, B.; Basso",
    title: "",
    conference: "",
    date: ""
  }
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="max-w-4xl">
      <div className="flex mb-6 border-b justify-center gap-4">
        <button
          className={`py-2 ${activeSection === 'publications' ? 'border-b-2 border-[#3064AC] text-[#3064AC]' : 'text-gray-500'}`}
          onClick={() => setActiveSection('publications')}
        >
          Pubblicazioni scientifiche
        </button>
        <button
          className={`py-2 ${activeSection === 'conferences' ? 'border-b-2 border-[#3064AC] text-[#3064AC]' : 'text-gray-500'}`}
          onClick={() => setActiveSection('conferences')}
        >
          Comunicazioni a congresso
        </button>
        <button
          className={`py-2 ${activeSection === 'books' ? 'border-b-2 border-[#3064AC] text-[#3064AC]' : 'text-gray-500'}`}
          onClick={() => setActiveSection('books')}
        >
          Libri
        </button>
      </div>

      <AnimatePresence mode="wait">
        {activeSection === 'publications' && (
          <motion.ul 
            key="publications"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="space-y-4"
          >
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-muted p-2 rounded-lg hover:bg-muted transition-colors duration-300 flex gap-4"
              >
                <div className='flex flex-col justify-center h-auto p-2 bg-[#3064AC]/80 rounded-sm text-white'>
                  {index + 1}
                </div>
                <li>
                  <p className="font-semibold text-sm">{pub.authors}</p>
                  <h2 className="font-bold mt-2 text-sm italic">{pub.title}</h2>
                  <div className="mt-1 text-xs">
                    <span>{pub.journal}</span>
                    <span className="ml-2 text-[#3064AC]">DOI: {pub.doi}</span>
                  </div>
                </li>
              </motion.div>
            ))}
          </motion.ul>
        )}

        {activeSection === 'conferences' && (
          <motion.ul 
            key="conferences"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="space-y-4"
          >
            {conferences.map((conf, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-muted p-2 rounded-lg hover:bg-mutedtransition-colors duration-300 flex gap-4"
              >
                <div className='flex flex-col justify-center h-auto p-2 bg-[#3064AC]/80 rounded-sm text-white'>
                  {index + 1}
                </div>
                <li>
                  <p className="font-semibold text-sm">{conf.authors}</p>
                  <h2 className="font-bold mt-2 text-sm italic">{conf.title}</h2>
                  <div className="mt-1 text-xs">
                    <span>{conf.conference}</span>
                    <span className="ml-2 text-[#3064AC]">{conf.date}</span>
                  </div>
                </li>
              </motion.div>
            ))}
          </motion.ul>
        )}

        {activeSection === 'books' && (
          <motion.ul 
            key="books"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="space-y-4"
          >
            {books.map((book, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-muted p-2 rounded-lg hover:bg-muted transition-colors duration-300 flex gap-4"
              >
                <div className='flex flex-col justify-center h-auto p-2 bg-[#3064AC]/80 rounded-sm text-white'>
                  {index + 1}
                </div>
                <li>
                  <p className="font-semibold text-sm">{book.authors}</p>
                  <h2 className="font-bold mt-2 text-sm italic">{book.title}</h2>
                  <div className="mt-1 text-xs">
                    <span>{book.chapter}</span>
                    <span className="ml-2 text-[#3064AC]">{book.year} - {book.publisher}</span>
                  </div>
                </li>
              </motion.div>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PublicationsList;
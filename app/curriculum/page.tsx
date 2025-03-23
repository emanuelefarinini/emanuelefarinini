'use client'

import { Navbar } from '@/components/navbar';
import { useRef } from 'react';
import Image from 'next/image';
import { Footer } from '@/components/footer';
import DownloadPDF from '@/components/pdf';

export default function Curriculum() {
  const contentRef = useRef(null);
  const isProd = process.env.NODE_ENV === 'production';
  const basePath = isProd ? '/emanuelefarinini/' : '';


  return (
    <>
    <div className="bg-background min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4  max-w-5xl" ref={contentRef}>
      <header className="flex flex-col md:flex-row justify-between items-center border-b border-gray-300 py-6 mb-8 gap-4 h-full">
        <div className='h-full'>
          <h1 className="text-4xl font-bold mb-2 text-[#3064AC] ">CURRICULUM VITAE</h1>
          <h2 className="text-2xl font-semibold mb-4">EMANUELE FARININI, PhD</h2>
          <p className="text-lg mb-2 flex flex-col gap-1 text-muted-foreground">
          <a 
            href="mailto:farinixgenova@gmail.com?subject=Richiesta%20di%20Informazioni&body=Buongiorno%20Emanuele%2C%0A%0A
                  Vorrei%20ricevere%20maggiori%20informazioni%20su%20[qui%20specifica%20di%20cosa%20si%20tratta].%0A%0A
                  In%20attesa%20di%20una%20sua%20risposta%2C%20le%20porgo%20cordiali%20saluti.%0A%0A
                  [Il%20tuo%20nome]"
            className="flex items-center hover:underline"
          >
            <span className="text-lg">farininixgenova@gmail.com</span>
          </a>
          </p>
          <div className='hidden md:flex flex-row gap-2 items-start mt-auto'>
            <DownloadPDF />
          </div>
        </div>
          
          <div className="w-full md:w-1/3">
            <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden border-4 border-[#3064AC] shadow-lg">
              <Image
                src={`${basePath}/Emanuele-Farinini.webp`} // Ensure correct path
                alt="Emanuele Farini"
                fill
                objectFit="cover"
                className="rounded-full"
              />
            </div>
          </div>

          <div className='md:hidden w-full flex flex-row gap-2 justify-center mt-auto'>
            <DownloadPDF />
          </div>
        </header>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-[#3064AC]">IN POCHE PAROLE</h2>
          <h2 className="text-md font-bold mb-2">Approccio Multivariato per la risoluzione dei problemi</h2>
          <p className="mb-6">
          Specializzato nell&apos;uso dell&apos;Experimental Design e dell&apos;Analisi Multivariata per l&apos;ottimizzazione di processi, il monitoraggio e il controllo qualità in ambito farmaceutico, alimentare e manifatturiero.
          </p>
          <h2 className="text-md font-bold mb-2 ">Ricerca e Collaborazioni Internazionali</h2>
          <p className="mb-6">
          Esperienza accademica e industriale con pubblicazioni su riviste di alto impatto e collaborazioni con aziende e centri di ricerca leader a livello internazionale.
          </p>
          <h2 className="text-md font-bold mb-2">Didattica e Divulgazione</h2>
          <p className="mb-6">
          Docente in corsi universitari e scuole di chemiometria, autore di contenuti educativi (capitolo di libro, software open-source, canale YouTube), con un forte impegno nella diffusione delle metodologie chemiometriche.
          </p>
          <h2 className="text-md font-bold mb-2"> Passione per lo sport</h2>
          <p className="mb-6">
          Canottiere presso il Rowing Club Genovese 1890, velista presso la Lega Navale Italiana, sezione Genova Centro.
          </p>


        </section >

        <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-[#3064AC]">BIOGRAFIA</h2>
          <p className="mb-4">
            Emanuele Farinini è nato a Genova (Italia) il 31 ottobre 1994.
          </p>
          <p className="mb-4">
            A luglio 2018 si è laureato in Farmacia e Farmacia Industriale presso il Dipartimento di Farmacia dell&apos;Università di Genova (110/110); Tesi sperimentale: &quot;Estrazione innovativa del licopene e valutazione biologica dell&apos;estratto&quot; svolta in collaborazione con diversi dipartimenti (DIFAR, DICCA, DISC dell&apos;Università di Genova) con pubblicazione su ChERD (Chemical Engineering Research and Design, rivista internazionale principale in ingegneria chimica) e brevetto del processo di estrazione (Design and Solid-Liquid multiVariable Extractor - SoLVE, numero di brevetto WO2021090250A1). Ha partecipato anche come rappresentante degli studenti e membro del Comitato Direttivo del Dipartimento di Farmacia e Chimica e Tecnologia Farmaceutiche. Attualmente iscritto all            A luglio 2018 si è laureato in Farmacia e Farmacia Industriale presso il Dipartimento di Farmacia dell&apos;Università di Genova (110/110); Tesi sperimentale: &quot;Estrazione innovativa del licopene e valutazione biologica dell&apos;estratto&quot; svolta in collaborazione con diversi dipartimenti (DIFAR, DICCA, DISC dell&apos;Università di Genova) con pubblicazione su ChERD (Chemical Engineering Research and Design, rivista internazionale principale in ingegneria chimica) e brevetto del processo di estrazione (Design and Solid-Liquid multiVariable Extractor - SoLVE, numero di brevetto WO2021090250A1). Ha partecipato anche come rappresentante degli studenti e membro del Comitato Direttivo del Dipartimento di Farmacia e Chimica e Tecnologia Farmaceutiche. Attualmente iscritto all&apos;Ordine dei Farmacisti della Provincia di Genova.Ordine dei Farmacisti della Provincia di Genova.
          </p>
          <p className="mb-4">
            A marzo 2024 ha conseguito il Dottorato di Ricerca in Scienze e Tecnologie della Chimica e dei Materiali, con specializzazione in Scienze Farmaceutiche, Cosmetiche e Alimentari presso il Dipartimento di Chimica e Chimica Industriale (DCCI) dell&apos;Università di Genova e l&apos;Istituto Italiano di Tecnologia (IIT); Tesi di dottorato: &quot;Uso dell&apos;Experimental Design e dell&apos;Analisi Multivariata per la risoluzione di problemi industriali&quot; (link alla tesi). Ha condotto la sua ricerca nel Gruppo di Ricerca di Chimica Analitica e Chemiometria, collaborando con industrie manifatturiere e gruppi di ricerca internazionali.
          </p>
          <p className="mb-4">
            Da agosto 2018 a dicembre 2019 ha lavorato come scienziato R&D nello Early Product Development (EPD) e Chemical Manufacturing and Control (CMC) presso Chiesi Limited UK, situato a Chippenham, Wiltshire, UK. Successivamente ha iniziato una carriera professionale come consulente chemiometra in collaborazione con il Professor Riccardo Leardi, un ruolo che continua a ricoprire. La sua ricerca e consulenza si concentrano sulla risoluzione di problemi industriali utilizzando tecniche chemiometriche. Queste tecniche includono Experimental Design, ottimizzazione di processi, monitoraggio multivariato di processi e controllo qualità multivariato.
          </p>
          <p className="mb-4">
            Il suo principale interesse è l&apos;approccio multivariato alla risoluzione di problematiche industriali, dalla scelta della strategia ottimale nella pianificazione sperimentale alla calibrazione, sfruttando tutte le fonti di informazione nei processi di produzione. Inoltre, sta sviluppando il software chemiometrico CAT, disponibile gratuitamente sul sito gruppochemiometria.it. Per facilitarne l&apos;utilizzo e promuovere la diffusione della chemiometria, gestisce un canale YouTube con tutorial e demo, disponibile all&apos;indirizzo YouTube.
          </p>
          <p className="mb-4">
            È co-autore di 13 articoli scientifici e 17 comunicazioni in congressi nazionali e internazionali. In collaborazione con il Professor Riccardo Leardi, ha tenuto conferenze e corsi in diverse industrie e centri di ricerca: Biofer S.p.A., Bracco, Cambrex Profarmaco Milano SRL, Center of Food and Fermentation Technologies (TFTAK) Tallinn, Centro Sportivo Remiero di Sabaudia - Marina Militare, Chiesi Farmaceutici, Ferrero, Istituto Italiano di Tecnologia (IIT), Innovhub, Istituto Zooprofilattico Sperimentale, Mozarc Medical, Merck Serono, Lavazza, Olon S.p.A, Procos S.p.A, Roquette Italia S.p.A., Università di Genova, Università di Modena, Università della Basilicata.
          </p>
          <p className="mb-4">
            È docente alla Scuola &quot;Chemometric Tools for Process Monitoring&quot; presso l&apos;Università di Modena dal 2024. Attualmente tiene un corso di dottorato in Medicina Sperimentale (DiMes) dal titolo &quot;Experimental Design e analisi multivariata&quot; presso l&apos;Università di Genova. Ha insegnato alle due scuole di Chemiometria (Analisi Multivariata; Experimental Design), entrambe tenute due volte l&apos;anno presso l&apos;Università di Genova (2020-2023).
          </p>
          <p className="mb-4">
            È revisore per la rivista Chemometrics and Intelligent Laboratory Systems (CHEMOLAB).
          </p>
          <p className="mb-4">
            È un atleta pluripremiato (due Medaglie di Bronzo CONI per il Valore Atletico), nono ai Campionati Mondiali di Coastal Rowing assoluti (2024), cinque volte Campione Italiano di Canottaggio categorie Senior, Universitari, Esordienti (2015-2021).
          </p>
          <p className="mb-4">
            È anche appassionato nell&apos;applicare le sue competenze professionali alle passioni personali, che spaziano dallo sport all&apos;ottimizzazione delle ricette culinarie. Ha collaborato con Francesco Cattaneo, direttore tecnico capo della Federazione Italiana Canottaggio, per migliorare le prestazioni degli atleti olimpici italiani in preparazione per Tokyo 2020. Inoltre, ha ottimizzato la ricetta tradizionale di pesto con pestello e mortaio attraverso lo studio dei rapporti degli ingredienti mediante Mixture Design, diventando finalista al &apos;IX Genova Pesto World Championship&apos; e competendo tra 100 semifinalisti provenienti da tutto il mondo (2021). La sua analisi statistica dei dati storici di tutte le edizioni del campionato mondiale è stata presentata a Palazzo della Regione Liguria (Genova), in collaborazione con Ben Thuriaux-Alemán, partner di Arthur D. Little (2024).
          </p>
          <p className='mb-4'>
            È autore del capitolo “Experimental Design” del libro “Basic Chemometrics for Analytical Chemists”, in corso di stampa da World Scientific Publishing.
          </p>
          <p className="mb-4">
            Parla fluentemente le seguenti lingue: italiano, inglese; conoscenza di base: tedesco.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-[#3064AC]">CONSULENZE</h2>
          <p className="mb-4">
            Dal 2020 ha iniziato la sua attività di consulenza chemiometrica in collaborazione con il Professor Riccardo Leardi. Si elencano i loro clienti:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Agras Delic (Italia): applicazione dell&apos;analisi multivariata ai prodotti di pet food;</li>
            <li>Biofer S.p.A. (Italia): corso di chemiometria, applicazione dell&apos;Experimental Design per l&apos;ottimizzazione e il monitoraggio dei processi;</li>
            <li>Bracco (Italia): corso di chemiometria;</li>
            <li>Cambrex Profarmaco (Italia): corso di chemiometria, applicazione dell&apos;Experimental Design e dell&apos;analisi multivariata ai prodotti farmaceutici, monitoraggio dei processi mediante sonda NIR;</li>
            <li>Center of Food and Fermentation Technologies (TFTAK) Tallinn (Estonia): corso di Experimental Design;</li>
            <li>Chiesi Farmaceutici (Italia): corso di chemiometria, applicazione dell&apos;Experimental Design e dell&apos;analisi multivariata al reparto Chemical Manufacturing and Control (CMC);</li>
            <li>Federazione Italiana di Canottaggio – FIC (Italia): monitoraggio multivariato dei dati di telemetria del quattro di coppia maschile olimpico e dell&apos;otto maschile, finalizzato al miglioramento delle prestazioni degli atleti olimpici italiani di canottaggio in preparazione per Tokyo 2020;</li>
            <li>Ferrero (Italia): corso di chemiometria, monitoraggio di processo ed Experimental Design applicato a numerosi prodotti dolciari industriali con siti di produzione da diverse parti del mondo;</li>
            <li>Fileni (Italia): analisi multivariata sui dati dell&apos;intera filiera dell&apos;industria avicola;</li>
            <li>HA Italia: corso di chemiometria, applicazione dell&apos;Experimental Design e dell&apos;analisi multivariata ai prodotti per fonderie;</li>
            <li>Innovhub (Italia): corso di chemiometria e consulenza su prodotti alimentari dell&apos;industria olearia;</li>
            <li>Istituto Italiano di Tecnologia - IIT (Italia): corso di chemiometria;</li>
            <li>J. M. Smucker (USA): calibrazione multivariata, data-fusion e SOPLS, N-way PCA e analisi dei dati sensoriali di caffè;</li>
            <li>Lavazza (Italia): corso di chemiometria, applicazione dell&apos;Experimental Design e dell&apos;analisi multivariata lungo l&apos;intera filiera di produzione del caffè;</li>
            <li>Merck Serono (Italia): corso di chemiometria;</li>
            <li>Mozarc Medical (Italia): corso di chemiometria, applicazione dell&apos;Experimental Design e dell&apos;analisi multivariata ai dispositivi medici;</li>
            <li>Olon S.p.A. (Italia): corso di chemiometria, applicazione dell&apos;Experimental Design ai processi sintetici, ottimizzazione di metodi analitici e analisi statistica finalizzata al controllo qualità;</li>
            <li>Perkin-Elmer (USA): applicazione dell&apos;Experimental Design alla progettazione di colonne cromatografiche;</li>
            <li>Procos SPA (Italia): corso di chemiometria, applicazione dell&apos;Experimental Design ai processi sintetici e ottimizzazione di metodi analitici;</li>
            <li>Roquette Italia S.P.A. (Italia): corso di chemiometria, monitoraggio di processo multivariato.</li>
          </ul>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-[#3064AC]">PUBBLICAZIONI</h2>
          <div className='mb-4'>
          <h4 className='text-lg font-semibold mb-4 border-b-[1px] border-dashed'>Libri</h4>
            <li className='list-disc'> 
              È autore del capitolo “Experimental Design” del libro “Basic Chemometrics for Analytical Chemists”, in corso di stampa da World Scientific Publishing.
            </li>
          </div>

          <h4 className='text-lg font-semibold mb-4 border-b-[1px] border-dashed'>Articoli scientifici</h4>
          <ol className="list-decimal pl-6 mb-6 space-y-3">
            <li>Monteleone, L.; Speciale, A.; Valenti, G. E.; Leardi, R.; Farinini, E.; Traverso, N.; Ravera, S.; Garbarino, O.; Domenicotti, C (2021). &quot;PKCα Inhibition as a Strategy to Sensitize Neuroblastoma Stem Cells to Etoposide by Stimulating Ferroptosis&quot;. Antioxidants, 10(5), 691. DOI: 10.3390/antiox10050691</li>
            <li>Marengo, B.; Pulliero, A.; Corrias, M. V.; Leardi, R.; Farinini, E.; Fronza, G.; Domenicotti, C. (2021). &quot;Potential Role of miRNAs in the Acquisition of Chemoresistance in Neuroblastoma&quot;. Journal of personalized medicine, 11(2), 107. DOI: 10.3390/jpm11020107.</li>
            <li>Forni, F.; Farinini, E.; Leardi, R.; Rinaldo, A. (2021). &quot;Effects of visual training on motor performance in young tennis players using FitLight Trainer&quot;. The Journal of sports medicine and physical fitness. DOI: 10.23736/S0022-4707.21.12145-0</li>
            <li>Turrini, F.; Farinini, E.; Leardi, R.; Grasso, F.; Orlandi, V.; Boggia, R. (2022). &quot;A Preliminary Color Study of Different Basil-Based Semi-Finished Products during Their Storage&quot;. Molecules 2022, 27(7), 2059. DOI: 10.3390/molecules27072059</li>
            <li>Mara, A.; Deidda, S.; Caredda, M.; Ciulu, M.; Deroma, M.; Farinini, E.; Floris, I.; Langasco, I.; Leardi, R.; Pilo, M.I.; Spano, N.; Sanna, G. (2022). &quot;Multi-Elemental Analysis as a Tool to Ascertain the Safety and the Origin of Beehive Products: Development, Validation, and Application of an ICP-MS Method on Four Unifloral Honeys Produced in Sardinia, Italy&quot;. Molecules, 27(6). DOI: 10.3390/molecules27062009</li>
            <li>Mameli, V.; Sanna Angotzi, M.; Farinini, E.; Leardi, R.; Lugliè, C.; Cannas, C. (2023). &quot;Intra-source provenance study on Monte Arci (Sardinia) obsidian by pXRF: Role of the data acquisition and analysis tools&quot;. Heliyon, vol. 9, no. 3. DOI: 10.1016/j.heliyon.2023.e13958</li>
            <li>Garbarino, O.; Valenti, G. E.; Monteleone L.; Pietra, G.; Mingari, M. C.; Benzi, A.; Santina Bruzzone, S.; Ravera, S.; L., Leardi, R.; Farinini E.; Vernazza, S.; Grottoli, M.; Marengo, B.; Domenicotti, C. (2023). &quot;PLX4032 resistance of patient-derived melanoma cells: crucial role of oxidative metabolism&quot;. Front Oncol, vol. 13. DOI: 10.3389/fonc.2023.1210130</li>
            <li>Garbarino, O.; Valenti, G. E.; Monteleone L.; Pietra, G.; Mingari, M. C.; Benzi, A.; Santina Bruzzone, S.; Ravera, S.; L., Leardi, R.; Farinini E.; Vernazza, S.; Grottoli, M.; Marengo, B.; Domenicotti, C. (2023). &quot;PLX4032 resistance of patient-derived melanoma cells: crucial role of oxidative metabolism&quot;. Front Oncol, vol. 13. DOI: 10.3389/fonc.2023.1210130</li>  
          <li>Balbi, M.; Bonifacino, T.; Ravera, S.; Fenoglio, D.; Altosole, T.; Filaci, G.; Leardi, R.; Farinini, E.; Cerminara, M.; Puliti, A.; Milanese, M.; Bonanno, G. (2022). &quot;Partial deletion of mGluR5 affects microglia inflammatory phenotype, bioenergetic characteristics, and red-ox state during ALS progression in SOD1G93A mice.&quot; Federation of European Neuroscience Society (FENS) Forum Congress, Paris (FR), July 9-13.</li>  
          <li>Venezia, E.; Ricci, M.; Salimi, P.; Farinini, E.; Zaccaria, R.P. (2021). &quot;Linking the performance of lithium-sulfur batteries to electrode composition and electrolyte formulation through mixture process design of experiments.&quot; The International Conference on Lithium-Sulfur Batteries (ICLSB), June 28 – July 1.</li>  
          <li>Buccioli, M.; Farinini, E.; Leardi, R.; Moro, A.; Basso, A. (2022). &quot;Experimental Design: study of an industrial reductive amination reaction.&quot; XXII Congresso Nazionale Divisione Chimica Industriale, Catania (IT), November 7-8.</li>  
          <li>Farinini, E.; Leardi, R.; Ascensão, G. (2023). &quot;Development of eco-efficient cements by a multi-step Experimental Design.&quot; PhD Day, Genova (IT), February 16.</li>  
          <li>Minuto, F.; Farinini, E.; Leardi, R.; Solokha, P.; Basso, A. (2023). &quot;Study of a doubly photochemically activated Paternò-Büchi Reaction through Design of Experiments.&quot; XLVII “A. Corbella” International Summer School on Organic Synthesis (ISOS2023), Gargnano (IT), June 18-23.</li>  
          <li>Farinini, E.; Leardi, R.; Ascensão, G. (2023). &quot;Development of eco-efficient cements by a multi-step Experimental Design.&quot; Colloquium Chemometricum Mediterraneum XI (CCMXI), Padova (IT), June 27-30.</li>  
          <li>Cirignano, M.; Roshan, H.; Di Giacomo, A.; Piccinotti, D.; Fiorito, S.; Khabbazabkenar, S.; Farinini, E.; Leardi, R.; Prato, M.; Di Stasio, F.; Moreels, I. (2023). &quot;Blue-emitting CdSe/CdS core-crowned nanoplatelets: the power of Design of Experiments on optical performances and LED fabrication.&quot; 14th International Conference on Optical Probes of Organic and Hybrid Semiconductors (OP2023), Como (IT), September 10-15.</li>  
          <li>Amata, C.; Panizzi, S.; Farinini, E.; Lavagna, L.; Pavese, M. (2024). &quot;Functionalized carbon nanomaterials in cement, a multivariate approach.&quot; European Conference on Composite Materials ECCM21, Nantes (FR), July 2-5.</li>  
          <li>Coniglio, C.; Calvano, C. D.; Farinini, E.; Cataldi, T.R.I.; Patruno, A.; Carriglia, M.; Longobardi, F. (2024). &quot;Optimizing a sustainable approach: green extraction of anthocyanins from Apulian pigmented wheat landraces.&quot; XXVIII Congresso Nazionale della Società Chimica Italiana, Milano (IT), August 26-30.</li>  
          <li>Buccioli, M.; Farinini, E.; Leardi, R.; Moro, A.; Maes, B.; Basso, A. (2024). &quot;From batch to flow chemistry: study of an industrial reductive amination reaction.&quot; Ischia Advanced School of Organic Chemistry 2024 - IASOC24, Ischia, September 19-23.</li>  

        </ol>
        </section>
        </div>
        </div>
        <Footer />
        </>
        );
    }
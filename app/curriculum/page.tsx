'use client'

import { Navbar } from '@/components/navbar';
import { useRef } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';

export default function Curriculum() {
  const contentRef = useRef(null);

  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12 max-w-5xl" ref={contentRef}>
      <header className="flex flex-row justify-between items-center border-b border-gray-300 pb-6 mb-8">
        <div>
        <h1 className="text-4xl font-bold mb-2">CURRICULUM VITAE</h1>
        <h2 className="text-2xl font-semibold mb-4">EMANUELE FARININI, PhD</h2>
        <p className="text-lg mb-2">
            <span className="font-medium">E-mail:</span> emanuelefarinini@gmail.com; emanuelefarinini@pec.it
        </p>
        </div>
        <div>
            <Avatar className="w-8 h-8"> {/* Reduced from w-16 h-16 to w-8 h-8 */}
            <AvatarImage 
                src="/Lele.png" 
                className="rounded-full object-cover" 
                alt="Profile photo" 
                height={120}
                width={120}
            />
            <AvatarFallback>EF</AvatarFallback>
            </Avatar>
        </div>
        </header>

        <section className="mb-10">
          <p className="mb-4">
            Emanuele Farinini è nato a Genova (Italia) il 31 ottobre 1994.
          </p>
          <p className="mb-4">
            A luglio 2018 si è laureato in Farmacia e Farmacia Industriale presso il Dipartimento di Farmacia dell'Università di Genova (110/110); Tesi sperimentale: "Estrazione innovativa del licopene e valutazione biologica dell'estratto" svolta in collaborazione con diversi dipartimenti (DIFAR, DICCA, DISC dell'Università di Genova) con pubblicazione su ChERD (Chemical Engineering Research and Design, rivista internazionale principale in ingegneria chimica) e brevetto del processo di estrazione (Design and Solid-Liquid multiVariable Extractor - SoLVE, numero di brevetto WO2021090250A1). Ha partecipato anche come rappresentante degli studenti e membro del Comitato Direttivo del Dipartimento di Farmacia e Chimica e Tecnologia Farmaceutiche.
          </p>
          <p className="mb-4">
            A marzo 2024 ha conseguito il Dottorato di Ricerca in Scienze e Tecnologie della Chimica e dei Materiali, con specializzazione in Scienze Farmaceutiche, Cosmetiche e Alimentari presso il Dipartimento di Chimica e Chimica Industriale (DCCI) dell'Università di Genova e l'Istituto Italiano di Tecnologia (IIT); Tesi di dottorato: "Uso dell'Experimental Design e dell'Analisi Multivariata per la risoluzione di problemi industriali" (link alla tesi). Ha condotto la sua ricerca nel Gruppo di Ricerca di Chimica Analitica e Chemiometria, collaborando con industrie manifatturiere e gruppi di ricerca internazionali.
          </p>
          <p className="mb-4">
            Da agosto 2018 a dicembre 2019 ha lavorato come scienziato R&D nello Early Product Development (EPD) e Chemical Manufacturing and Control (CMC) presso Chiesi Limited UK, situato a Chippenham, Wiltshire, UK. Successivamente ha iniziato una carriera professionale come consulente chemiometra in collaborazione con il Professor Riccardo Leardi, un ruolo che continua a ricoprire. La sua ricerca e consulenza si concentrano sulla risoluzione di problemi industriali utilizzando tecniche chemiometriche. Queste tecniche includono Experimental Design, ottimizzazione di processi, monitoraggio multivariato di processi e controllo qualità multivariato.
          </p>
          <p className="mb-4">
            Il suo principale interesse è l'approccio multivariato alla risoluzione di problematiche industriali, dalla scelta della strategia ottimale nella pianificazione sperimentale alla calibrazione, sfruttando tutte le fonti di informazione nei processi di produzione. Inoltre, sta sviluppando il software chemiometrico CAT, disponibile gratuitamente sul sito gruppochemiometria.it. Per facilitarne l'utilizzo e promuovere la diffusione della chemiometria, gestisce un canale YouTube con tutorial e demo, disponibile all'indirizzo YouTube.
          </p>
          <p className="mb-4">
            È co-autore di 13 articoli scientifici e 17 comunicazioni in congressi nazionali e internazionali. In collaborazione con il Professor Riccardo Leardi, ha tenuto conferenze e corsi in diverse industrie e centri di ricerca: Biofer S.p.A., Bracco, Cambrex Profarmaco Milano SRL, Center of Food and Fermentation Technologies (TFTAK) Tallinn, Centro Sportivo Remiero di Sabaudia - Marina Militare, Chiesi Farmaceutici, Ferrero, Istituto Italiano di Tecnologia (IIT), Innovhub, Istituto Zooprofilattico Sperimentale, Mozarc Medical, Merck Serono, Lavazza, Olon S.p.A, Procos S.p.A, Roquette Italia S.p.A., Università di Genova, Università di Modena, Università della Basilicata.
          </p>
          <p className="mb-4">
            È docente alla Scuola "Chemometric Tools for Process Monitoring" presso l'Università di Modena dal 2024. Attualmente tiene un corso di dottorato in Medicina Sperimentale (DiMes) dal titolo "Experimental Design e analisi multivariata" presso l'Università di Genova. Ha insegnato alle due scuole di Chemiometria (Analisi Multivariata; Experimental Design), entrambe tenute due volte l'anno presso l'Università di Genova (2020-2023).
          </p>
          <p className="mb-4">
            È revisore per la rivista Chemometrics and Intelligent Laboratory Systems (CHEMOLAB).
          </p>
          <p className="mb-4">
            È un atleta pluripremiato (due Medaglie di Bronzo CONI per il Valore Atletico), nono ai Campionati Mondiali di Coastal Rowing assoluti (2024), cinque volte Campione Italiano di Canottaggio categorie Senior, Universitari, Esordienti (2015-2021).
          </p>
          <p className="mb-4">
            È anche appassionato nell'applicare le sue competenze professionali alle passioni personali, che spaziano dallo sport all'ottimizzazione delle ricette culinarie. Ha collaborato con Francesco Cattaneo, direttore tecnico capo della Federazione Italiana Canottaggio, per migliorare le prestazioni degli atleti olimpici italiani in preparazione per Tokyo 2020. Inoltre, ha ottimizzato la ricetta tradizionale di pesto con pestello e mortaio attraverso lo studio dei rapporti degli ingredienti mediante Mixture Design, diventando finalista al 'IX Genova Pesto World Championship' e competendo tra 100 semifinalisti provenienti da tutto il mondo (2021). La sua analisi statistica dei dati storici di tutte le edizioni del campionato mondiale è stata presentata a Palazzo della Regione Liguria (Genova), in collaborazione con Ben Thuriaux-Alemán, partner di Arthur D. Little (2024).
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
            <li>Agras Delic (Italia): applicazione dell'analisi multivariata ai prodotti di pet food;</li>
            <li>Biofer S.p.A. (Italia): corso di chemiometria, applicazione dell'Experimental Design per l'ottimizzazione e il monitoraggio dei processi;</li>
            <li>Bracco (Italia): corso di chemiometria;</li>
            <li>Cambrex Profarmaco (Italia): corso di chemiometria, applicazione dell'Experimental Design e dell'analisi multivariata ai prodotti farmaceutici, monitoraggio dei processi mediante sonda NIR;</li>
            <li>Center of Food and Fermentation Technologies (TFTAK) Tallinn (Estonia): corso di Experimental Design;</li>
            <li>Chiesi Farmaceutici (Italia): corso di chemiometria, applicazione dell'Experimental Design e dell'analisi multivariata al reparto Chemical Manufacturing and Control (CMC);</li>
            <li>Federazione Italiana di Canottaggio – FIC (Italia): monitoraggio multivariato dei dati di telemetria del quattro di coppia maschile olimpico e dell'otto maschile, finalizzato al miglioramento delle prestazioni degli atleti olimpici italiani di canottaggio in preparazione per Tokyo 2020;</li>
            <li>Ferrero (Italia): corso di chemiometria, monitoraggio di processo ed Experimental Design applicato a numerosi prodotti dolciari industriali con siti di produzione da diverse parti del mondo;</li>
            <li>Fileni (Italia): analisi multivariata sui dati dell'intera filiera dell'industria avicola;</li>
            <li>HA Italia: corso di chemiometria, applicazione dell'Experimental Design e dell'analisi multivariata ai prodotti per fonderie;</li>
            <li>Innovhub (Italia): corso di chemiometria e consulenza su prodotti alimentari dell'industria olearia;</li>
            <li>Istituto Italiano di Tecnologia - IIT (Italia): corso di chemiometria;</li>
            <li>J. M. Smucker (USA): calibrazione multivariata, data-fusion e SOPLS, N-way PCA e analisi dei dati sensoriali di caffè;</li>
            <li>Lavazza (Italia): corso di chemiometria, applicazione dell'Experimental Design e dell'analisi multivariata lungo l'intera filiera di produzione del caffè;</li>
            <li>Merck Serono (Italia): corso di chemiometria;</li>
            <li>Mozarc Medical (Italia): corso di chemiometria, applicazione dell'Experimental Design e dell'analisi multivariata ai dispositivi medici;</li>
            <li>Olon S.p.A. (Italia): corso di chemiometria, applicazione dell'Experimental Design ai processi sintetici, ottimizzazione di metodi analitici e analisi statistica finalizzata al controllo qualità;</li>
            <li>Perkin-Elmer (USA): applicazione dell'Experimental Design alla progettazione di colonne cromatografiche;</li>
            <li>Procos SPA (Italia): corso di chemiometria, applicazione dell'Experimental Design ai processi sintetici e ottimizzazione di metodi analitici;</li>
            <li>Roquette Italia S.P.A. (Italia): corso di chemiometria, monitoraggio di processo multivariato.</li>
          </ul>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-[#3064AC]">PUBBLICAZIONI SCIENTIFICHE</h2>
          <ol className="list-decimal pl-6 mb-6 space-y-3">
            <li>Monteleone, L.; Speciale, A.; Valenti, G. E.; Leardi, R.; Farinini, E.; Traverso, N.; Ravera, S.; Garbarino, O.; Domenicotti, C (2021). "PKCα Inhibition as a Strategy to Sensitize Neuroblastoma Stem Cells to Etoposide by Stimulating Ferroptosis". Antioxidants, 10(5), 691. DOI: 10.3390/antiox10050691</li>
            <li>Marengo, B.; Pulliero, A.; Corrias, M. V.; Leardi, R.; Farinini, E.; Fronza, G.; Domenicotti, C. (2021). "Potential Role of miRNAs in the Acquisition of Chemoresistance in Neuroblastoma". Journal of personalized medicine, 11(2), 107. DOI: 10.3390/jpm11020107.</li>
            <li>Forni, F.; Farinini, E.; Leardi, R.; Rinaldo, A. (2021). "Effects of visual training on motor performance in young tennis players using FitLight Trainer". The Journal of sports medicine and physical fitness. DOI: 10.23736/S0022-4707.21.12145-0</li>
            <li>Turrini, F.; Farinini, E.; Leardi, R.; Grasso, F.; Orlandi, V.; Boggia, R. (2022). "A Preliminary Color Study of Different Basil-Based Semi-Finished Products during Their Storage". Molecules 2022, 27(7), 2059. DOI: 10.3390/molecules27072059</li>
            <li>Mara, A.; Deidda, S.; Caredda, M.; Ciulu, M.; Deroma, M.; Farinini, E.; Floris, I.; Langasco, I.; Leardi, R.; Pilo, M.I.; Spano, N.; Sanna, G. (2022). "Multi-Elemental Analysis as a Tool to Ascertain the Safety and the Origin of Beehive Products: Development, Validation, and Application of an ICP-MS Method on Four Unifloral Honeys Produced in Sardinia, Italy". Molecules, 27(6). DOI: 10.3390/molecules27062009</li>
            <li>Mameli, V.; Sanna Angotzi, M.; Farinini, E.; Leardi, R.; Lugliè, C.; Cannas, C. (2023). "Intra-source provenance study on Monte Arci (Sardinia) obsidian by pXRF: Role of the data acquisition and analysis tools". Heliyon, vol. 9, no. 3. DOI: 10.1016/j.heliyon.2023.e13958</li>
            <li>Garbarino, O.; Valenti, G. E.; Monteleone L.; Pietra, G.; Mingari, M. C.; Benzi, A.; Santina Bruzzone, S.; Ravera, S.; L., Leardi, R.; Farinini E.; Vernazza, S.; Grottoli, M.; Marengo, B.; Domenicotti, C. (2023). "PLX4032 resistance of patient-derived melanoma cells: crucial role of oxidative metabolism". Front Oncol, vol. 13. DOI: 10.3389/fonc.2023.1210130</li>
        </ol>
        </section>
        </div>
        </div>
        );
    }
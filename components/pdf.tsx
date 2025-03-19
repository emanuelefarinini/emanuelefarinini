import { Download } from "lucide-react";

const DownloadPDF = () => {

    const isProd = process.env.NODE_ENV === 'production';
    const basePath = isProd ? '/emanuelefarinini/' : '';

    return (
      <div className="group text-center bg-muted rounded-lg w-fit p-2 px-4 mt-4">
        <a
          href={basePath + "/Emanuele-Farinini-CV.pdf"}
          download="Emanuele_Farinini_CV.pdf"
          className="flex flex-row gap-2 items-center group-hover:text-slate-500 text-sm rounded-lg "
        >
          <Download size={16}/> Scarica il mio CV
        </a>
      </div>
    );
  };
  
  export default DownloadPDF;
  
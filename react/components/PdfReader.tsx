import React, {useState, useEffect} from 'react';

type Props = {
    pdfUrl :  string,
    width : number,
    height: number
}

const PdfReader = ({pdfUrl, width, height}:Props) => {
    
    const [mounted, setMounted] = useState(false);  // Va ser el analisis si esta o no montado

    useEffect(() => {
        setMounted(true);       // Para que el componente sea montado
    }, []);

    return (
        mounted && (   // Condicional de una sola entrada es lo mismo que colocar if(mounted){}
            <div className='flex justify-center'>
                <object
                    data = {pdfUrl}
                    type = "application/pdf"
                    width={width}
                    height={height}  
                >
                    <iframe src={pdfUrl} width={width} height={height}>
                        <p>Este navegador no soporta PDF</p>
                    </iframe>
                </object>
            </div>
        )
    );
}

export default PdfReader;
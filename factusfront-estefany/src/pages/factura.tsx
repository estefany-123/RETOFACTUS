import { axiosAPI } from "@/api/axiosAPI";
import DefaultLayout from "@/layouts/default";
import { Button } from "@heroui/button";
import { addToast } from "@heroui/toast";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export default function FacturaPage(){
    const {number} = useParams();

    const getPDF = async () => {
        const pdf =  await axiosAPI.get(`/v1/bills/download-pdf/${number}`);
        return pdf.data.data.pdf_base_64_encoded;
    }

    const {data : pdf, isLoading, isError, error} = useQuery({
        queryKey: ['pdf'],
        queryFn: getPDF
    })

    const handlePDFDownload = () => {
        const link = document.createElement("a");
        link.href = `data:application/pdf;base64,${pdf}`;
        link.download = `factura-${number}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    const handleXMLDownload = async () => {
        
        addToast({
            title: "Downloading XML",
            description: "Please wait a moment",
            color: "success",
            promise: axiosAPI.get(`/v1/bills/download-xml/${number}`).then((response) => {
                const xml = response.data.data.xml_base_64_encoded;
                const link = document.createElement("a");
                link.href = `data:application/xml;base64,${xml}`;
                link.download = `factura-${number}.xml`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
          })
        });

    }

    return(
        <DefaultLayout>
            <h1 className="text-3xl font-bold my-4 text-center">{number}</h1>
            <div className="my-6 flex justify-center">
                <Button color="primary" className="me-2" variant="bordered" onPress={handlePDFDownload}>Download PDF</Button>
                <Button color="secondary" className="ms-2" variant="bordered" onPress={handleXMLDownload}>Download XML</Button>
            </div>
            <div>
                {isLoading && <p>Loading...</p>}
                {isError && <p>{error.message}</p>}
                {pdf &&
                    <iframe
                        src={`data:application/pdf;base64,${pdf}`}
                        title="PDF Viewer"
                        width="100%"
                        height="800px"
                    />
                }
            </div>
        </DefaultLayout>
    )
}
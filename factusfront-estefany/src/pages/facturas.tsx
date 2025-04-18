import { useQuery } from "@tanstack/react-query";
import DefaultLayout from "@/layouts/default";
import { axiosAPI } from "@/api/axiosAPI";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Search } from "lucide-react";

export default function FacturasPage (){

    const [searchParams] = useSearchParams();
    const number = searchParams.get("number");

    const getFacturas = async () => {
        const bills =  await axiosAPI.get(`/v1/bills?filter[number]=${number ?? ""}`);
        return bills.data.data.data;
    }

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['facturas'],
        queryFn: getFacturas
    })

    return(
        <DefaultLayout>
            <div className="flex">
                <h1 className="text-3xl font-bold">Facturas</h1>
                <Button color="success" variant="bordered" className="ms-6" onPress={() => {window.location.href = "/factura"}}>+ Nueva Factura</Button>
                <form method="GET" className="ms-auto flex">
                    <Input
                        autoComplete="off"
                        name="number"
                        placeholder="Buscar factura..."
                    />
                    <Button type="submit" color="success" variant="bordered"><Search width={16}/></Button>
                </form>
            </div>
            {isLoading ?
            <p>Loading...</p>
            :
            isError ?
            <p>{error.message}</p>
            :
            <div className="mt-8">
                <div className="md:grid md:grid-cols-3 gap-4">
                    {data.map((bill : any) => (
                        <div key={bill.id} className="my-6 md:my-0">
                            <Link to={`/${bill.number}`}>
                                <div className="border border-gray-500 p-4 rounded-xl">
                                    <p className="text-center font-semibold text-xl">{bill.document.name} {bill.number}</p>
                                    <div className="">
                                        <p><span className="font-semibold">Created by:</span> {bill.names}</p>
                                        <p><span className="font-semibold">CC:</span> {bill.identification}</p>
                                        <p><span className="font-semibold">E-mail:</span> {bill.email}</p>
                                        <p><span className="font-semibold">Total:</span> {bill.total}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                    {data.length === 0 && <p>No hay facturas con el número <b>{number}</b></p>}
                </div>
            </div>
            }
        </DefaultLayout>
    )
}
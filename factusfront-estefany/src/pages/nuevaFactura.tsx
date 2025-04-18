import { axiosAPI } from "@/api/axiosAPI";
import DefaultLayout from "@/layouts/default";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
import { addToast, Button, Input, Select, SelectItem, Textarea } from "@heroui/react";

export default function NuevaFacturaPage() {
  const getNumberingRanges = async () => {
    const response = await axiosAPI.get("/v1/numbering-ranges");
    return response.data.data;
  };

  const getClientes = async () => {
    const clients = await axios.get(`http://localhost:3000/clientes`);
    return clients.data;
  };

  const getProductos = async () => {
    const productos = await axios.get(`http://localhost:3000/productos`);
    return productos.data;
  };

  const { data: clients } = useQuery({
    queryKey: ["clientes"],
    queryFn: getClientes,
  });

  const { data: productos } = useQuery({
    queryKey: ["productos"],
    queryFn: getProductos,
  });

  const { data: ranges } = useQuery({
    queryKey: ["numbering-ranges"],
    queryFn: getNumberingRanges,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    defaultValues: {
      numbering_range_id: 8,
      reference_code: "",
      observation: "",
      payment_form: "1",
      payment_method_code: "10",
      client: 0,
      product: 0,
      quantity: 0,
    },
  });

  async function onSubmit(data: any) {
    const wholeInfo = {
      ...data,
      customer: clients[data.client],
      items: [
        {
          ...productos[data.product],
          quantity: data.quantity,
        },
      ],
      client: undefined,
      product: undefined,
    };
    console.log(wholeInfo);
    
    addToast({
      title: "Creando factura",
      description: "Por favor espere un momento",
      color: "success",
      promise : axiosAPI.post(`/v1/bills/validate`, wholeInfo).then((response : any) => {
        const number = response.data.data.bill.number;
        window.location.href = `/${number}`
        return data;
      })
    })
    
  }

  return (
    <DefaultLayout>
      <h1 className="text-3xl font-bold">Crear nueva factura</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-4">
          <p className="font-semibold text-2xl my-4">Info de factura</p>
          <Select
            {...register("numbering_range_id")}
            label="Rango de numeración"
            isRequired
          >
            {ranges &&
              ranges.map((range: any) => (
                <SelectItem key={range.id}>{range.document}</SelectItem>
              ))}
          </Select>
          <Input
            {...register("reference_code")}
            label="Código de referencia"
            isRequired
            autoComplete="off"
          />
          <Textarea {...register("observation")} label="Observaciones" />
          <Select
            {...register("payment_form")}
            isRequired
            label="Forma de pago"
          >
            <SelectItem key={"1"}>Contado</SelectItem>
            <SelectItem key={"2"}>Crédito</SelectItem>
          </Select>
          <Select
            label="Método de pago"
            isRequired
            {...register("payment_method_code")}
          >
            <SelectItem key={"10"}>Efectivo</SelectItem>
            <SelectItem key={"42"}>Consignación</SelectItem>
            <SelectItem key={"47"}>Transferencia</SelectItem>
            <SelectItem key={"49"}>Tarjeta débito</SelectItem>
            <SelectItem key={"48"}>Tarjeta crédito</SelectItem>
            <SelectItem key={"20"}>Cheque</SelectItem>
            <SelectItem key={"71"}>Bonos</SelectItem>
            <SelectItem key={"72"}>Vales</SelectItem>
            <SelectItem key={"1"}>Medio de pago no definido</SelectItem>
            <SelectItem key={"ZZZ"}>Otro</SelectItem>
          </Select>
        </div>
        <div>
          <p className="font-semibold text-2xl my-4">Selecciona un cliente</p>
          <Select
            label="Clientes"
            value={watch("client")}
            onSelectionChange={(e: any) => setValue("client", e.anchorKey)}
            className="my-5"
          >
            {clients &&
              clients.map((client: any, index: number) => (
                <SelectItem
                  key={index}
                >{`${client.identification} - ${client.names}`}</SelectItem>
              ))}
          </Select>
          {errors.client && (
            <p className="text-red-500">{errors.client.message}</p>
          )}
        </div>
        <div>
          <p className="font-semibold text-2xl my-4">Selecciona un producto</p>
          <div className="flex my-5 ">
            <div className="w-1/2 mx-2">
              <Select
                label="Producto"
                value={watch("product")}
                onSelectionChange={(e: any) => setValue("product", e.anchorKey)}
              >
                {productos &&
                  productos.map((productos: any, index: number) => (
                    <SelectItem
                      key={index}
                    >{`${productos.code_reference} - ${productos.name}`}</SelectItem>
                  ))}
              </Select>
              {errors.product && (
                <p className="text-red-500">{errors.product.message}</p>
              )}
            </div>
            <div className="w-1/2 mx-2">
              <Input
                {...register("quantity")}
                label="Cantidad"
                type="number"
                isRequired
              />
              {errors.quantity && (
                <p className="text-red-500">{errors.quantity.message}</p>
              )}
            </div>
          </div>
        </div>
        <Button color="success" variant="bordered" type="submit">
          Crear factura
        </Button>
      </form>
    </DefaultLayout>
  );
}

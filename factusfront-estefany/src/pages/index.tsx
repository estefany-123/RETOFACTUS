import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Button } from "@heroui/button";
import { Link } from "react-router-dom";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <div className="h-full flex items-center justify-center -translate-y-16">
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <img src="/logo.svg" alt="logo" className="w-96" />
        <div className="inline-block max-w-lg text-center justify-center">
          <span className={title()}>El mejor&nbsp;</span>
          <span className={title({ color: "yellow" })}>pollo broaster&nbsp;</span>
          <br />
          <span className={title()}>
            de toda la ciudad.
          </span>
          <div className={subtitle({ class: "mt-4" })}>
            Compra tus productos <span className="text-primary">brosty arroz</span> desde nuestra plataforma digital
          </div>
        </div>
        <Link to={'/login'}><Button color="success" variant="bordered">Inicia sesión ahora</Button></Link>
      </section>
      </div>
    </DefaultLayout>
  );
}

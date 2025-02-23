import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div>
      <h1>Pagina Inicial function</h1>
      <Input placeholder="Buscar produto" />
      <Button>Novo produto</Button>
    </div>
  );
}

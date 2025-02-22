import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Home = () => {
  return (
    <div>
      <h1>Pagina Inicial</h1>
      <Input placeholder="Buscar produto" />
      <Button>Novo produto</Button>
    </div>
  );
};

export default Home;

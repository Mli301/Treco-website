import { useState } from "react";
import ValuesModal from "../ValuesModal";
import { Button } from "@/components/ui/button";

export default function ValuesModalExample() {
  const [open, setOpen] = useState(true);

  return (
    <div className="p-8">
      <Button onClick={() => setOpen(true)}>Open Values Modal</Button>
      <ValuesModal open={open} onOpenChange={setOpen} />
    </div>
  );
}

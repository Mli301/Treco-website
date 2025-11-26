import { useState } from "react";
import AboutModal from "../AboutModal";
import { Button } from "@/components/ui/button";

export default function AboutModalExample() {
  const [open, setOpen] = useState(true);

  return (
    <div className="p-8">
      <Button onClick={() => setOpen(true)}>Open About Modal</Button>
      <AboutModal open={open} onOpenChange={setOpen} />
    </div>
  );
}

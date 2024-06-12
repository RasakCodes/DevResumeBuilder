import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const SheetComp = ({ trigger, children }) => {
  return (
    <div>
      <Sheet>
        <SheetTrigger trigger={trigger}>{trigger}</SheetTrigger>
        <SheetContent className="overflow-y-scroll">{children}</SheetContent>
      </Sheet>
    </div>
  );
};

export default SheetComp;

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export const Modal = ({ children, trigger, classStyle, styling }) => {
  return (
    <Dialog style={styling}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className={`  ${classStyle} max-w-[1000px]`}>
        {children}
      </DialogContent>
    </Dialog>
  );
};

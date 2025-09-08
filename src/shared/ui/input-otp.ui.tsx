import * as React from "react";
import { OTPInput, OTPInputContext } from "input-otp";

import { cn } from "@/shared/utils/index";
import { FaMinus } from "react-icons/fa";

function Container({ className, ...props }: React.ComponentProps<typeof OTPInput>) {
   return <OTPInput data-slot="input-otp" className={cn("disabled:cursor-not-allowed", className)} {...props} />;
}

function Group(props: React.ComponentProps<"div">) {
   return <div data-slot="input-otp-group" {...props} />;
}

function Slot({
   index,
   className,
   ...props
}: React.ComponentProps<"div"> & {
   index: number;
}) {
   const inputOTPContext = React.useContext(OTPInputContext);
   const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {};

   return (
      <div
         data-slot="input-otp-slot"
         data-active={isActive}
         className={cn(
            "data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-input/30 border-input relative flex h-3 w-3 items-center justify-center  transition-all outline-none data-[active=true]:z-10 data-[active=true]:ring-[3px]",
            className
         )}
         {...props}>
         {char}
         {hasFakeCaret && (
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
               <div className="animate-caret-blink bg-foreground h-4 w-px duration-1000" />
            </div>
         )}
      </div>
   );
}

function Separator({ ...props }: React.ComponentProps<"div">) {
   return (
      <div data-slot="input-otp-separator" role="separator" {...props}>
         <FaMinus />
      </div>
   );
}

const Otp = {
   Container,
   Group,
   Slot,
   Separator,
};
export { Otp };

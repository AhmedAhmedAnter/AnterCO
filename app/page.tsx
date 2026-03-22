import { HugeiconsIcon } from "@hugeicons/react";
import {
  Home01Icon,
  ShoppingCart01Icon,
  UserCircleIcon,
  Search01Icon
} from "@hugeicons/core-free-icons";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-12 p-8 text-center uppercase">
      <div className="space-y-4">
        <h1 className="text-7xl font-black tracking-tighter italic">
          Anter Co
        </h1>
        <p className="text-xl text-muted-foreground max-w-lg mx-auto normal-case font-medium">
          Welcome to the biggest clothes store. Experience premium craftsmanship and avant-garde designs.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-4">
        <div className="flex flex-col items-center gap-4 group cursor-pointer">
          <div className="p-6 rounded-3xl bg-secondary transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:-translate-y-2">
            <HugeiconsIcon icon={Home01Icon} size={40} />
          </div>
          <span className="text-sm font-black tracking-widest">Home</span>
        </div>

        <div className="flex flex-col items-center gap-4 group cursor-pointer">
          <div className="p-6 rounded-3xl bg-secondary transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:-translate-y-2">
            <HugeiconsIcon icon={Search01Icon} size={40} />
          </div>
          <span className="text-sm font-black tracking-widest">Browse</span>
        </div>

        <div className="flex flex-col items-center gap-4 group cursor-pointer">
          <div className="p-6 rounded-3xl bg-secondary transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:-translate-y-2">
            <HugeiconsIcon icon={ShoppingCart01Icon} size={40} />
          </div>
          <span className="text-sm font-black tracking-widest">Store</span>
        </div>

        <div className="flex flex-col items-center gap-4 group cursor-pointer">
          <div className="p-6 rounded-3xl bg-secondary transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:-translate-y-2">
            <HugeiconsIcon icon={UserCircleIcon} size={40} />
          </div>
          <span className="text-sm font-black tracking-widest">Account</span>
        </div>
      </div>

      <button className="mt-8 px-12 py-5 bg-foreground text-background font-black rounded-full hover:scale-110 transition-all active:scale-95 tracking-widest text-lg">
        EXPLORE COLLECTION
      </button>
    </div>
  );
}

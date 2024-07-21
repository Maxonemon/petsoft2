import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-around min-h-screen bg-slate-200 text-slate-900 box-border  ">
      <Image
        src="https://bytegrad.com/course-assets/react-nextjs/petsoft-preview.png"
        alt="petsoft"
        width={500}
        height={1000}
      />
      <div>
        <Logo />
        <h1 className="text-5xl my-6 max-w-[500px] font-semibold">
          Manage your <span className="font-extrabold italic">pet daycare</span>{" "}
          with ease
        </h1>
        <p className="text-2xl font-medium max-w-[600px]">
          Use PetSoft to easily keep track of pets under your care. Get lifetime
          access for $299.
        </p>
        <div className="mt-10 space-x-3">
          <Button asChild>
            <Link href="/signup">Get started</Link>
          </Button>
          <Button variant={"secondary"} asChild>
            <Link href="/login">login</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}

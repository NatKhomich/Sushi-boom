import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "./container";
import Image from "next/image";
import { Button } from "../ui";
import { User } from "lucide-react";
import { SearchInput } from "./search-input";
import Link from "next/link";
import { CartButton } from "./cart-button";

interface Props {
  className?: string;
}

export const Header = ({ className }: Props) => {
  return (
    <header className={cn("", className)}>
      <Container className="flex items-center justify-between py-8 gap-2">
        <Link href="/" className="flex gap-2 cursor-pointer ">
          <Image src="/logo.png" alt="Logo" width={45} height={45} />
          <div>
            <h1 className="text-2xl font-black">Sushi BOOM</h1>
            <p className="text-sm text-gray-400 leading-3">
              лучшие суши и роллы
            </p>
          </div>
        </Link>
        <div className="relative flex-1 mx-3">
          <SearchInput className="w-full" />
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" className="cursor-pointer">
            <User size={16} />
            Войти
          </Button>

          <CartButton />
        </div>
      </Container>
    </header>
  );
};

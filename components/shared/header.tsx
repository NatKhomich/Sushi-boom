import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "./container";
import Image from "next/image";
import { Button, Input } from "../ui";
import { ArrowRight, ShoppingCart, User } from "lucide-react";

interface Props {
  className?: string;
}

export const Header = ({ className }: Props) => {
  return (
    <header className={cn("", className)}>
      <Container className="flex items-center justify-between py-8 gap-2">
        <div className="flex gap-2">
          <Image src="/logo.png" alt="Logo" width={45} height={45} />
          <div>
            <h1 className="text-2xl font-black">Sushi BOOM</h1>
            <p className="text-sm text-gray-400 leading-3">
              лучшие суши и роллы
            </p>
          </div>
        </div>
        <div className="flex-1 min-w-0 max-w-md">
          <Input placeholder="Поиск" className="w-full" />
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" className="cursor-pointer">
            <User size={16} />
            Войти
          </Button>

          <div>
            <Button className="group relative cursor-pointer">
              <b>520 ₽</b>
              <span className="h-full w-[1px] bg-white/30 mx-3" />
              <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                <ShoppingCart size={16} className="relative" strokeWidth={2} />
                <b>3</b>
              </div>
              <ArrowRight
                size={20}
                className=" absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
              />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

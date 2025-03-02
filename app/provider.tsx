"use client"
import store from "@/redux/app/store";
import { HeroUIProvider } from "@heroui/react";
import React from "react";
import { Provider } from "react-redux";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <HeroUIProvider>{children}</HeroUIProvider>
    </Provider>
  );
}

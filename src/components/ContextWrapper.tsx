"use client";

import { BeautyProvider } from '@/context/BeautyContext';

export default function ContextWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <BeautyProvider>{children}</BeautyProvider>;
}
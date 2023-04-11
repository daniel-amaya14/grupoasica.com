import React from 'react';

interface ContainerPorps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerPorps) {
  return <section className="px-6 py-20 xl:px-16">{children}</section>;
}

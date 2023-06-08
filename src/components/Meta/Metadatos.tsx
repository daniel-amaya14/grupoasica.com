import React from 'react';

export default function Metadatos() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta
        httpEquiv="X-UA-Compatible"
        content="IE=edge"
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />
      <meta
        name="description"
        content="Grupo ASICA es una empresa especializada en ofrecer soluciones tecnológicas integrales para empresas de diferentes sectores. Nuestros servicios incluyen desarrollo web y aplicaciones móviles, consultoría tecnológica, soluciones en la nube y soporte técnico. Trabajamos de cerca con nuestros clientes para proporcionarles las herramientas y servicios que necesitan para alcanzar sus objetivos tecnológicos y optimizar sus operaciones."
      />
      <meta
        name="author"
        content="Grupo ASICA"
      />

      {/* Open Graph  */}
      <meta
        property="og:title"
        content="Grupo ASICA - Soluciones tecnológicas para empresas"
      />
      <meta
        property="og:description"
        content="Grupo ASICA es una empresa especializada en ofrecer soluciones tecnológicas integrales para empresas de diferentes sectores. Nuestros servicios incluyen desarrollo web y aplicaciones móviles, consultoría tecnológica, soluciones en la nube y soporte técnico. Trabajamos de cerca con nuestros clientes para proporcionarles las herramientas y servicios que necesitan para alcanzar sus objetivos tecnológicos y optimizar sus operaciones."
      />
      <meta
        property="og:type"
        content="website"
      />
      <meta
        property="og:image"
        content="https://grupoasica.com/images/logo-asica.png"
      />
      <meta
        property="og:image:alt"
        content="Grupo ASICA"
      />
      <meta
        property="og:url"
        content="https://grupoasica.com/"
      />

      {/* Twitter Cards */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />
      <meta
        name="twitter:title"
        content="Grupo ASICA - Soluciones tecnológicas para empresas"
      />
      <meta
        name="twitter:description"
        content="Grupo ASICA es una empresa especializada en ofrecer soluciones tecnológicas integrales para empresas de diferentes sectores. Nuestros servicios incluyen desarrollo web y aplicaciones móviles, consultoría tecnológica, soluciones en la nube y soporte técnico. Trabajamos de cerca con nuestros clientes para proporcionarles las herramientas y servicios que necesitan para alcanzar sus objetivos tecnológicos y optimizar sus operaciones."
      />
      <meta
        name="twitter:image"
        content="https://grupoasica.com/images/logo-asica.png"
      ></meta>
    </>
  );
}

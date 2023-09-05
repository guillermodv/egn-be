class VoteController {
  static CACHED_DATA = {
    fechaTotalizacion: "2023-07-13T18:38:00.309Z",
    estadoRecuento: {
      mesasEsperadas: 0,
      mesasTotalizadas: 1,
      mesasTotalizadasPorcentaje: 0,
      cantidadElectores: 347,
      cantidadVotantes: 255,
      participacionPorcentaje: 73.49,
    },
    valoresTotalizadosPositivos: [
      {
        idAgrupacion: "01-502",
        nombreAgrupacion: "FRENTE DE TODOS",
        votos: 90,
        votosPorcentaje: 35.29,
        idAgrupacionTelegrama: "",
        urlLogo: "",
        listas: [{ nombre: "CELESTE Y BLANCA", numero: "A", votos: 90 }],
      },
      {
        idAgrupacion: "87",
        nombreAgrupacion: "UNITE POR LA LIBERTAD Y LA DIGNIDAD",
        votos: 13,
        votosPorcentaje: 5.1,
        idAgrupacionTelegrama: "",
        urlLogo: "",
        listas: [{ nombre: "OLA CELESTE", numero: "A", votos: 13 }],
      },
      {
        idAgrupacion: "01-501",
        nombreAgrupacion: "FRENTE DE IZQUIERDA Y DE TRABAJADORES - UNIDAD",
        votos: 13,
        votosPorcentaje: 5.1,
        idAgrupacionTelegrama: "",
        urlLogo: "",
        listas: [{ nombre: "UNIDAD", numero: "A", votos: 13 }],
      },
      {
        idAgrupacion: "01-504",
        nombreAgrupacion: "CONSENSO FEDERAL",
        votos: 17,
        votosPorcentaje: 6.67,
        idAgrupacionTelegrama: "",
        urlLogo: "",
        listas: [{ nombre: "CONSENSO PARA EL FUTURO", numero: "A", votos: 17 }],
      },
      {
        idAgrupacion: "01-262",
        nombreAgrupacion: "EL MOVIMIENTO",
        votos: 0,
        votosPorcentaje: 0,
        idAgrupacionTelegrama: "",
        urlLogo: "",
        listas: [{ nombre: "CELESTE", numero: "A", votos: 0 }],
      },
      {
        idAgrupacion: "01-503",
        nombreAgrupacion: "JUNTOS POR EL CAMBIO",
        votos: 96,
        votosPorcentaje: 37.65,
        idAgrupacionTelegrama: "",
        urlLogo: "",
        listas: [{ nombre: "JUNTOS SOMOS EL CAMBIO", numero: "A", votos: 96 }],
      },
      {
        idAgrupacion: "13",
        nombreAgrupacion: "MOVIMIENTO AL SOCIALISMO",
        votos: 2,
        votosPorcentaje: 0.78,
        idAgrupacionTelegrama: "",
        urlLogo: "",
        listas: [{ nombre: "UNIDAD DE LA IZQUIERDA", numero: "A", votos: 2 }],
      },
      {
        idAgrupacion: "5",
        nombreAgrupacion: "DEMOCRATA CRISTIANO",
        votos: 3,
        votosPorcentaje: 1.18,
        idAgrupacionTelegrama: "",
        urlLogo: "",
        listas: [
          {
            nombre: "CIUDAD CELESTE POR LA VIDA Y LA FAMILIA",
            numero: "A",
            votos: 3,
          },
        ],
      },
      {
        idAgrupacion: "86",
        nombreAgrupacion: "FRENTE RENOVADOR AUTENTICO",
        votos: 0,
        votosPorcentaje: 0,
        idAgrupacionTelegrama: "",
        urlLogo: "",
        listas: [{ nombre: "NUEVA CORRIENTE", numero: "A", votos: 0 }],
      },
      {
        idAgrupacion: "88",
        nombreAgrupacion: "PARTIDO DIGNIDAD POPULAR",
        votos: 0,
        votosPorcentaje: 0,
        idAgrupacionTelegrama: "",
        urlLogo: "",
        listas: [{ nombre: "LIBERACION", numero: "1A", votos: 0 }],
      },
      {
        idAgrupacion: "01-187",
        nombreAgrupacion: "AUTODETERMINACION Y LIBERTAD",
        votos: 4,
        votosPorcentaje: 1.57,
        idAgrupacionTelegrama: "",
        urlLogo: "",
        listas: [{ nombre: "QUE LOS PUEBLOS MANDEN", numero: "A", votos: 4 }],
      },
      {
        idAgrupacion: "01-343",
        nombreAgrupacion: "MOVIMIENTO DE JUBILADOS Y JUVENTUD",
        votos: 0,
        votosPorcentaje: 0,
        idAgrupacionTelegrama: "",
        urlLogo: "",
        listas: [{ nombre: "MISION CELESTE", numero: "A", votos: 0 }],
      },
    ],
    valoresTotalizadosOtros: {
      votosNulos: 2,
      votosNulosPorcentaje: 0.78,
      votosEnBlanco: 15,
      votosEnBlancoPorcentaje: 5.88,
      votosRecurridosComandoImpugnados: 0,
      votosRecurridosComandoImpugnadosPorcentaje: 0,
    },
  };
  static cachedFetchData = {};
  static url =
    "https://resultados.mininterior.gob.ar/api/resultados/getResultados?anioEleccion=2019&tipoRecuento=1&tipoEleccion=1&categoriaId=2&distritoId=1&seccionProvincialId=0&seccionId=3&circuitoId=000039&mesaId=1244";

  //TODO: retrive data from fetch or cached data
  static async retriveData(req, res) {
    try {
      fetch(this.url)
        .then((response) => response.json())
        .then((data) => (this.cachedFetchData = data))
        .catch(() => {
          return res.status(200).json(this.cachedFetchData);
        });
    } catch (error) {
      console.error("[err] ", error);
      res.status(500).send({
        error: true,
        statusCode: 500,
        message: "Error retrieving data",
      });
    }
    return res.status(200).json(this.cachedFetchData);
  }

  static async retriveCachedData(req, res) {
    return res.status(200).json(this.cachedFetchData);
  }
}

module.exports = VoteController;

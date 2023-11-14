export const columns = [
  { id: "key", label: "Clave", minWidth: 170 },
  { id: "brand", label: "Marca", minWidth: 100 },
  {
    id: "description",
    label: "Descripción",
    minWidth: 170,
  },
  {
    id: "priceList",
    label: "Precio lista",
    minWidth: 170,
    // format: (value) => +value.toFixed(2),
  },
];
// ['Clave', 'Marca', 'Descripción', 'Precio Lista']
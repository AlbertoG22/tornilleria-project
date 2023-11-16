export const columns = [
  {
    id: 'key',
    label: 'Clave',
    minWidth: 100
  },
  {
    id: 'brand',
    label: 'Marca',
    minWidth: 100
  },
  {
    id: 'description',
    label: 'Descripción',
    // minWidth: 170,
  },
  {
    id: 'priceList',
    label: 'Precio lista',
    align: 'center',
    minWidth: 100,
    // format: (value) => +value.toFixed(2),
  },
];


// Data de ejemplo
const columnss = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
  {
    id: "population",
    label: "Population",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Size\u00a0(km\u00b2)",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "density",
    label: "Density",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];
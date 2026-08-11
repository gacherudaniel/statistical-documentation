export interface Product {
  id: string;
  name: string;
  status: string;
  referencePeriod: string;
  lastUpdated: string;
  publicationLinks?: {
    label: string;
    url: string;
  }[];
}

export const PRODUCTS: Product[] = [
  {
    id: "poverty-inequality",
    name: "Poverty and Inequality Statistics",
    status: "Published",
    referencePeriod: "2025M2",
    lastUpdated: "18/03/2025",
    publicationLinks: [
      {
        label: "Poverty Reports",
        url: "https://www.knbs.or.ke/?s=poverty&post_type=us_portfolio",
      },
      
    ],
  },
  {
    id: "cpi",
    name: "CPI Consumer Price Quality Report",
    status: "Published",
    referencePeriod: "2025M4",
    lastUpdated: "15/05/2025",
    publicationLinks: [
      {
        label: "CPI Monthly Report",
        url: "https://www.knbs.or.ke/cpi-and-inflation-rates/",
      },
     
    ],
  },
];
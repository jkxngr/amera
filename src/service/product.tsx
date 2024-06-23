type ProductType = {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    id: number;
    image: string;
    title: string;
    price: string;
    is_available: boolean;
    category: number;
    is_new: boolean;
  }[];
};

export const Product = async (): Promise<ProductType | undefined> => {
  try {
    const res = await fetch("http://135.181.108.207/product", {
      next: {
        revalidate: 3600,
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {}
};

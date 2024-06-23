interface CategoryType {
  id: number | undefined;
  next: null;
  previous: null;
  results: [
    {
      id: number;
      title: string;
      image: string;
      children: [
        {
          id: number;
          title: string;
          image: string;
        }
      ];
    }
  ];
}
export const Category = async (): Promise<CategoryType | undefined> => {
  try {
    const res = await fetch("http://135.181.108.207/category/?limit=10", {
      next: {
        revalidate: 3600,
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {}
};

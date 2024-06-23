
  export const Category = async (): Promise<any> => {
    try {
      const res = await fetch("http://135.181.108.207/category/", {
        next: {
          revalidate: 3600,
        },
      });
      const data = await res.json();
      return data;
    } catch (error) {}
  };
  
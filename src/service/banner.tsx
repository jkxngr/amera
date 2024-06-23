import { Carusel } from "@/components/carusel";

interface BannerType {
  id: number;
  results: [
    {
      created_at: string;
      updated_at: string;
      image: string;
      title: string;
      description: string;
    }
  ];
}

export const Banner = async (): Promise<BannerType | undefined> => {
  try {
    const res = await fetch("http://135.181.108.207/banner/", {
      next: {
        revalidate: 3600,
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {}
};

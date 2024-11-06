import { redirect } from "next/navigation";

export interface DataProps {
  object: {
    slug: string;
    title: string;
    metadata: {
      banner: {
        url: string;
        imgix_url: string;
      };
      heading: string;
      cta_button: {
        title: string;
        url: string;
      };
      url: string;
      about: {
        description: string;
        banner: {
          url: string;
          imgix_url: string;
        };
      };
      services: {
        image: {
          url: string;
          imgix_url: string;
        };
        description: string;
      }[];
      contact: {
        email: string;
        phone: string;
        address: string;
        time: string;
      };
    };
  };
}

export interface MenuProps {
  objects: MenuItem[]
}

export interface MenuItem {
  slug: string;
  title: string;
}

export interface PostProps {
  objects: PostItem[]
}

interface PostItem {
    slug: string;
    title: string;
    metadata: {
      banner: {
        url: string;
        imgix_url: string;
      };
      button: {
        title: string;
        url: string;
      };
      description: {
        title: string;
        text: string;
        banner: {
          url: string;
          imgix_url: string;
        };
        button_active: boolean;
        button_title: string | null;
        button_url: string | null;
      };
    };
}

export async function getDataHome(): Promise<DataProps> {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/objects/67253fe86bf9b88ef228c3e2?read_key=${process.env.READ_KEY}&props=slug,title,metadata`, 
          { next: { revalidate: 120 }})
    
        if(!res.ok) {
            throw new Error("Failed to get data");
        }

        return res.json();
    } catch (err) { //eslint-disable-line 
        throw new Error("Failed to get data");
    }
}

export async function getSubMenu(): Promise<MenuProps>{
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/objects?pretty=true&query=%7B%22type%22:%22pages%22%7D&limit=10&read_key=${process.env.READ_KEY}&depth=1&props=slug,title,`, {
      next: { revalidate: 120 }
    })
  
    if(!res.ok) {
      throw new Error("Failed to fetch menu data!")
    }

    return res.json()
  } catch (err) { //eslint-disable-line 
    throw new Error("Failed to get data");
  }
}

export async function getItemBySlug(slug: string): Promise<PostProps> {
  const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/objects`

  const queryParams = new URLSearchParams({
    query: JSON.stringify({
      slug
    }),
    props: 'slug,title,content,metadata',
    read_key: process.env.READ_KEY as string
  })

  const url = `${baseUrl}?${queryParams.toString()}`

  try { 
    const res = await fetch(url, { next: { revalidate: 120 }})

     if(!res.ok) {
      throw new Error("Failed to get item by slug!")
    }

    return res.json();
  } catch (err) {
    console.error(err)
    redirect("/")
  }
}
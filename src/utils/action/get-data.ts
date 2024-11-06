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

// /objects?pretty=true&query=%7B%22type%22:%22pages%22%7D&limit=10&read_key=yAEXOVSYNGQRMh4OIQ1MVg9NlHTeYJSeVrtaH6hJcAdEHEAq5W&depth=1&props=slug,title,
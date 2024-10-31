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

export async function getDataHome(): Promise<DataProps> {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/objects/671d5f8ef37f2376cff528a2?read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata`)
    
        if(!res.ok) {
            throw new Error("Failed to get data");
        }

        return res.json();
    } catch (err) { //eslint-disable-line 
        throw new Error("Failed to get data");
    }
}
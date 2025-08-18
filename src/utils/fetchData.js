const api = "https://pharmabackend.onrender.com";
export const fetchProducts = async () => {
  try {
    const response = await fetch(`${api}/products`);
    if (!response.ok) throw new Error("Failed to fetch products");

    return await response.json();
  } catch (err) {
    console.error("Failed to fetch products", err);
    return {};
  }
};
export const fetchProduct = async ({ params }) => {
  try {
    const response = await fetch(
      `${api}/products/${params.CategoryId}/${params.ProductId}`,
    );
    if (!response.ok) throw new Error("Failed to fetch products");
    return await response.json();
  } catch (err) {
    console.error("Failed to fetch product", err);
    return {};
  }
};
export const fetchArticles = async () => {
  try {
    const response = await fetch(`${api}/articles`);
    if (!response.ok) throw new Error("Failed to fetch products");
    return await response.json();
  } catch (err) {
    console.error("Failed to fetch articles", err);
    return {};
  }
};
export const fetchArticle = async ({ params }) => {
  try {
    const response = await fetch(`${api}/articles/${params.ArticleId}`);
    if (!response.ok) throw new Error("Failed to fetch products");
    return await response.json();
  } catch (err) {
    console.error("Failed to fetch article", err);
    return {};
  }
};
export const fetchResearchs = async () => {
  try {
    const response = await fetch(`${api}/researches`);
    if (!response.ok) throw new Error("Failed to fetch products");
    return await response.json();
  } catch (err) {
    console.error("Failed to fetch researchs", err);
    return {};
  }
};
export const fetchResearch = async ({ params }) => {
  try {
    const response = await fetch(`${api}/researches/${params.ResearchId}`);
    if (!response.ok) throw new Error("Failed to fetch products");
    return await response.json();
  } catch (err) {
    console.error("Failed to fetch research", err);
    return {};
  }
};

export const fetchHome = async () => {
  try {
    const productResponse = await fetch(`${api}/products`, {
      method: "GET",
    });
    if (!productResponse.ok) throw new Error("Failed to fetch products");

    const researchResponse = await fetch(`${api}/researches`, {
      method: "GET",
    });
    if (!researchResponse.ok) throw new Error("Failed to fetch researches");

    const articleResponse = await fetch(`${api}/articles`, {
      method: "GET",
    });
    if (!articleResponse.ok) throw new Error("Failed to fetch articles");

    return {
      product: await productResponse.json(),
      research: await researchResponse.json(),
      article: await articleResponse.json(),
    };
  } catch (err) {
    console.error("Failed to fetch data", err);
    console.log(`Bearer ${process.env.REACT_APP_API_TOKEN}`);
  }
};

export const fetchAboutUs = async () => {
  try {
    const productResponse = await fetch(`${api}/products`);
    if (!productResponse.ok) throw new Error("Failed to fetch products");
    const researchResponse = await fetch(`${api}/researches`);
    if (!researchResponse.ok) throw new Error("Failed to fetch researchs");
    const memberResponse = await fetch(`${api}/members`);
    if (!memberResponse.ok) throw new Error("Failed to fetch researchs");
    const faqResponse = await fetch(`${api}/faqs`);
    if (!faqResponse.ok) throw new Error("Failed to fetch researchs");

    return {
      product: await productResponse.json(),
      research: await researchResponse.json(),
      member: await memberResponse.json(),
      faq: await faqResponse.json(),
    };
  } catch (err) {
    console.error("Failed to fetch data", err);
  }
};

export const fetchOurTeam = async () => {
  try {
    const memberResponse = await fetch(`${api}/members`);
    if (!memberResponse) throw new Error("Failed to fetch members");
    const faqResponse = await fetch(`${api}/faqs`);
    if (!faqResponse) throw new Error("Failed to fetch faqs");
    return {
      member: await memberResponse.json(),
      faq: await faqResponse.json(),
    };
  } catch (err) {
    console.error("Failed to fetch data", err);
  }
};
export const fetchFaq = async () => {
  try {
    const response = await fetch(`${api}/faqs`);
    if (!response) throw new Error("Failed to fetch faqs");
    return await response.json();
  } catch (err) {
    console.error("Failed to fetch data", err);
  }
};
export const fetchJoinUs = async () => {
  try {
    const response = await fetch(`${api}/joinUs`);
    if (!response) throw new Error("Failed to fetch join us");
    return await response.json();
  } catch (err) {
    console.error("Failed to fetch data", err);
  }
};
export const fetchRetailers = async () => {
  try {
    const retailerResponse = await fetch(`${api}/retailers`);
    if (!retailerResponse) throw new Error("Failed to fetch retailers");
    const faqResponse = await fetch(`${api}/faqs`);
    if (!faqResponse) throw new Error("Failed to fetch faqs");
    return {
      retailer: await retailerResponse.json(),
      faq: await faqResponse.json(),
    };
  } catch (err) {
    console.error("Failed to fetch data", err);
  }
};
export const fetchContactUs = async () => {
  try {
    const faqResponse = await fetch(`${api}/faqs`);
    if (!faqResponse) throw new Error("Failed to fetch faqs");
    return await faqResponse.json();
  } catch (err) {
    console.error("Failed to fetch data", err);
  }
};

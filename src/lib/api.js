import axios from "axios";

const WP_API_BASE = "https://kenza-web.com//wp-json/wp/v2";

export async function getPosts(page = 1, perPage = 5, categoryId = null) {
  const excludedCategoryId = 12;
  const categoryFilter = categoryId ? `&categories=${categoryId}` : "";
  const res = await axios.get(
    `${WP_API_BASE}/posts?categories_exclude=${excludedCategoryId}${categoryFilter}&per_page=${perPage}&page=${page}&_embed`
  );
  return {
    posts: res.data,
    totalPages: parseInt(res.headers["x-wp-totalpages"], 10),
  };
}

export async function getPortfolioProjects(limit = 100) {
  const categoryId = 12;
  const res = await axios.get(
    `https://kenza-web.com/wp-json/wp/v2/posts?categories=${categoryId}&per_page=${limit}&_embed`
  );
  return res.data;
}
export async function getCategories() {
  const excludedCategoryId = 12;
  const res = await axios.get(
    `${WP_API_BASE}/categories?exclude=${excludedCategoryId}`
  );
  return res.data;
}
//get portfolio items
export async function getStaticProps() {
  const res = await fetch("https://yourdomain.com/wp-json/wp/v2/portfolio");
  const data = await res.json();

  return {
    props: {
      portfolio: data,
    },
    revalidate: 60,
  };
}

import axios from "axios";

const WP_API_BASE = "https://kenza-web.com//wp-json/wp/v2";

export async function getPosts(page = 1, perPage = 5) {
  const excludedCategoryId = 12;
  const res = await axios.get(
    `${WP_API_BASE}/posts?categories_exclude=${excludedCategoryId}&per_page=${perPage}&page=${page}&_embed`
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

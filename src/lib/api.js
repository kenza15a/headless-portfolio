import axios from "axios";

const WP_API_BASE = `${process.env.NEXT_PUBLIC_HEADLESS_WP_API}/wp/v2`;

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
    `${WP_API_BASE}/posts?categories=${categoryId}&per_page=${limit}&_embed`
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

export async function getGalleryMedia(limit = 100) {
  const url = `${WP_API_BASE}/media?per_page=${limit}&media_type=image&_embed`;
  console.log("📡 Fetching:", url); //  full URL 
  const res = await axios.get(url);
  return res.data;
}

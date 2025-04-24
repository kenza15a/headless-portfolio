import axios from "axios";

const WP_API_BASE = "https://kenza-web.com//wp-json/wp/v2";

export async function getPosts() {
  const res = await axios.get(`${WP_API_BASE}/posts`);
  return res.data;
}

export async function getPortfolioProjects(limit = 100) {
  const categoryId = 12; 
  const res = await axios.get(
    `https://kenza-web.com/wp-json/wp/v2/posts?categories=${categoryId}&per_page=${limit}&_embed`
  );
  return res.data;
}

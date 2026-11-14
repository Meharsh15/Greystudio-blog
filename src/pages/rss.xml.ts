import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE } from "../data/site";
export async function GET(context) {
  const articles = await getCollection("articles", ({ data }) => !data.draft);
  return rss({
    title: SITE.name,
    description: SITE.description,
    site: context.site,
    items: articles.map((article) => ({
      title: article.data.title,
      description: article.data.description,
      pubDate: article.data.publishDate,
      link: `/articles/${article.id}/`
    }))
  });
}

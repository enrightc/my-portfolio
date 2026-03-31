import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
const posts = await getCollection("project");
  return rss({
    title: "Charlie's Portfolio",
    description: 'A collection of my web development projects and progress, sharing what I build and what I learn along the way.',
    site: context.site,
    items: posts.map((project) => ({
      title: project.data.title,
      pubDate: project.data.pubDate,
      description: project.data.description,
      link: `/posts/${project.id}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
import { getPosts, getPostCategories } from '../lib/strapi';
import PostsClient from '../../components/posts/PostsClient';
import { Metadata } from 'next';

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([
    getPosts(),
    getPostCategories()
  ]);

  return <PostsClient posts={posts} categories={categories} />;
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Blog - Artículos sobre Tecnología y Desarrollo',
    description: 'Descubre los últimos artículos sobre desarrollo web, tecnología y mejores prácticas en IT.',
    keywords: ['blog', 'tecnología', 'desarrollo web', 'programación'],
  };
}

export const revalidate = 60;
'use client';

import Link from 'next/link';
import { Post } from '@/types/strapi';
import Image from 'next/image';

interface PostsClientProps {
  posts: Post[];
  categories: string[];
}

export default function PostsClient({ posts, categories }: PostsClientProps) {
  const getPostFields = (post: Post) => {
    return {
      title: post.Titulo || 'Post sin título',
      description: post.descripcion || post.description || 'Descripción no disponible',
      excerpt: post.excerpt || 'Resumen no disponible',
      content: post.contenido || post.content || '',
      date: post.fecha || post.date || post.createdAt,
      author: post.autor || post.author || 'Autor desconocido',
      category: post.categoria || post.category || 'Sin categoría',
      tags: post.etiquetas || post.tags || [],
      slug: post.slug || `post-${post.id}`,
      image: post.imagen_portada || post.cover_image || post.imagen || post.image
    };
  };

  if (!posts || posts.length === 0) {
    return (
      <div className="min-h-screen pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog</h1>
          <p className="text-lg text-gray-600">No hay artículos disponibles en este momento.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nuestro Blog</h1>
          <p className="text-xl max-w-3xl">
            Artículos sobre tecnología, desarrollo web y mejores prácticas en IT.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categories */}
          {categories.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Categorías</h2>
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <span key={index} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
                    {category}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => {
              const fields = getPostFields(post);
              
              return (
                <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                  {fields.image?.data && (
                    <Image
                      src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${fields.image.data.attributes.url}`}
                      alt={fields.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-blue-600 font-semibold">{fields.category}</span>
                      <span className="text-sm text-gray-500">{new Date(fields.date).toLocaleDateString('es-MX')}</span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-gray-900 mb-3">
                      <Link href={`/blog/${fields.slug}`} className="hover:text-blue-600 transition">
                        {fields.title}
                      </Link>
                    </h2>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {fields.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Por {fields.author}</span>
                      <Link 
                        href={`/blog/${fields.slug}`}
                        className="text-blue-600 hover:text-blue-800 font-semibold text-sm"
                      >
                        Leer más →
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
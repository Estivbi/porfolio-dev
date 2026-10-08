import { defineCollection, z } from 'astro:content'

// Blog listo para MDX: añade archivos .mdx en src/content/blog/ con lang: es | en
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    lang: z.enum(['es', 'en']),
    draft: z.boolean().default(false),
  }),
})

export const collections = { blog }

// ./src/sanity/lib/token.ts

import 'server-only'

import { experimental_taintUniqueValue } from 'react'

export const token = "skwF6q7R6dC4riVTL1nLBQLd4P1o4hXz93nQwYKVf2Ou5HcBJtPtCOn7qiWUn7EPGAROcVIywLQf7ZNhLetfwzPCbOIR7xLzCiYRdtdT60lNIZHDZLlC9zLg8EDwC0TtGcIJxLUhDuyMlzzU2pOpQNdU7Q5Fte61pgz0AtBwjZpfZavH0vUn"

if (!token) {
  throw new Error('Missing SANITY_API_READ_TOKEN')
}

experimental_taintUniqueValue(
  'Do not pass the Sanity API read token to the client.',
  process,
  token,
)
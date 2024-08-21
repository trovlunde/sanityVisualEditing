export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-07-11'

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "testing"

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "yo3cpztx"

export const useCdn = false

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}

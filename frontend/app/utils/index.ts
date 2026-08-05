export * from './constants'

/**
 * Generate a random delay for motion animations, up to 300 milliseconds.
 * This can be used to create a staggered effect when multiple elements are animated.
 */
export function randomMotionDelays() {
  return Math.floor(Math.random() * 300)
}

/**
 * Return the full URL for an Open Graph image based on the provided path.
 * @param path The path to the Open Graph image.
 */
export function getOgImageImageUrl(path: string): string {
  const _path = path.startsWith('/') ? path : `/${path}`
  return `${useRuntimeConfig().public.siteUrl}${_path}`
}

/**
 * Composable to generate dynamic IDs from string values
 * @deprecated use createElementId
 */
export function useDynamicId() {
  function create(value: string | null, prefix?: string): string {
    if (!value) {
      return ''
    }

    const noSpace = value.toLowerCase().replace(/\s+/g, '-')
    const noAccents = noSpace.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    const noSpecialChars = noAccents.replace(/[^a-z0-9-]/g, '')

    if (prefix) {
      return `${prefix}-${noSpecialChars}`
    }

    return noSpecialChars
  }

  return {
    /**
     * Creates a dynamic ID from a string value
     * @param {string | null} value - The string to convert into an ID
     * @param {string} [prefix] - An optional prefix to prepend to the ID
     * @returns {string} The generated dynamic ID
     */
    create
  }
}

export function useCustomArrayJoin(seperator = ',', ...args: string[]): Ref<string> {
  return useArrayJoin(args.filter(arg => isDefined(arg) && arg.trim() !== ''), seperator)
}

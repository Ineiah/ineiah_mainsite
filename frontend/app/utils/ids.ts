/**
 * Composable to generate dynamic IDs from string values
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

export type IdTypes = 'action' | 'link' | 'cta' | 'form' | 'image' | 'tel' | (string & {})

export type IdLocation = 'navbar' | 'footer' | (string & {})

/**
 * Helper function to create a unique element ID by combining a base name with additional arguments.
 * The additional arguments are converted to lowercase and spaces are replaced with hyphens.
 * @param idType The type of the element ID.
 * @param location The location of the element ID.
 * @param args Additional strings to include in the element ID.
 * @returns The generated element ID.
 */
// export function createElementId(name: string, separator?: Nullable<string>, ...args: string[]) {
//   const _args = args.map(x => x.toLowerCase().replace(/\s/g, '-'))
//   return `${name}${separator ?? '__'}${_args.join('-')}`
// }

export function createElementId(idType: IdTypes, location: IdLocation, ...args: string[]): string {
  const _args = args.map(x => x.toLowerCase().replace(/\s/g, '-'))
  return `${idType}-${location}__${_args.join('-')}`
}

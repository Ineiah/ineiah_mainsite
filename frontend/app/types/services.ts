import type { Nullable } from "."

export type ServiceNames = 'Shampoings coupes coiffage' | 'Soins et traitements' | 'Soins Olaplex' | 'Soins Kératine Végétale / Botox Naturel' | 'Balayage / Mèches' | 'Couleurs'

export type ServiceCategory = 'Coupe' | 'Soin' | 'Coloration' | 'Mèches'

export interface Service {
  /**
   * Name of the service
   */
  name: Nullable<string>
  /**
   * Gender
   */
  gender: 'Femme' | 'Homme' | 'Mixte'
  /**
   * Price of the service in euros
   */
  price: number
  /**
   * Brief description of the service
   */
  description: Nullable<string>
  /**
   * Detailed description of the actions that will be
   * performed during the service. This is a specific
   * attribute for each service
   */
  includes: string[]
  /**
   * Duration of the service in minutes
   */
  duration?: number
  /**
   * Illustration image URL for the service
   */
  illustration?: string
  /**
   * Image URL for the service card
   */
  image: string
  /**
   * Category of the service
   */
  category: ServiceCategory
}

export interface ServiceSection {
  /**
   * The name of the package
   */
  name: ServiceNames
  /**
   * The list of services included in the package
   */
  services: Service[]
  /**
   * A global description that can be used to provide more context for all the
   * services within the package. This is a global attribute that can be used to provide 
   * more context for all the services within the package, and can be used to highlight common 
   * features or benefits of the services included in the package.
    For example, if the package includes several hair care services, the global description could 
    emphasize the use of high-quality products, personalized consultations, 
    or a relaxing salon environment. This helps potential customers understand the 
    overall value and experience they can expect from the package, beyond just the 
    individual services offered.
   */
  globalDescription: Nullable<string>
  /**
   * Detailed description of the actions that will be
   * performed during the service. This a global attribute
   * that can be used to provide more context for all the
   * services within the package
   */
  includes: string[]
}

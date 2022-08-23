export interface IReview {
  id: string
  rating: number
  review: string
  user: {
    username: string
    firstName: string
    lastName: string
    photo: {
      url: string
      alternativeText: string
    }
  }
  company: {
    slug: string
    name: string
  }
  createdAt: string
}
interface subCategory {
  name: string
  url: string
}
export interface ICategory {
  name: string
  url: string
  id: string
  shortName: string
  slug: string
  icon: string
  subCategories: subCategory[]
}

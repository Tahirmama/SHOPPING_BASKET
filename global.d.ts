
//It contain some information about each product, as well as a flag that indicates whether or not the product has already been added to the basket or not.
//We will not track quantity if a product is added to the basic multiple times.
export interface ProductItem {
  id: string
  title: string
  description: string
  price: number
  imageUrl: string
  added?: boolean
}

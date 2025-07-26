export interface Favorite {
  id: number,
  userId: string,
  recipeId: number,
  title: string,
  image: string,
  cookTime: string,
  servings: string,
  createdAt: Date,
}
import { Request, Response, NextFunction } from "express"
import { RecipeModel } from "../models"

export const recipeMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { id } = req.params

  let foundRecipeById = {}

  if (id) {
    foundRecipeById = await RecipeModel.findById(id)
  }

  res.send(foundRecipeById)
}

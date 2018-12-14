import { JsonController, Post, Body, /* BodyParam, BadRequestError, Authorized*/ Get, Param, HttpCode } from 'routing-controllers'
import Recipe from './entity';
// import Recipe from '../recipes/entity';


@JsonController()
export default class RecipeController {

  
  @Get('/recipes/:id([0-9]+)')
  getRecipe(
    @Param('id') id: number
  ) {
    return Recipe.findOne(id)
  }


  @Get('/recipes')
  getAllRecipes() {
    return Recipe.find()
  }


  @Post('/recipes')
  @HttpCode(201)
  async createRecipe(
    @Body() recipe: Recipe,
  ) {

    await recipe.save()
    return recipe
  }
}




// @Put("/recipe/:id/ingredient/:ingredient_id")
// async updateRecipe(
//  @Param('id') id: number , 
//  @Param('ingredient_id')  ingredient_id : number )
//  {
//     const ingredient = await Ingredient.findOne(ingredient_id)
//     if (!ingredient) throw new NotFoundError('Cannot find ingredient')
//     const recipe = await Recipe.findOne(id)
//     if (!recipe) throw new NotFoundError('Cannot find recipe')

//     //recipe.ingredients= [ingredient]
//     recipe.ingredients.push(ingredient)
//     return recipe.save()

//  }

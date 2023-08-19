export type CardProps = {
    meal:mealProps;
}
export type mealProps = {strMeal:string,
    strMealThumb:string,
    idMeal:string
}
export type areatype = {
    strArea:string
}
export type initialStateAreasType = {
    area:areatype[]|null,
    loading:null|boolean
}
export type categorytype = {
    strCategory:string
}
export type initialStateCategoriesType = {
    categories:categorytype[]|null,
    loading:null|boolean
}
export type ingradiantetype = {
    idIngredient:string,
    strIngredient:string,
    strDescription:string,
}
export type initialStateIngradianteType = {
    ingradiantes:ingradiantetype[]|null,
    loading:null|boolean
}
export type mealTypePop = {
    idMeal:string,
    strMeal:string,
    strCategory:string,
    strArea:string,
    strInstructions:string,
    strMealThumb:string,
    strYoutube:string,
    strTags:string,
    [key: string]:string
}
export type initialStateTypeMeal = {
    meal:mealTypePop|null
}
export interface initialStateType{
    plates:mealProps[],
    caseHandle:boolean|null
}
export type ShowPageProps = {
    query:string,
    value:string|undefined
}
export type initialStateSearchType = {
    meals:mealTypePop[]|null,
    loading:null|boolean
}

// export {mealProps,CardProps};
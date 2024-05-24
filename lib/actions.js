'use server';

import { redirect } from "next/navigation";
import { storeMeal } from "./meals";


function iSInvalidText(text){

  return !text || text.trim() === '';
}

export async function handleFormData(formData){

    const meal ={
      title : formData.get('title'),
      image:formData.get('image'),
      summary: formData.get('summary'),
      instructions: formData.get('instructions'),
      creator: formData.get('name'),
      creator_email:formData.get('email'),

    }
    console.log("Meal object ", meal);

    if( iSInvalidText(meal.title) ||
        iSInvalidText(meal.summary)||
        iSInvalidText(meal.instructions) ||
        iSInvalidText(meal.creater)||
        iSInvalidText(meal.creator_email)||
        !meal.creator_email.includes('@') ||
        !meal.image || image.size() === 0
    ){
      return new Error('Invalid Input');
    }
    await storeMeal(meal);
    redirect('/meals');
  }
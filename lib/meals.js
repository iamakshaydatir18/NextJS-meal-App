

import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';
import fs from 'node:fs';
const db = sql('meals.db');

export async function getMeals(){

    await new Promise((resolve) => setTimeout(resolve,3000));
   
    return db.prepare('SELECT * FROM meals').all();
}


export function getMealDetail(slug){
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}


export async function storeMeal(meal){

    meal.slug = slugify( meal.title,{ lower: true});
    meal.instructions = xss(meal.instructions);

    const extentions = meal.image.name.split('.').pop();
    const fileName = `${meal.slug}.${extentions}`;

    const stream = fs.createWriteStream(`public/images/${fileName}`);
    const bufferedImage = await meal.image.arrayBuffer();

    stream.write(Buffer.from(bufferedImage , (error) =>{
        if(error){
            throw new Error('Saving image failed!');
        }
    }));

    meal.image = `/images/${fileName}`;

    db.prepare(`INSERT INTO meals (slug, title, image, summary, instructions, creator, creator_email) 
    VALUES (@slug, @title, @image, @summary, @instructions, @creator, @creator_email)`).run(meal);
}
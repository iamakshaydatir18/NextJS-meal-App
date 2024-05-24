import Link from 'next/link'
import classes from './page.module.css'
import MealsGrid from '../components/meals/meal-grid'

import { Suspense } from 'react';
import { getMeals } from '@/lib/meals';


async function Meals(){
    const meals = await getMeals();

    return <MealsGrid meals={meals} /> ;
}

export default async function MealsPage(){

    

    return <>
    <header className={classes.header}>
        <h1>
            Delicious meals, created{' '}
            <span className={classes.highlight}>by you</span>
        </h1>
        <p>
            Choose your favorite recipe and cook it yourself. It is east and fun! 
        </p>
        <p className={classes.cta}>
            <Link href="/meals/share">
                Share your favorite Recipe
            </Link>
        </p>
    </header>
    <main className={classes.main}>
        <Suspense fallback={ <p className={classes.loading}>Fetching Meals....</p> }>
            <Meals/>
        </Suspense>
    </main>
    </>
}
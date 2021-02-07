for (let index = 0; index < 8; index++) {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then(data => displayMeals(data));
    
}

const displayMeals = meals => {
    const mealsDiv = document.getElementById('meals');
    //console.log(meals);
    //console.log(meals.meals.length);
    meals.meals.forEach(meal => {
        
        const mealDiv = document.createElement('div');
        mealDiv.className = 'meal';
        const mealInfo = `
        <div onclick="mealdetail('${meal.idMeal}')">
            <img src = "${meal.strMealThumb}">
            <p>${meal.strMeal}</p>
        </div>    
        `
        mealDiv.innerHTML = mealInfo;
        mealsDiv.appendChild(mealDiv);
    });
    
}

const mealdetail = mealId =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
    .then(res => res.json())
    .then(data => detailsInfo(data.meals[0]));
}

const detailsInfo = meal =>{
    console.log(meal);
    const detailsDiv = document.getElementById('detailsInfo');
    detailsDiv.innerHTML = `
        <h3>Meal ID : ${meal.idMeal}</h3>
        <h3>Meal Name : ${meal.strMeal}</h3>
        <h3>Meal Category : ${meal.strCategory}</h3>
        <h3>Area of the Meal${meal.strArea}</h3>
        <p><b>Method of Preparation</b> : ${meal.strInstructions}</p>
        <h3>Similar : ${meal.strTags}</h3>
        <h1>Sample Photo : <br></h1>
        <img src = "${meal.strMealThumb}">

    `
}
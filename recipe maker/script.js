const searchbtn = document.querySelector(".inputs button")
const list = document.querySelector(".list")
const popup = document.querySelector(".popup")


searchbtn.addEventListener("click", getingredients => {
    let searchtext = document.querySelector(".inputs input").value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchtext}`)
    .then(response => response.json())
    .then(data => {
        let html = "";
        if(data.meals){
            data.meals.forEach(meal => {
                html += `        
                <div id=${meal.idMeal}>
                    <img class="foodimg" src="${meal.strMealThumb}" width="300px">
                    <p>${meal.strMeal}</p>
                    <button class="getrecipebtn">Get Recipe</button>
                </div>`
            });
        }
        else{html = "Sorry We don't Find Any Meal Match with Your Ingredient!"}
        list.innerHTML = html
    })
})


list.addEventListener("click", event =>{
    popup.style.display = "block";
    if(event.target.classList.contains('getrecipebtn')){
        let mealid = event.target.parentElement;
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid.id}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let meal = data.meals[0]
            let html =`<p class="name">${meal.strMeal}</p>
                    <p class="inst">Instruction's Below</p>
                    <p>${meal.strInstructions}</p>
                    <img class="popupimg" src="${meal.strMealThumb}" alt="" width="300px">
                    <button id="next">Next</button>`;
            popup.innerHTML = html;
            const next = document.getElementById("next")
            next.addEventListener("click", event => {
                popup.style.display = "none"
            })
        });
    }
})



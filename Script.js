
const nationCapitals = [];
const a=document.getElementById("error1");


document.addEventListener("DOMContentLoaded", function() {
// Define three default countries with their information
const defaultCountries = [
    { nation: "Luxembourg", capital: "Luxembourg city", flag:  "https://flagcdn.com/w320/lu.png" },
    { nation: "Slovakia", capital: "Bratislava", flag: "https://flagcdn.com/w320/sk.png" },
    { nation: "Japan", capital: "Tokyo", flag:  "https://flagcdn.com/w320/jp.png" }
];

// Populate nationCapitals array with default countries
defaultCountries.forEach(country => {
    nationCapitals.push(country);
});

// Call createDom to display default countries
createDom(nationCapitals);


});




function curr() {
            const userInput = (document.getElementById("currency").value).toUpperCase();
            const nationCapitals = [];
           
            clearDataContainer();
    
  
        // Fetch data based on user input
        fetch(`https://restcountries.com/v3.1/currency/${userInput}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            },
        })
        .then(response => response.json())
        .then(response => {
           if (response.status === 404) {
                
           
                // No countries found, display a message
                const countriesContainer = document.getElementById("data");
                clearDataContainer();
                a.style.visibility="visible";


            } 
            
            else {
                
                // Extract common names, capitals, and flags
                response.forEach(country => {
                    nationCapitals.push({
                        nation: country.name.common,
                        capital: country.capital,
                        flag: country.flags.png
                    });
                });

                // Call createDom after fetching and processing data
                createDom(nationCapitals);
              
            }
        }) 
           .catch(error => console.error('Error fetching data:', error));
    
}
        
       
        function createDom(nationCapitals) {
            console.log(typeof(nationCapitals))
            const countriesContainer = document.getElementById("data");

            // Clear existing content before adding new content
            clearDataContainer();

            for (const country of nationCapitals) {
                const countryDiv = document.createElement("div");
                countryDiv.classList.add("countryies");
                countryDiv.addEventListener("click", () => showCountryInfo(country));

                const image=document.createElement("img");
                image.classList.add("flagimage");
                image.src=country.flag;
                console.log(country.flag);


                const name = document.createElement("h2");
                name.textContent = "Nation : " + country.nation;

                const capital = document.createElement("p");
                capital.textContent = "Capital: " + country.capital;
                
                countryDiv.appendChild(image);
                countryDiv.appendChild(document.createElement("hr"));
                countryDiv.appendChild(name);
                countryDiv.appendChild(capital);

                countriesContainer.appendChild(countryDiv);
            }
            
        }
        const showCountryInfo = (country) => {

        }
        function clearDataContainer() {
            const countriesContainer = document.getElementById("data");
            countriesContainer.innerHTML = ""; 
        }
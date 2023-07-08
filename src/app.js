

// top anime
fetch('https://api.jikan.moe/v4/top/anime?limit=7').then(res => res.json()).then(data =>{
    

        data.data.forEach(anime => {
            // console.log(anime)


            let animeCard = `
    
    
            <a href=${anime.url} class="anCard w-[100px] md:w-[200px] rounded">
            <img class="rounded" src="${anime.images.jpg.image_url}" alt="">
        
            <p class="name truncate overflow-hidden text-white">${anime.title}</p>
            <span class="text-gray-500 w-full flex justify-between items-center"><p class="year w-1/2 ">${anime.year}</p><p class="w-1/2 score space-x-5 flex items-center"><i class='bx bxs-star-half text-boor'></i>${anime.score}</p></span>
        </a>
        
            `
        document.getElementById('animeCards').innerHTML+=animeCard

        });






})








async function recomendation() {
    try {
      // Fetch recommended anime from Jikan API
      const response = await fetch('https://api.jikan.moe/v4/recommendations/anime?limit=7');
      const data = await response.json();
  
      // Loop through the recommendations and create HTML for each anime
      data.data.forEach(anime => {
        anime.entry.forEach(elment => {

            console.log(elment)
            
            let animeCard = `
    
    
            <a href=${elment.url} class="anCard w-[100px] md:w-[200px] rounded">
            <img class="rounded" src="${elment.images.jpg.image_url}" alt="">
        
            <p class="name truncate overflow-hidden text-white">${elment.title}</p>
        </a>
        
            `
        document.getElementById('recomendations').innerHTML+=animeCard

      });
      });
    } catch (error) {
      console.error(error);
    }
  }
  

  recomendation();
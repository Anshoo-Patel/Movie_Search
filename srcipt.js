const searchForm = document.querySelector("form");
const searchBox = document.querySelector(".inputbox");
const searchbtn = document.querySelector(".search");
const movieContainer = document.querySelector(".movie-container");

const getmovieinfo=async(movie)=>{

    const myapikey = '104b695c';
    const url = `http://www.omdbapi.com/?apikey=${myapikey}&t=${movie}`;
    const reponse =await fetch(url);
    const data =await reponse.json();
    // console.log(data);
    showmoviedata(data);
}

const showmoviedata=(data)=>{
    
    movieContainer.innerHTML='';
    movieContainer.classList.remove("nobackgrd");

    const {Title,imdbRating,Year,Genre,Actors,Poster,Runtime,Released} = data;
    const movieElement =document.createElement('div');
    movieElement.classList.add('movieinfo');
    movieElement.innerHTML=`<h2>${Title}</h2>
                            <p>Rating:${imdbRating}</p>`;

    const moviegeneralElement = document.createElement('div');
    moviegeneralElement.classList.add('movie-genere');      
    Genre.split(",").forEach(element => {
        const p=document.createElement('p');
        p.innerText=element;
        moviegeneralElement.appendChild(p);
    });  
    
    movieElement.appendChild(moviegeneralElement);

    movieElement.innerHTML+=`<p>Released Date:${Released}</p>
                            <p>Duration:${Runtime}</p>
                            <p>Cast: ${Actors}</p>`;
           
    const moviePoster=document.createElement('div');
    moviePoster.classList.add("movie-poster");
    moviePoster.innerHTML = `<img src="${Poster}"/>`;   
    
    movieContainer.appendChild(movieElement);
    movieContainer.appendChild(moviePoster);
}

searchForm.addEventListener("submit",(e) => {

    e.preventDefault();
    const movieName = searchBox.value.trim();
    if(movieName!='')
        getmovieinfo(movieName);
    else{

    }
})
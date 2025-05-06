const movies = [
    {
        url : "https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/RRR_Poster.jpg/250px-RRR_Poster.jpg",
        title : "RRR"
    },
    {
        url : "https://survi.in/wp-content/uploads/2022/04/FQO8gH2VsAMpMOb-e1649922435272.jpeg",
        title : "KGF"
    },
    {
        url : "https://m.media-amazon.com/images/M/MV5BNTU0ZjYxOWItOWViMC00YWVlLWJlMGUtZjc1YWU0NTlhY2ZhXkEyXkFqcGc@._V1_.jpg",
        title : "salaar"
    }
]


movies.forEach((val,i)=>{
    const movieDiv = document.createElement("div");
    const movieImg  = document.createElement("img");
    movieImg.src = val.url;
    movieImg.alt = val.title;
    movieImg.height = "200";
    
    const movieTitle = document.createElement("h1");
    movieTitle.textContent = val.title;
    movieDiv.append(movieImg,movieTitle);
    document.getElementById('main').append(movieDiv);
})










// function display()
// {
//    const heading = document.createElement('h1');
//    heading.textContent = "Hello world";
//    document.getElementById('main').appendChild(heading);
// }

// display();
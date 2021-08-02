async function displayMovies(e) {
    e.preventDefault();
   
    let q = document.getElementsByClassName("search-input").value;

    let key = "AIzaSyB2hQs2D7dFUP5L10m7XXYHoReKunUHrcU";
    //shared key
    let key2 = "AIzaSyDU_-68i-uUxzTdIIPF9d4v6x5CahfgfiY";

    
      let responce = await fetch(
        `https://www.googleapis.com/youtube/v3/search?q=${q}&key=AIzaSyBjRAO8wOdSWQbxrryr8JYl9JnkhxXfkuU&maxResults=20`
      );
      let data = await responce.json();
     

      let videosection = document.getElementById("videosDisplay");
      videosection.innerHTML=null;
      let { items } = data; console.log(data);

      items.forEach(({ id: { videoId } }) => {
        
       
        let divimg=document.createElement("div");
        divimg.innerHTML=`<iframe src="https://www.youtube.com/embed/${videoId}" title="YouTube">`
       // divimg.setAttribute('class','thumbnail')

           
        let videcont=document.createElement("div");
        videcont.setAttribute('class','video-container')
        videcont.appendChild(divimg);
        videosection.appendChild(videcont);
      });
  }

  
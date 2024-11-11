const speakers = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/81d3cc60bee318877cbca2ac10d575b201a679836e0a3c905b80adee0a4b8bed",
      alt: "John Doe",
      name: "John Doe",
      position: "Chief Marketing Officer",
      company: "Acme Corp"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/81d3cc60bee318877cbca2ac10d575b201a679836e0a3c905b80adee0a4b8bed",
      alt: "John Doe",
      name: "John Doe",
      position: "Chief Marketing Officer",
      company: "Acme Corp"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/b95c789ef5067ddab750c8160212d80a793856626ecedc95363550a8a99d805d",
      alt: "John Doe",
      name: "John Doe",
      position: "Chief Technical Developer",
      company: "Pantheon"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/4441967e6d11bece83feb9f94fdd75d6e4d301491cd2555ffdcd7e666cb95ea4",
      alt: "John Doe",
      name: "John Doe",
      position: "Chief Marketing Officer",
      company: "Specbee"
    }
  ];
  
  const slidesContainer = document.getElementById('carousel-slides');
  
  speakers.forEach(speaker => {
      const slide = document.createElement('article');
      slide.className = 'speaker-card';
    slide.innerHTML = `
      <img src="${speaker.image}" alt="${speaker.alt}" class="speaker-image" />
      <div class="speaker-info">
        <h3 class="speaker-name">${speaker.name}</h3>
        <p class="speaker-position">${speaker.position}</p>
        <p class="speaker-company">${speaker.company}</p>
      </div>
    `;
    slidesContainer.appendChild(slide);
    
    slide.onclick = () => {
        let container = document.getElementById('container')
        container.innerHTML = null;
        const newDiv = document.createElement('div');
        newDiv.className = 'dynamic-div1';
        const newDiv2 = document.createElement('div');
        newDiv2.className = 'dynamic-div2';
        newDiv.className = 'dynamic-div';
        let imag = document.createElement('img');
        imag.src = speaker.image;
        let name = document.createElement('h1');
        name.textContent = speaker.name;
        let pos = document.createElement('h2');
        pos.textContent = speaker.position;
        let cmpny = document.createElement('h2');
        cmpny.textContent = speaker.company;
        newDiv.appendChild(imag);
        newDiv2.appendChild(name, pos, cmpny);
        container.appendChild(newDiv,newDiv2);
        alert('Clicked on'+ speaker.name);
    };
  });
  
  let currentSlide = 0;
  
  function moveSlide(direction) {
    const totalSlides = speakers.length;
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
  }
  


  function createDiv() {
    const newDiv = document.createElement('div');
    newDiv.className = 'dynamic-div';
    newDiv.textContent = 'New Div';
    document.getElementById('container').appendChild(newDiv);
  }
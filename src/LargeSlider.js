import React from 'react';
import './App.css';
import './animate.min.css';
import './default.css';

const sliderImages = [
  {image: "dummy/pink-flamingo-1484781_1920.jpg", description: "Flamingoes showing off their majestic legs on the Kenyan Lake Naivasha", title: "Bird Lovers"},
  {image: "dummy/palms-914351_1920.jpg", description: "Relax and enjoy the wind and sun at the Kenyan coast as you listen to the whispers of the palms", title: "Relax at the Coast"},
  {image: "dummy/david-clode-800623-unsplash.jpg", description: "Enjoy Fantastic views of the Mara from the air", title: "A view from above"},
  {image: "dummy/anders-wideskott-57598-unsplash.jpg", description: "Experience the white sandy beaches at the kenyan cost.", title: "Inviting waters"},
  {image: "dummy/shripal-daphtary-611696-unsplash.jpg", description: "Watch the big five go about their daily business", title: "Animals at the safari"},
  {image: "dummy/sam-power-1403364-unsplash.jpg", description: "Have a staredown with kenya's big cats", title: "King of the jungle"},
  {image: "dummy/randy-fath-769832-unsplash.jpg", description: "Indulge with culture. Dance, eat, walk the kenyan way", title: "Kenyan culture"},
  {image: "dummy/elephants-4275741_1920.jpg", description: "Consectetur adipisicing elit. Facere excepturi itaque quasi dolorem deserunt nesciunt neque debitis incidunt voluptatem, laudantium, odio fugit. Obcaecati fugiat perferendis numquam?", title: "Venenatis felis pulvinar ultrices"},
  {image: "dummy/kenya-1883654_1920.jpg", description: "Consectetur adipisicing elit. Facere excepturi itaque quasi dolorem deserunt nesciunt neque debitis incidunt voluptatem, laudantium, odio fugit. Obcaecati fugiat perferendis numquam?", title: "Venenatis felis pulvinar ultrices"},
  {image: "dummy/masai-mara-2741154_1920.jpg", description: "Consectetur adipisicing elit. Facere excepturi itaque quasi dolorem deserunt nesciunt neque debitis incidunt voluptatem, laudantium, odio fugit. Obcaecati fugiat perferendis numquam?", title: "Venenatis felis pulvinar ultrices"},
  {image: "dummy/cedric-frixon-463001-unsplash.jpg", description: "Consectetur adipisicing elit. Facere excepturi itaque quasi dolorem deserunt nesciunt neque debitis incidunt voluptatem, laudantium, odio fugit. Obcaecati fugiat perferendis numquam?", title: "Venenatis felis pulvinar ultrices"},
  {image: "dummy/harshil-gudka-556417-unsplash.jpg", description: "Consectetur adipisicing elit. Facere excepturi itaque quasi dolorem deserunt nesciunt neque debitis incidunt voluptatem, laudantium, odio fugit. Obcaecati fugiat perferendis numquam?", title: "Venenatis felis pulvinar ultrices"},
]


const Slider = () =>{
  let controlArray = [];
  let renderSlider = sliderImages.map(
    (obj, i, arr) => {
      controlArray.push(<li><a>{i}</a></li>)
      return (
        <li style={{backgroundSize: "100%"}} data-background={obj.image}>
          <div className="container">
            <div className="slide-caption col-md-4">
              <h2 className="slide-title">{obj.title}</h2>
              <p>{obj.description}</p>
            </div>
          </div>
        </li>
        )

  })
  return (
    <div className="slider">
            <ul className="slides" >
              { renderSlider }
            </ul>
            <div className="flexslider-controls">
              <div className="container">
                <ol className="flex-control-nav">
                  {controlArray}
                </ol>
              </div>
            </div>
          </div>
    )
}

export default Slider;

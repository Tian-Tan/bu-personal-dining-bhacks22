import Image from 'react-bootstrap/Image'

export default function Home() {
  return (
    <div>
      <div className="homepage">
        <h2>
          Marciano
        </h2>
        <p>
          Featuring fresh-made pasta and fresh-baked tandoori alongside a dedicated gluten free kitchen and gluten free pantry. Plus, a complete vegan kitchen station, without worry of cross-contact, and daily offerings of Halal menu items. Here you’ll find one of the longest salads bars on campus loaded with proteins and greens, and featuring tons of locally sourced produce from New England and oh, did we mention a fireplace?
        </p>
        <Image
          src="https://inhabitat.com/wp-content/blogs.dir/1/files/2012/09/BU-Marciano-Center-11.jpg"
          rounded
        />
      </div>
      <div className="homepage">
        <h2>
          Warren
        </h2>
        <p>
          A round grill, gourmet pizza, and full-service deli alongside an expansive offering of vegan, vegetarian, and Halal menu items. Add in a pan-Asian wok station and dedicated gluten free kitchen and gluten-free pantry, and that’s just the start. A menu where many of the food items served are vegan or vegetarian scattered across 18 stations.
        </p>
        <Image
          src="https://farm8.staticflickr.com/7448/14219734223_90c62f65b8_z.jpg"
          rounded
        />
      </div>
      <div className="homepage">
        <h2>
          West
        </h2>
        <p>
          Students use the term “West is Best” and with more than 20 different food stations surrounded by views of Nickerson Field, they may be on to something. Featuring the famous West Burger alongside stations that serve Halal food items, a dedicated vegan station, plus a gluten free pantry loaded with snacks and meals ready to eat, you quickly learn why “West is Best”!
        </p>
        <Image
          src="https://farm8.staticflickr.com/7377/14197077622_cb7d407c5e_z.jpg"
          rounded
        />  
      </div>
    </div>
  )
}

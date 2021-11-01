
import React from 'react';
import Banner from '../Banner/Banner';
import Cards from '../Cards/Cards';
import MidelSection from '../MidelSection/MidelSection';
import './Home.css'




const Home = () => {

   


    return (
        <div>
  {/* Banner Section  */}

        <Banner></Banner>
           
       <MidelSection></MidelSection>
           
        <Cards></Cards>


        <div className="third-section">
              <h1>Impressions</h1>
              <h2>Thank you for the reviews we are proud of</h2>
              <hr />

               <div className="sectionArea">
                   <div className="sectionCard">
                       <img src="https://i.ibb.co/BnRDxdh/images.jpg" alt="" />
                       <h2>Sandra Bautista</h2>
                       <p>Can't wait to hit the slopes? Get ready to make the most out of winter and enjoy a fantastic ski or snowboard getaway. Don't forget to keep an eye on the official websites of your chosen resort to get the most accurate information about current rules and regulations.</p>
                       

                   </div>
                   <div className="sectionCard">
                       <img src="https://i.ibb.co/bJqjjrf/unnamed.jpg" alt="" />
                       <h2>Alex Brown</h2>
                       <p>
                       Once your flight is booked, you’ll want to keep tabs on gate changes, layover information and more. FlightStats.com can help you plan a smooth trip by advising you on the best time of day to fly from a specific airport and which terminals to avoid when connecting flights.
                       </p>
                       

                   </div>
                   <div className="sectionCard">
                       <img src="https://i.ibb.co/Vx1DBrt/images-1.jpg" alt="" />
                       <h2>Patricia  Spruill</h2>
                       <p>
                       Vacation rentals are an especially good value for groups because they generally offer more space and amenities for prices similar to or less than hotel rates, particularly if you look at it on a per-bed basis.
                       </p>
                       

                   </div>
                  
               </div>

           </div>
     
           <div className="last-section">
               <div className="last-section-text">
                  
                   <p>
                   <h2>Feel the vibe</h2>
                   <hr />
                   We stand by our low prices with our Price Match Guarantee! In the unlikely event you find a lower rate on Travelocity.com or another U.S.-based site within 24 hours of booking with us, we’ll credit or refund you the difference in price.
                   </p>
               </div>
               <div className="last-section-video">
               <iframe width="560" height="315" src="https://www.youtube.com/embed/8ml0fprGO4w?start=12" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
               </div>

           </div>


           

        

           
        </div>
    );
};

export default Home;
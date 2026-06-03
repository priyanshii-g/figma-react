import React from 'react';

export default function LatestNews() {
  return (
    <section className="latest-news-section">
      <h2>The latest news</h2>
      
      <div className="news-cards-container">
         
         <article className="news-card-featured">
           <img 
             src="https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?q=80&w=1184&auto=format&fit=crop" 
             alt="Man speaking on stage" 
             className="featured-image"
           />
           <div className="featured-content">
             <span className="news-category">2025 Regional Results</span>
             <h3>Lincoln Takes Home 1st place overall.</h3>
             <p>The team took home a stunning win, claiming 3 of the top 5 spots! Big shout outs to Emily, Steve, Bryan and Lizzie.</p>
           </div>
         </article>

         <div className="news-secondary-row">
           
           <article className="news-card-small">
             <div className="small-card-content">
               <span className="news-category">Upcoming event</span>
               <h4>6/11 Lunch Hour Pizza</h4>
             </div>
             <img 
               src="https://picsum.photos/1184/352" 
               alt="Wooden lectern" 
               className="small-card-image"
             />
           </article>

           <article className="news-card-small spotlight-card">
             <span className="news-category">Spotlight</span>
             <img 
               src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop" 
               alt="Portrait of Johnny" 
               className="spotlight-image"
             />
             <div className="spotlight-text">
               <h4>Johnny S.</h4>
               <p>Congrats Johnny on qualifying for Nationals!</p>
             </div>
           </article>

         </div>

      </div>
    </section>
  );
}
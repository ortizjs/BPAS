import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import RightSideInfo from '../Info/RightSideInfo'
import './Reviews.css'

const API_KEY = process.env.REACT_APP_YELP_DEV_API_KEY
const BusinessID = 'bimmers-performance-auto-service-concord'

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    var options  = {
        method: 'get', 
        headers: new Headers({
            "Access-Control-Allow-Headers" : "Content-Type",
            'Access-Control-Allow-Origin': '*',
            // 'Access-Control-Allow-Origin': 'no-cors',
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json'
        })
    }
    const fetchYelpData = async () => {
        try {


        //   const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${BusinessID}/reviews?limit=50&sort_by=yelp_sort`, {
        //   const response = await fetch(`https://api.yelp.com/v3/businesses/${BusinessID}/reviews?limit=50&sort_by=yelp_sort`)
      
            const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${BusinessID}/reviews?limit=20&sort_by=yelp_sort`, options);
      
            if (!response.ok) {
                throw new Error('Failed to fetch Yelp data');
            }
      
            const data = await response.json();
         
            setReviews(data.reviews)
        } catch (error) {

            console.error('Error fetching Yelp data', error);
        }
    };

    useEffect(() => {
        fetchYelpData();
    }, [])

    return (
        <div className='reviews-container'>
            <div className='reviews-page-left-side'>
            <h2>Yelp Reviews</h2>
            <ul>
                {reviews.map(review => (
                <li key={review.id} className="review-item">
                    <div className="review-header">
                    <p>
                        <FontAwesomeIcon icon={faStar} color="gold" /> {review.rating}
                    </p>
                    <p>By {review.user.name}</p>
                    </div>
                    <p className="review-text">{review.text}</p>
                </li>
                ))}
            </ul>
            </div>
            <div className='reviews-page-right-side'>
                <RightSideInfo/>
            </div>
        </div>
      );
}

export default Reviews

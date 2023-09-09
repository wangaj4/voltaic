
import amazonRainforest from './img/amazonRainforest.jpg'
import grandCanyon from './img/grandCanyon.jpg'
import haLongBay from './img/haLongBay.jpg'
import machuPicchu from './img/macchuPichu.jpg'
import northernLights from './img/northernLights.jpg'
import santorini from './img/santorini.jpg'
import victoriaFalls from './img/victoriaFalls.jpg'


const preloadedImages = {};


function preloadImages() {
    const imageUrls = [grandCanyon,haLongBay,northernLights,santorini,machuPicchu,amazonRainforest, victoriaFalls];


    return Promise.all(
        imageUrls.map((imageUrl) => {
            return new Promise((resolve, reject) => {
                const image = new Image();
                image.src = imageUrl;
                image.onload = () => {
                    preloadedImages[imageUrl] = image;
                    resolve(image);
                };
                image.onerror = () => {
                    reject(new Error(`Failed to load image: ${imageUrl}`));
                };
            });
        })
    );
}

export { preloadImages, preloadedImages };

// globals
const images = document.querySelectorAll('.item img');
const lightboxImg = document.querySelector('.lightbox .preview');
const lightbox = document.querySelector('.lightbox');
const closeBtn = document.querySelector('.close');
const numImg = document.querySelector('.num-img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

// function loop images
function getImages() {
    for (let i = 0; i < images.length; i++) {
        let imgIndex = i;
        images[i].addEventListener( 'click',() => {
            // set src attribute lightboximg to image click src
            lightboxImg.src = images[imgIndex].src;
            // return number image
            numImg.innerText = `${imgIndex + 1} from ${images.length} images`;
            
            // create slider 
                // prev btn
            prevBtn.addEventListener('click', () => {
                imgIndex--;
                if (imgIndex == 0) {
                    prevBtn.style.display = 'none';
                }
                // show next btn if hide
                if (imgIndex < images.length) {
                    nextBtn.style.display = 'block';
                }
                // set src attribute lightboximg
                lightboxImg.src = images[imgIndex].src;
                // set img cont text
                numImg.innerText = `${imgIndex + 1} from ${images.length} images`;
            });

                // next btn
            nextBtn.addEventListener('click', () => {
                imgIndex++;
                let imgCount = images.length - 1;
                if (imgIndex >= imgCount) {
                    nextBtn.style.display = 'none';
                }
                // show prev btn if hide
                if (imgIndex > 0) {
                    prevBtn.style.display = 'block';
                }
                // set src attribute lightboximg
                lightboxImg.src = images[imgIndex].src;
                // set img cont text
                numImg.innerText = `${imgIndex + 1} from ${images.length} images`;
            });
            // show btn
            if (imgIndex > 0) {
                prevBtn.style.display = 'block';
            }
            if (imgIndex < images.length) {
                nextBtn.style.display = 'block';
            }
            // show lightbox
            lightbox.style.display = 'block'; 
        });

    }
}
getImages();

// close lightbox
function closeBox() {
    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';  
    });
}
closeBox();
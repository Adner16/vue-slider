console.log('js ok',Vue);

Vue.config.devtools= true;

const app = new Vue({
    el: '#root',
    data: {
        currentImage: 0,
        images: [
            'images/image1.jpg',
            'images/image2.jpg',
            'images/image3.jpg',
            'images/image4.jpg',
        ]

    },
    methods: {
        isCurrent(index) {
            return (index == this.currentImage);
        },
        setPic(index) {
           this.currentImage = index;    
        },
        nextPic(){
            this.currentImage++;
        },
        prevPic(){
            this.currentImage--;
        }
    }
    
})
import Axios from "axios";

export default {
    name: 'CarouselComponent',
    data: function () {
        return {
            data: [],
            index: 0
        }
    },
    computed: {
        containerStyle() {
            return {
                marginLeft: `${this.index * -100}%`
            }
        }
    },
    methods: {
        move() {

            this.index++;
            if (this.index > 4) {
                this.index = 0;
            }


        },
        play() {
            if (this.timer) {
                window.clearInterval(this.timer);
                this.timer = null;
            }
            this.timer = window.setInterval(() => {
                this.move();
            }, 4000)
        },
        stop() {
            window.clearInterval(this.timer);
        },
        getData() {
            Axios.get('http://localhost/data')
                .then(data => data.data)
                .then(data => data.data)
                .then(data => {
                    this.data = data;
                })
        },
        getIndex() {
            console.log(event.target);
        }
    },
    created: function () {
        this.getData();
        this.play();
    }
}
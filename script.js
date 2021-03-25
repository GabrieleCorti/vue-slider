const app = new Vue (
    {
        el: "#root",
        data: {
            img: [
                "http://www.italia.it/uploads/RTEmagicC_Enit-Lazio-Roma-Tevere_575x315.jpg.jpg",
                "https://blog.libero.it/wp/biblioterapia/wp-content/uploads/sites/21643/2019/10/Roma.jpg",
                "https://lh3.googleusercontent.com/proxy/ZuqCbpDwRhh9rrdQVSOFLd5H5t48w4Lr1yrkAcpJr52L9YsdqVvhHi63WHFtWbo6iHlSq0cfBOJT7IgnnbdTHw"
            ],
            imgIndex: 0,
        },
        methods: {
            forward: function(){
                this.imgIndex++

                if (this.imgIndex == 3) {
                    this.imgIndex = 0;
                }
            },
            backward: function () {
                if (this.imgIndex == 0) {
                    this.imgIndex = 3;
                }

                this.imgIndex--
            },
        }
    }
    );
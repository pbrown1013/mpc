const app = new Vue({
  el: "#app",
  data() {
    return {
      progressBarOn: true,
      progressBar: 0,
      intervalProgress: undefined,
      intervalItem: undefined,
      currentChairIndex: undefined,
      currentMatIndex: undefined,
      cabinets: [
        {
          thumbnail:
            "http://metro.dyadtest.com/wp-content/uploads/2019/12/Color1_IE_1tn.png",
          main:
            "http://metro.dyadtest.com/wp-content/uploads/2019/12/Color1_IE_1.png"
        },
        {
          thumbnail:
            "http://metro.dyadtest.com/wp-content/uploads/2019/12/Color1_IE_2tn.png",
          main:
            "http://metro.dyadtest.com/wp-content/uploads/2019/12/Color1_IE_2.png"
        },
        {
          thumbnail:
            "http://metro.dyadtest.com/wp-content/uploads/2019/12/Color1_PP_2tn.png",
          main:
            "http://metro.dyadtest.com/wp-content/uploads/2019/12/Color1_PP_2.png"
        }
      ],
      panels: [
        {
          thumbnail:
            "http://metro.dyadtest.com/wp-content/uploads/2019/12/Color1_Edge_2tn.png",
          main:
            "http://metro.dyadtest.com/wp-content/uploads/2019/12/Color1_Edge_2.jpg"
        },
        {
          thumbnail:
            "http://metro.dyadtest.com/wp-content/uploads/2019/12/Color1_OE_1tn.png",
          main:
            "http://metro.dyadtest.com/wp-content/uploads/2019/12/Color1_OE_1.png"
        },
        {
          thumbnail:
            "http://metro.dyadtest.com/wp-content/uploads/2019/12/CabinetTest_1tn.png",
          main:
            "http://metro.dyadtest.com/wp-content/uploads/2019/12/Color1_OE_2.jpg"
        }
      ]
    };
  },
  bcabinets: [
    {
      thumbnail:
        "http://metro.dyadtest.com/wp-content/uploads/2019/12/Color2_OE_1_tn.png",
      main:
        "http://metro.dyadtest.com/wp-content/uploads/2019/12/Color2_OE_1.png"
    },
    {
      thumbnail:
        "http://metro.dyadtest.com/wp-content/uploads/2019/12/Color2_OE_2tn.png",
      main:
        "http://metro.dyadtest.com/wp-content/uploads/2019/12/Color2_OE_2.png"
    },
    {
      thumbnail:
        "http://metro.dyadtest.com/wp-content/uploads/2019/12/Color2_Edge_2tn.png",
      main:
        "http://metro.dyadtest.com/wp-content/uploads/2019/12/Color2_Edge_2.png"
    }
  ],
  bpanels: [
    {
      thumbnail:
        "http://metro.dyadtest.com/wp-content/uploads/2019/12/Color2_IE_2tn.png",
      main:
        "http://metro.dyadtest.com/wp-content/uploads/2019/12/Color2_IE_2.png"
    },
    {
      thumbnail:
        "http://metro.dyadtest.com/wp-content/uploads/2019/12/Color2_PP_2tn.png",
      main:
        "http://metro.dyadtest.com/wp-content/uploads/2019/12/Color2_PP_2.png"
    },
    {
      thumbnail:
        "http://metro.dyadtest.com/wp-content/uploads/2019/12/Color2_PP_1tn.png",
      main:
        "http://metro.dyadtest.com/wp-content/uploads/2019/12/Color2_PP_1.png"
    }
  ],
  methods: {
    // /**
    //  * @params event is an object
    //  * key = type of item clicked
    //  * value = index passed in
    //  */
    _handleImagePreview(event) {
      // Disable timer functionality
      clearInterval(this.intervalItem);
      clearInterval(this.intervalProgress);
      this.progressBarOn = false;

      // Show item clicked
      let index = event.value;
      let dataType = event.key;
      if (this[dataType] == index) {
        this[dataType] = undefined;
      } else {
        this[dataType] = index;
      }
    }
  },
  mounted() {
    let progressCount = 0;
    let count = 0;
    let maxArrayLength = this.chairs.length;

    this.intervalProgress = setInterval(() => {
      this.progressBar = progressCount + "%";
      progressCount += 0.1111111; /* 100%/(9000/10) */
      if (progressCount > 100) {
        progressCount = 0;
      }
    }, 10);

    this.intervalItem = setInterval(() => {
      console.log("I ran");
      this.currentChairIndex = count;
      this.currentMatIndex = count;
      if (count < maxArrayLength - 1) {
        count++;
      } else {
        count = 0;
      }
    }, 3000);
  }
});

let bar1 = document.querySelector(".bar1");
let bar2 = document.querySelector(".bar2");
let bar3 = document.querySelector(".bar3");
let bar4 = document.querySelector(".bar4");
let bar5 = document.querySelector(".bar5");
let bar6 = document.querySelector(".bar6");
let bar7 = document.querySelector(".bar7");

// fetching

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const sortedArray = data.sort((a, b) => a.amount - b.amount);

    data[0]["height"] = "30px";
    data[1]["height"] = "40px";
    data[2]["height"] = "50px";
    data[3]["height"] = "80px";
    data[4]["height"] = "100px";
    data[5]["height"] = "110px";
    data[6]["height"] = "150px";

    // console.log(sortedArray);



    let currentDay = new Date();

    const currentDayOfWeek = currentDay.getDay();

    const daysOfWeek = [
      "sun",
      "mon",
      "tue",
      "wed",
      "thu",
      "fri",
      "sat"
  ];


    let styleElement = document.getElementById('custom-styles');
    if (!styleElement) {
        styleElement = document.createElement('style');
        styleElement.id = 'custom-styles';
        document.head.appendChild(styleElement);
    }
    

    function beforeStyleElement(data, barNo, i){
        let color = "white";
        let background = "hsl(9, 12%, 22%);";
        let width = "100%";
        let height = "30px";
        let padding = "2px";
        let position = "absolute";
        let top = "-30px";
        let left = "-2px";
        let text = "center";
        let border = "5px";

        const css = `.bar${barNo}:hover::before {
            content: "${data[i].amount}";
            color: ${color};
            width: ${width};
            background-color: ${background};
            padding: ${padding};
            position: ${position};
            top: ${top};
            left: ${left};
            text-align: ${text};
            border-radius: ${border};
        }`;

        styleElement.textContent += css;
    }


    for (let i = 0; i < 7; i++) {
      if (data[i].day === "mon") {
        bar1.style.height = data[i].height;

        if (data[i].day === daysOfWeek[currentDayOfWeek]) {
            bar1.classList.add("cyan");
        }

        beforeStyleElement(data, 1, i);

      } 
      
      else if (data[i].day === "tue") {
        bar2.style.height = data[i].height;
        if (data[i].height === daysOfWeek[currentDayOfWeek]) {
            bar2.classList.add("cyan");
        }

        beforeStyleElement(data, 2, i);
      } 
      
      else if (data[i].day === "wed") {
        bar3.style.height = data[i].height;
        if (data[i].day === daysOfWeek[currentDayOfWeek]) {
          bar3.classList.add("cyan");
        }

        beforeStyleElement(data, 3, i);
      } 
      
      else if (data[i].day === "thu") {
        bar4.style.height = data[i].height;
        if (data[i].day === daysOfWeek[currentDayOfWeek]) {
            bar4.classList.add("cyan");
        }

        beforeStyleElement(data, 4, i);
      } 
      
      else if (data[i].day === "fri") {
        bar5.style.height = data[i].height;
        if (data[i].day === daysOfWeek[currentDayOfWeek]) {
            bar5.classList.add("cyan");
        }

        beforeStyleElement(data, 5, i);
      } 
      
      else if (data[i].day === "sat") {
        bar6.style.height = data[i].height;
        if (data[i].day === daysOfWeek[currentDayOfWeek]) {
            bar6.classList.add("cyan");
        }

        beforeStyleElement(data, 6, i);
      } 
      
      else if (data[i].day === "sun") {
        bar7.style.height = data[i].height;
        if (data[i].day === daysOfWeek[currentDayOfWeek]) {
            bar7.classList.add("cyan");
        }
        beforeStyleElement(data, 7, i);
      }

    }

  });

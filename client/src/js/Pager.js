const Pager = {
  pages: [],
  paginate: function (days) {
    
    if (days.length > 0) {
      if(days.length % 9 === 0){
        
        let daysTemp = [...days];
     
        for (let i = 0; i < days.length / 9; i++) {
          for (let j = 0; j < daysTemp.length; j++) {
            if(j % 9 === 0 && j > 0)  {
              this.pages[i] = daysTemp.slice(0,9);
              daysTemp.splice(0,9);
              console.log("splice: ", daysTemp)
            }
          }
          
        }
      }
      if (days.length > 9) {
        let numPages = Math.floor(days.length / 9);
      } else {
        this.pages = [[days]];
      }
    }
    console.log("this.pages: " , this.pages);
  },
};

const d = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const e = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13,14,15,16,17,18];

Pager.paginate(e);

/*paginate: function (days) {
  if (days.length > 0) {
    if(days.length % 9 === 0){
      for (let i = 0; i < days.length / 9; i++) {
        for (let j = 0; j < array.length; j++) {
          
          
        }
        
      }
    }
    if (days.length > 9) {
      let numPages = Math.floor(days.length / 9);
    } else {
      this.pages = [[days]];
    }
  }
  console.log(this.pages);
},*/

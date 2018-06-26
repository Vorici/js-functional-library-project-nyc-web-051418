fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, iteratee) {
      if(collection instanceof Array === true){
        for (index = 0; index < collection.length; index++){
          iteratee(collection[index]);
        }
      } else {
        for (const key in collection){
          iteratee(collection[key]);
        }
      }
      return collection;
    },

    map: function(collection, iteratee)  {
      const newArray = [];
      if(collection instanceof Array === true){
        for (index = 0; index < collection.length; index++){
          newArray.push(iteratee(collection[index]));
        }
      } else {
        for (const key in collection){
          newArray.push(iteratee(collection[key]));
        }
      }
      return newArray;
    },

    reduce: function(collection, iteratee, accumulator) {
      if(collection instanceof Array === true){
        for (index = 0; index < collection.length; index++){
          accumulator = iteratee(accumulator, collection[index]);
        }
      } else {
        for (const key in collection){
          accumulator = iteratee(accumulator, collection[key]);
        }
      }
      return accumulator;
    },

    find: function(collection, predicate) {
      if(collection instanceof Array === true){
        for (index = 0; index < collection.length; index++){
         if (predicate(collection[index]) === true ){
          return collection[index];
         }
        }
      } else {
        for (const key in collection){
          if (predicate(collection[key]) === true ){
            return collection[key];
          }
        }
      }
    },

    filter: function(collection, predicate) {
      const newFindArray = [];
      if(collection instanceof Array === true){
        for (index = 0; index < collection.length; index++){
         if (predicate(collection[index]) === true ){
            newFindArray.push(collection[index]);
         }
        }
      } else {
        for (const key in collection){
          if (predicate(collection[key]) === true ){
             newFindArray.push(collection[key]);
          }
        }
      }
      return newFindArray;
    },

    size: function(collection, predicate) {
      let counter = 0;
      if(collection instanceof Array === true){
        for (index = 0; index < collection.length; index++){
            counter++;
        }
      } else {
        for (const key in collection){
          counter++
        }
      }
      return counter;
    },

    first: function(array, n) {

        if (typeof n === 'undefined'){
          return array.slice(0,1)[0];
        } else {
          return array.slice(0,n);
        }

    },

    last: function(array, n) {

        if (typeof n === 'undefined'){
          return array.slice(-1)[0];
        } else {
          return array.slice(-n);
        }

    },

    compact: function(array) {
      const newFindArray = [];
        for (index = 0; index < array.length; index++){
         if (array[index]){
            newFindArray.push(array[index]);
         }
        }
      return newFindArray;
    },

    sortBy: function(array, iteratee) {
      const newFindArray = [];

      const sorter = function(val1, val2){
          if (typeof array[0] === "number" ){
            return (val1 - val2);
        } else {
           return val1.localeCompare(val2)
         }
      }
        for (index = 0; index < array.length; index++){

          newFindArray.push(iteratee(array[index]));

        }
      return newFindArray.sort(sorter);
    },



  }
})()

fi.libraryMethod()

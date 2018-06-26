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

    first: function(array, [n]) {
      let index = [n][0];
      return array.slice(0, index);

    },

    last: function(collection, predicate) {
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

  }
})()

fi.libraryMethod()

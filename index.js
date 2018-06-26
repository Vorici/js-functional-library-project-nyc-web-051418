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

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()

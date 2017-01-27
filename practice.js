//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //"this" is a placeholder. It's for the properties of a constructor function and we will be passing in values to those properties.

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //1. Did someone tell me explicitly what my EC was? If so, that is my contact.
      //2. Do I have an implicit context? Was I invoked from the left of the dot? If so, that will be my contact.
      // 3. Default is window
      //4. We will learn the fourth one later

      //Official rules: explicit, implicit, window/default, and new/constructor


  // 3) What is the difference between call and apply?

      //Call takes the parameters explicityly in the order that they were listed. "bind() will glue together an object as a parameter to a function in which the function will lateruse to find a certain property."
      //Apply takes the parameters as arrays. "apply() accepts an array that holsters the parameters for the function."

  // 4) What does .bind do?

      //Bind is a function that exists on objects that are functions. It's purpose is to call the original function.
      // "bind() will glue together an object as a parameter to a function in which the function will lateruse to find a certain property."


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    var user = {
      username:"string",
      email:"email@gmail.com",
      getUsername: function() {
        return this.username;
      }
    }

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.
user.getUsername();

//Next Problem


// Write the function definitions which will make the following function invocations function properly.

  function Car(make, model, year) {
    //this = {}
    this.make = make;
    this.model = model;
    this.year = year;

    this.moveCar = function() {
      return this.move += 10;
    }
  }

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to add a move property and write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
  //Code Here


//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

var userName = getMyUsername(); //Fix this

//Above you're given an object, and  a function. What will the getUsername function return?
//Note(no tests)
  //Answer Here

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //Answer Here

//Fix the getMyUsername invocation so that userName will be equal to 'iliketurtles'.

// Single Line Comment; Ctrl + /
/* 
Multi-line comment:
Shift + Alt + a
*/

// * Variables

/*  

Variable are named containers for storing data values.

We name the variables so that we can refer to them and the values they hold at a later time.  Consider that we are naming these variables to help us be directed to a value type.

We can create a variable through 3 different keywords:
    1. var
    2. let
    3. const
    4. (none/no keyword)
*/

let a = 2;

//  (1) (2) (3)  (4)
    let b    =    1;

    /* 
    1. Use JS keyword to denote the creation of a variable.
    2. The name of the variable, what the developer refers to get the stored value. Variable names should be to the point/pertain to the data.
        - SHould be camelCase, lowercase first letter, uppercase each next starting letter.
    3. Assignment operator: equal sign, = 
    4. The initial variable value, its starting data value.
     */

    // * Variable declatation Vs Initialization

    // Declaratiojn: Declaring the variable but not assigning it.
    let x;
    console.log("Declaration of x: ", x); //Declaration of x:  undefined

    //let apple;

    // Initialization: variable is given/set a value.
    let y = 4;

    let life = 42;

    // Reassign a variable value, reassign declared or initialized variables. (not const keyword variables)

    x = 20;
    console.log("Initialization 1: ", x);

    x = 100;
    console.log("Initialization 2: ", x);

    let apple = 12;

    // Assigning to other variables/ create variables from variables!

    let firstName = "Paul"; //string datatype
    let lastName = "Massey";

    let fullName = firstName + " " + lastName;
    let fullN = firstName + lastName;

    /*
    * Console
        -A place to see text output / code results. 
        - There is a console object attached to the browser (web).
        - We have a console in VSC to view results/what is logged.

        .log(), this is the log method of the console, log will print whatever it is passed
     */

    console.log(fullName);

    console.log(2+2);

    console.log(x);

    //use multiple items/variables in a console.log()

    let today = "great!"
    const javascript = "So much fun!"

    console.log(today, javascript);

    today = "super!";
   // javascript = "meh.";

    console.log(today, javascript);

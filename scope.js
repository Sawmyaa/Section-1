//js has scope but bydefault its global

 //definition keywords: var, let, const
 //js is an interpreted language.
 //let and const works only in block code i.e local variable.
age = 40;
 if(age >= 18){
    console.log('you are eligible for DL');
    myvar = 'nice';
    let x = 'block scope';
    // console.log(x);
    const pi=3.14;
    pi = 43.21;

 }else{
    console.log('you are  not eligible for DL');
 }
 console.log(myvar);
//  console.log(x);


// Union Types

// VSCode uses TypeScript to infer the types here! JS won't do it by default

// For when one type just ain't enough...

const printMyID = (id: string | number) => console.log(`Your ID is: ${id}`);

printMyID(12523);
printMyID("331b");
printMyID({ id: 3300 });

// What will tbe the print out of the above?

// =================
// TASK
// For some reason, we want out ID to be returned in UPPERCASE, but Typescript is reminding us we can't use .toUpperCase method is the type is a number...
// Fix the below! (i.e. use JS's "typeof" will help)

const printMyIDToUppercase = (id: string | number) => {
  return id.toUpperCase();
};

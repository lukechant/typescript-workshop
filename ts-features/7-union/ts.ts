export {};

// Union Types

// VSCode uses TypeScript to infer the types here! JS won't do it by default

// For when one type just ain't enough...

const printMyID = (id: string | number) => console.log(`Your ID is: ${id}`);

printMyID(12523);
printMyID("331B");
printMyID({ id: 3300 });

// What will tbe the print out of the above?

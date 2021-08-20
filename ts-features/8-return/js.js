// Return Types

// VSCode uses TypeScript to infer the types here! JS won't do it by default

const getProfileOfKiller = (name, age, job) => {
  const profileOfKiller = {
    name,
    age,
    job,
  };

  console.log(`The name of the killer is: ${profileOfKiller.name}`);
};

const profileOfKiller = getProfileOfKiller("Brian", 44, "Killer of things");

console.log({ profileOfKiller });

// Before running this js file to see the output, what do you think the console log of "profileOfKiller" will give us?

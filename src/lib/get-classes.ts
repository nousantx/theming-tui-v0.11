export function cssClass(input: { [key: string]: { [key: string]: string } }) {
  const output: {
    [key: string]: {
      [key: string]: string;
    };
  } = {};

  Object.keys(input).forEach((className) => {
    // Iterate over each property-value pair in the class
    Object.entries(input[className]).forEach(([property, value]) => {
      // If the property doesn't exist in the output, initialize it as an empty object
      if (!output[property]) {
        output[property] = {}; // Initialize as an empty object
      }

      // Add the class name and its value to the property in the output
      output[property][className] = value;
    });
  });

  return output;
}

const existingUser = {
    name: "Alice",
    email: "alice@example.com",
    settings: { theme: "dark", language: "en" },
  };
  
  // Simulated API response (settings field is missing)
  const apiResponse = {
    name: "Bob",
    email: "bob@example.com",
    settings:  { theme: "light", language: "en" },
    // settings:  null,
  };
  
  const {settings, ...restApiResponse}=apiResponse;
  // Merging response safely
  const updatedUser = {
    ...existingUser,
    ...restApiResponse, // Spread only existing keys
    ...(settings && { settings: { ...existingUser.settings, ...apiResponse.settings } }),
  };
  
  console.log(updatedUser);
  
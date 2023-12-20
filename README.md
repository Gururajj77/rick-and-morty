# Rick and Morty app by J. Gururaj

This app has been built using React, Typescript and vite build-pack.
URL: https://rick-and-morty-two-kohl.vercel.app/

Libraries used for the development of the application
-> Tanstack Query - mainly used for data fetching, caching and for the implementation of infinite scrolling in all three tabs.
-> Zustand - used for sharing data from the character page to the profile page. Previously used the api to get single character but optimized it such that we will have lesser load on the server. Zustand helps with managing the state for that here.
-> jest - used for test case setup. Still trying to complete test cases for the components. 


Folder structure:

-> components - holds the main view components and routes.
-> hooks - these store useDebounce and useInfiniteScroll custom hooks used in 3 routes of the applications.
-> jest - holds jest css config for base setup.
-> store - holds the zustand store for character profile data.
-> tests - holds the test case files.
-> components > (component-name) > utils -  this will hold the utility functions and reusable components for the parent component ( API function, types, CharacterCard, etc.,)
-> components > utils - this holds the navigation to add more routes if needed in the future, and the error and loading component.


The hosted url on vercel : https://rick-and-morty-two-kohl.vercel.app/

Link to the application sample video: https://www.loom.com/share/dfd0226c3eb843a299ce116e5338f200?sid=ce2a7a08-9d8c-4c59-bb08-7c55884fc04e.

Thank you,
Gururaj.

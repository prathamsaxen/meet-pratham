#!/usr/bin/env node
// Function to log your details in the terminal
function logDetails() {
     const message = "Hey folks! I'm Pratham, a frontend developer and tech enthusiast!";
     const githubLink = "https://github.com/prathamsaxen";
     const linkedinLink = "https://www.linkedin.com/in/prathamsaxena/";
     const portfolioLink = "https://prathamsaxena.vercel.app/";
     const twitterLink = "https://twitter.com/prathamsaxena";
 
     const aiModal = "https://npmjs.com/package/@prathamsaxena/ai-modal-container";
     const tripSync = "https://tripsync.app/";
     const truxtAI = "https://truxt.ai/";
     const userMgmt = "https://github.com/prathamsaxena/user-management";
     const expenseMgr = "https://github.com/prathamsaxena/expense-manager";
 
     // Create a colorful box using ANSI escape codes
     const colorfulBox = `\x1b[38;5;105m+----------------------------\u001b[37mMeet Pratham👋🏻\u001b[38;5;105m--------------------------------+\x1b[0m
 \x1b[38;5;51m      ${message}    \x1b[0m
 \x1b[38;5;105m-------------------------------------------------------------------------------------\x1b[0m
      📍 Github: \x1b[4m${githubLink}\x1b[0m                                                                        
      📍 LinkedIn: \x1b[4m${linkedinLink}\x1b[0m                            
      📍 Portfolio:  \x1b[4m${portfolioLink}\x1b[0m                                                                                   
      📍 Twitter:  \x1b[4m${twitterLink}\x1b[0m                               
 \x1b[38;5;105m-------------------------------------------------------------------------------------\x1b[38;5;34m
                           Stuff I know and do 👀                                                    
 \x1b[38;5;105m-------------------------------------------------------------------------------------\x1b[0m
      ✅  React.js & MERN Stack     ✅  UI/UX Design  
      ✅  API Development           ✅  Performance Optimization             
      ✅  Web Accessibility         ✅  Mentoring & Teaching                                                                              
 \x1b[38;5;105m+----------------------------------------------------------------------------------+\x1b[0m
                           Check out some cool projects I've built 🚀                                                   
 \x1b[38;5;105m-------------------------------------------------------------------------------------\x1b[0m
      ⚡  \u001b[33mTruxt.AI \u001b[37m(AI-powered platform for secure data queries): \u001b[37m\x1b[4m${truxtAI}\x1b[0m 
      ⚡  \u001b[33mTripSync \u001b[37m(A personal travel assistant): \u001b[37m\x1b[4m${tripSync}\x1b[0m
      ⚡  \u001b[33mAI Modal Container \u001b[37m(A reusable React modal with AI features): \u001b[37m\x1b[4m${aiModal}\x1b[0m
      ⚡  \u001b[33mUser Management System \u001b[37m(Full-featured user management tool): \u001b[37m\x1b[4m${userMgmt}\x1b[0m             
      ⚡  \u001b[33mExpense Manager \u001b[37m(A simple expense tracking system): \u001b[37m\x1b[4m${expenseMgr}\x1b[0m                                                                             
 \x1b[38;5;105m+----------------------------------------------------------------------------------+\x1b[0m
     
 `;
 
     // Log the colorful box in the terminal
     console.log(colorfulBox);
 }
 
 // Call the function to log your details
 logDetails();
 
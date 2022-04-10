export const createPromise = (position, delay) => {
  const shouldResolve = Math.random() > 0.3;
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      }
      else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  }); 
};
// higher order function which takes another function as a parameters
const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

// another way using try catch block
/* 
 const asyncHandler2 = (fc) => {
  async (req, res, next) => {
    try {
      await fc(req, res, next);
    } catch (error) {
      res.status(error.code || 500).json({
        success: false,
        message: err.message,
      });
    }
  };
};
*/

export { asyncHandler };

# Image Server

## Summary

This is an express.js server that I want to use for the "Photography" page of my personal application so that I do not have to maintain multiple copies of the same photo in different sizes.

## Tech

I first tried the modules "Wrend" and "express-sharp" (both are wrappers to the "sharp" module) but I found problems with both. In the end I just used the base module "sharp" and wrote my own.

- https://expressjs.com/
- https://sharp.pixelplumbing.com/

## Future Enhancements.

- Add extra error handling
- Add CORS features
- Watermarking the image
- Allow the images to be hosted by a CDN
- Add authentication
- Add a route that returns an index of the available images (json)
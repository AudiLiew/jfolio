Jain's Folio

# Dev Process

1 Create Branch
2 run *npm start*
3 Once ok, merge to master
4 run *npm run build* (compresses html and webpack properly)

# Image Compression

1 Copy source images to __src/assets/img_uncompressed
2 In __src, run node compressSrcImg.js
3 Run build to copy over

# To Do

## Features
 - [x] Compress src images
 - [ ] https
 - [ ] Lazy load images
 - [ ] Lazy play videos
 - [ ] Mix img/vid stack shortcode

## Fixes
 - [x] Clean up 11ty config; separate shortcodes
# Profile Image Placement Instructions

## Where to Place Your Image

1. **Save your profile picture** with the filename: `burhan-aslam.jpg`
2. **Place it in this folder**: `public/images/profile/burhan-aslam.jpg`

## Image Requirements

- **Recommended size**: 800x800px or larger (square format works best)
- **Format**: JPG or PNG
- **Quality**: High quality (the image will be displayed at a large size)
- **File name**: `burhan-aslam.jpg` (or update the path in Hero.jsx if you use a different name)

## Current Image Path

The Hero section is configured to load the image from:
```
/public/images/profile/burhan-aslam.jpg
```

If your image has a different filename, you can either:
1. Rename your image to `burhan-aslam.jpg`, OR
2. Update the image path in `src/components/Hero/Hero.jsx` (line ~95)

## Image Display

The profile image will be displayed as:
- A large circular image (up to 28rem/448px on desktop)
- Responsive sizing for mobile devices
- With a decorative border and shadow effects
- Positioned prominently in the Hero section

## Fallback

If the image is not found, a placeholder will be shown. Make sure to place your image in the correct location to see your photo!


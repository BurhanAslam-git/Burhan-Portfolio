# How to Add Your Profile Image

## Quick Steps

1. **Find your profile picture** (the one you want to use)
2. **Rename it to**: `burhan-aslam.jpg`
3. **Copy it to this exact location**: 
   ```
   public/images/profile/burhan-aslam.jpg
   ```

## Detailed Instructions

### Step 1: Prepare Your Image
- **Recommended size**: 800x800px or larger (square format)
- **Format**: JPG or PNG
- **Quality**: High quality (it will be displayed large)

### Step 2: Save the Image
1. Open your file explorer
2. Navigate to: `C:\Users\toshiba\Desktop\PortFolio\public\images\profile\`
3. Copy your image file there
4. **Rename it to**: `burhan-aslam.jpg` (exactly this name, case-sensitive)

### Step 3: Verify
- The file should be at: `public/images/profile/burhan-aslam.jpg`
- The file name must be exactly: `burhan-aslam.jpg`

## Current Behavior

- **If image exists**: Your photo will display beautifully in a circular frame
- **If image missing**: A gradient placeholder with "BA" initials will show

## Troubleshooting

### Image not showing?
1. Check the file name is exactly: `burhan-aslam.jpg` (not `Burhan-Aslam.jpg` or `burhan_aslam.jpg`)
2. Check the file is in: `public/images/profile/` folder
3. Restart your dev server after adding the image
4. Check browser console for any error messages

### Still not working?
- Make sure the file extension is `.jpg` (not `.jpeg` or `.JPG`)
- Try clearing browser cache (Ctrl + Shift + R)
- Restart the Vite dev server

## File Structure Should Look Like:
```
PortFolio/
  public/
    images/
      profile/
        burhan-aslam.jpg  ← Your image here
```


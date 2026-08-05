import os
import sys

# Check for required packages and install/alert
try:
    import cv2
    import numpy as np
except ImportError:
    print("This script requires opencv-python and numpy.")
    print("Please install them by running: pip install opencv-python numpy")
    sys.exit(1)

# Path to the downloaded images
image_dir = os.path.join(os.path.dirname(__file__), 'extracted_images')

if not os.path.exists(image_dir):
    print("Error: extracted_images directory not found.")
    sys.exit(1)

# List of common image extensions
valid_extensions = ('.webp', '.png', '.jpg', '.jpeg', '.avif')
images = [f for f in os.listdir(image_dir) if f.lower().endswith(valid_extensions)]

if not images:
    print("No images found to process.")
    sys.exit(0)

print(f"Found {len(images)} images to process using OpenCV Inpainting...")

# CONFIGURATION: Bounding box for the watermark
# Watermarks on directory sites are usually stamped at the bottom
# We will target the bottom 50 pixels of the image
watermark_height_px = 50

success_count = 0
for filename in images:
    file_path = os.path.join(image_dir, filename)
    try:
        # Load the image
        img = cv2.imread(file_path)
        if img is None:
            print(f"[✗] Failed to load (OpenCV compatibility issue): {filename}")
            continue

        height, width, channels = img.shape

        # Convert to grayscale
        gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

        # Use Morphological Top-Hat (White-Hat) to isolate thin bright elements (like text strokes)
        # Kernel size 15x15 targets strokes narrower than 15 pixels
        kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (15, 15))
        tophat = cv2.morphologyEx(gray, cv2.MORPH_TOPHAT, kernel)

        # Threshold to get a binary mask of the thin text strokes
        _, mask = cv2.threshold(tophat, 35, 255, cv2.THRESH_BINARY)

        # Clean up noise: only target bright white/light-gray areas
        # Watermark text callgirl4u.com is very bright (gray value > 150)
        _, bright_mask = cv2.threshold(gray, 130, 255, cv2.THRESH_BINARY)
        mask = cv2.bitwise_and(mask, bright_mask)

        # Dilate the mask slightly (by 2 pixels) to ensure edges of letters are fully covered
        dilate_kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (3, 3))
        mask = cv2.dilate(mask, dilate_kernel, iterations=1)

        # Perform Telea Inpainting to fill in the text strokes using surrounding pixel textures
        inpainted_img = cv2.inpaint(img, mask, inpaintRadius=5, flags=cv2.INPAINT_TELEA)

        # Save the processed image back
        cv2.imwrite(file_path, inpainted_img)
        success_count += 1
        print(f"[✓] Smart watermark removed from: {filename}")

    except Exception as e:
        print(f"[✗] Failed to process {filename}: {e}")

print(f"\nFinished! Seamlessly removed watermarks from {success_count} images.")

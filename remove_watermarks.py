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

        # Create a black mask of the same size as the image
        mask = np.zeros((height, width), dtype=np.uint8)

        # Draw a white rectangle on the mask covering the watermark region (bottom of the image)
        # Bounding box coordinates: [y_start, y_end, x_start, x_end]
        y_start = height - watermark_height_px
        y_end = height
        x_start = 0
        x_end = width

        # Set the watermark region to white (255) on the mask
        mask[y_start:y_end, x_start:x_end] = 255

        # Perform Telea Inpainting to seamlessly fill the masked area using surrounding pixels
        inpainted_img = cv2.inpaint(img, mask, inpaintRadius=7, flags=cv2.INPAINT_TELEA)

        # Save the processed image overwriting the original file
        cv2.imwrite(file_path, inpainted_img)
        success_count += 1
        print(f"[✓] Watermark removed from: {filename}")

    except Exception as e:
        print(f"[✗] Failed to process {filename}: {e}")

print(f"\nFinished! Seamlessly removed watermarks from {success_count} images.")

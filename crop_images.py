import os
from PIL import Image

# Path to the downloaded images
image_dir = os.path.join(os.path.dirname(__file__), 'extracted_images')

if not os.path.exists(image_dir):
    print("Error: extracted_images directory not found.")
    exit(1)

# List of common image extensions
valid_extensions = ('.webp', '.png', '.jpg', '.jpeg', '.avif')
images = [f for f in os.listdir(image_dir) if f.lower().endswith(valid_extensions)]

if not images:
    print("No images found to process.")
    exit(0)

print(f"Found {len(images)} images. Starting cropping process...")

# Configurable: crop 10% off the bottom of the image
crop_percentage = 0.10 

success_count = 0
for filename in images:
    file_path = os.path.join(image_dir, filename)
    try:
        with Image.open(file_path) as img:
            width, height = img.size
            
            # Define cropping box (left, upper, right, lower)
            # This crops off the bottom portion
            new_height = int(height * (1.0 - crop_percentage))
            
            if new_height > 100:  # Prevent cropping small icons
                cropped_img = img.crop((0, 0, width, new_height))
                cropped_img.save(file_path)
                success_count += 1
                print(f"[✓] Cropped bottom of: {filename}")
            else:
                print(f"[i] Skipped (too small): {filename}")
    except Exception as e:
        print(f"[✗] Failed to process {filename}: {e}")

print(f"\nCompleted! Successfully cropped watermarks off {success_count} images.")

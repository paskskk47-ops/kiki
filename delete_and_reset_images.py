import os
import re
import shutil
import random

# 1. Paths
base_dir = os.path.dirname(__file__)
image_dir = os.path.join(base_dir, 'extracted_images')
data_file = os.path.join(base_dir, 'data.js')

# 2. Delete all local images
if os.path.exists(image_dir):
    print(f"Cleaning all images from: {image_dir}...")
    for filename in os.listdir(image_dir):
        file_path = os.path.join(image_dir, filename)
        try:
            if os.path.isfile(file_path) or os.path.islink(file_path):
                os.unlink(file_path)
            elif os.path.isdir(file_path):
                shutil.rmtree(file_path)
        except Exception as e:
            print(f"Failed to delete {file_path}: {e}")
    print("Image directory cleared.")
else:
    print("Image directory does not exist. Skipping deletion.")

# 3. Premium royalty-free watermark-free model images from Unsplash
unsplash_pool = [
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=500&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1542206395-9feb3edaa68d?w=500&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=500&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1496440737103-cd596325d314?w=500&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?w=500&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?w=500&auto=format&fit=crop&q=80"
]

# 4. Replace image references in data.js
if os.path.exists(data_file):
    print(f"Replacing image references in: {data_file}...")
    with open(data_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Pattern matches "extracted_images/..." or 'extracted_images/...'
    pattern = r'["\']extracted_images/[^"\']+["\']'

    def replacer(match):
        # Select a random premium URL from the pool
        selected_url = random.choice(unsplash_pool)
        return f'"{selected_url}"'

    new_content = re.sub(pattern, replacer, content)

    with open(data_file, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("data.js successfully updated.")
else:
    print("data.js not found.")

print("\nAll images deleted and mock data reset with clean online placeholders!")

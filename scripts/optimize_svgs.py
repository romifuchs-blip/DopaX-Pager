import base64
import re
import os
import shutil
from PIL import Image
import io

# Setup paths
src_dir = '../public/backgrounds'
backup_dir = '../public/backgrounds_backup'

# Ensure directories exist
if not os.path.exists(backup_dir):
    os.makedirs(backup_dir)
    print(f"Created backup directory: {backup_dir}")

print("Auditing public/backgrounds/ files...")
svg_files = [f for f in os.listdir(src_dir) if f.endswith('.svg')]

# We'll support both PNG and JPEG patterns
patterns = [
    r'(xlink:href|href)="data:image/png;base64,([^"]+)"',
    r'(xlink:href|href)="data:image/jpeg;base64,([^"]+)"',
    r'(xlink:href|href)="data:image/jpg;base64,([^"]+)"'
]

for filename in svg_files:
    filepath = os.path.join(src_dir, filename)
    backuppath = os.path.join(backup_dir, filename)
    
    file_size_mb = os.path.getsize(filepath) / (1024 * 1024)
    
    # We only optimize SVGs larger than 1MB
    if file_size_mb > 1.0:
        print(f"\nProcessing {filename} ({file_size_mb:.2f} MB)...")
        
        # 1. Create a backup if not already backed up
        if not os.path.exists(backuppath):
            shutil.copy2(filepath, backuppath)
            print(f"-> Created clean backup at {backuppath}")
        else:
            # Always read from backup to ensure we don't double-compress or lose quality!
            print(f"-> Reading fresh from backup {backuppath}")
            shutil.copy2(backuppath, filepath)
            
        # 2. Read SVG content
        with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
            
        # 3. Search for image base64 data
        matched = False
        for pattern in patterns:
            match = re.search(pattern, content)
            if match:
                prefix = match.group(1) # xlink:href or href
                base64_str = match.group(2)
                
                # Decode image bytes
                img_bytes = base64.b64decode(base64_str)
                img = Image.open(io.BytesIO(img_bytes))
                orig_w, orig_h = img.size
                print(f"-> Embedded Image Found: {orig_w}x{orig_h} px")
                
                # 4. Smart resize: scale down to max 1600px width/height to save massive space
                max_bound = 1600
                if orig_w > max_bound or orig_h > max_bound:
                    if orig_w > orig_h:
                        new_w = max_bound
                        new_h = int((orig_h * max_bound) / orig_w)
                    else:
                        new_h = max_bound
                        new_w = int((orig_w * max_bound) / orig_h)
                    
                    img = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
                    print(f"-> Resized to: {new_w}x{new_h} px (LANCZOS)")
                
                # 5. Convert to WebP in memory with quality=80 (visually lossless)
                webp_buffer = io.BytesIO()
                img.save(webp_buffer, format="WEBP", quality=80)
                webp_bytes = webp_buffer.getvalue()
                
                # 6. Re-encode to base64
                webp_base64_str = base64.b64encode(webp_bytes).decode('utf-8')
                
                # 7. Replace in content and change mimetype to image/webp
                old_str = match.group(0)
                new_str = f'{prefix}="data:image/webp;base64,{webp_base64_str}"'
                
                updated_content = content.replace(old_str, new_str)
                
                # 8. Write back to file
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(updated_content)
                    
                new_size_mb = os.path.getsize(filepath) / (1024 * 1024)
                reduction = (1 - (new_size_mb / file_size_mb)) * 100
                print(f"-> Optimized: {new_size_mb:.2f} MB ({reduction:.1f}% reduction!)")
                matched = True
                break
                
        if not matched:
            print("-> No base64 image pattern found in this file.")
    else:
        print(f"Skipping {filename} ({file_size_mb:.2f} MB) - already optimized or small.")

print("\nAll SVG background optimizations completed successfully!")

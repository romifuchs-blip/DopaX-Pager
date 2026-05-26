import base64
import re
import os
from PIL import Image
import io

for i in range(1, 6):
    with open(f'../src/assets/images/partner-logo-{i}.svg', 'r') as f:
        content = f.read()
    match = re.search(r'data:image/png;base64,([^"]+)', content)
    if match:
        png_data = base64.b64decode(match.group(1))
        img = Image.open(io.BytesIO(png_data))
        img = img.convert('RGB')
        pixels = img.getcolors(img.width * img.height)
        sorted_pixels = sorted(pixels, key=lambda t: t[0], reverse=True)
        colors = []
        for count, color in sorted_pixels:
            r, g, b = color
            if count > 20 and not (abs(r-g)<15 and abs(g-b)<15):
                colors.append(color)
            if len(colors) >= 5:
                break
        print(f"partner-logo-{i}: {colors}")

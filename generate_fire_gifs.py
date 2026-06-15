from PIL import Image, ImageDraw
import os

out_dir = r'c:\Users\mbone\Documents\GitHub\Nora-s-Flora-s2\www\Asset'
os.makedirs(out_dir, exist_ok=True)

def build_frame(width, height, frame_idx):
    img = Image.new('RGBA', (width, height), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    for y in range(height):
        for x in range(width):
            if y < 8:
                continue
            flame_height = 38 + (frame_idx % 4) * 2
            if y > height - flame_height:
                continue
            dx = (x - width / 2) / 20.0
            if abs(dx) < 4.5 + frame_idx * 0.2:
                noise = ((x * 7 + frame_idx * 11 + y * 3) % 19) / 19.0
                if noise > 0.25:
                    r = int(255 * (0.7 + 0.3 * (1 - abs(y - 24) / 24)))
                    g = int(180 * (0.5 + 0.5 * (1 - abs(y - 24) / 24)))
                    b = int(20 + 60 * noise)
                    draw.point((x, y), fill=(r, g, b, 220))
    return img

for name in ['fire1.gif', 'fire2.gif', 'fire3.gif']:
    frames = []
    for frame_idx in range(8):
        frames.append(build_frame(120, 60, frame_idx))
    frames[0].save(os.path.join(out_dir, name), save_all=True, append_images=frames[1:], duration=90, loop=0)

print('Generated fire GIFs')

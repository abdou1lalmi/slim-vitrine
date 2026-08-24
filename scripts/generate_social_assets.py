from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
PUBLIC.mkdir(parents=True, exist_ok=True)

GREEN = "#10362a"
CREAM = "#fcf8ef"
CITRON = "#ffd84d"
INK = "#14382b"
RED = "#d8504f"


def font(candidates, size):
    for path in candidates:
        if Path(path).exists():
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()


display = font([
    "/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf",
    "/usr/share/fonts/truetype/liberation2/LiberationSerif-Bold.ttf",
], 104)
body = font([
    "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
    "/usr/share/fonts/truetype/liberation2/LiberationSans-Regular.ttf",
], 24)
small = font([
    "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
    "/usr/share/fonts/truetype/liberation2/LiberationSans-Bold.ttf",
], 18)

# Social share artwork: calm green field, paper card, citrus disc, and a simple bottle silhouette.
image = Image.new("RGB", (1200, 630), GREEN)
draw = ImageDraw.Draw(image)
draw.ellipse((770, -220, 1370, 380), fill=CITRON)
draw.rounded_rectangle((54, 52, 1146, 578), radius=28, fill=CREAM)
draw.text((106, 103), "SLIM", font=display, fill=GREEN)
draw.text((112, 235), "Le gazouz algérien", font=body, fill=INK)
draw.text((112, 272), "qui prime depuis 1950.", font=body, fill=INK)
draw.text((112, 345), "SIX SAVEURS  ·  UNE HISTOIRE  ·  ALGÉRIE", font=small, fill=GREEN)

# Bottle illustration.
draw.rounded_rectangle((826, 177, 990, 506), radius=52, fill=CITRON, outline=GREEN, width=6)
draw.rounded_rectangle((867, 122, 949, 210), radius=17, fill=CITRON, outline=GREEN, width=6)
draw.rectangle((870, 104, 946, 138), fill=GREEN)
draw.rounded_rectangle((838, 280, 978, 414), radius=14, fill=CREAM, outline=GREEN, width=4)
draw.text((855, 306), "SLIM", font=font([
    "/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf",
], 32), fill=GREEN)
draw.text((864, 355), "CITRON", font=small, fill=RED)

image.save(PUBLIC / "og-cover.png", optimize=True)

icon = Image.new("RGBA", (32, 32), GREEN)
idraw = ImageDraw.Draw(icon)
idraw.rounded_rectangle((4, 4, 28, 28), radius=7, fill=CITRON)
idraw.text((7, 6), "S", font=font([
    "/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf",
], 18), fill=GREEN)
icon.save(PUBLIC / "favicon-32.png", optimize=True)

Add-Type -AssemblyName System.Drawing

function Resize-Image($srcPath, $destPath, $w, $h) {
    $orig = [System.Drawing.Image]::FromFile($srcPath)
    $bmp = New-Object System.Drawing.Bitmap($w, $h)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.DrawImage($orig, 0, 0, $w, $h)
    $orig.Dispose()
    $bmp.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
    $g.Dispose()
}

if (!(Test-Path "public")) { New-Item -ItemType Directory -Path "public" }

Resize-Image "src\assets\D_logo.png" "src\assets\D_logo_opt.png" 180 155
Resize-Image "src\assets\D_logo.png" "public\favicon.png" 64 64
Resize-Image "src\assets\D_logo.png" "public\apple-touch-icon.png" 180 180

# Create an Open Graph Social Preview image in public/og-image.jpg (1200x630)
$ogBmp = New-Object System.Drawing.Bitmap(1200, 630)
$ogG = [System.Drawing.Graphics]::FromImage($ogBmp)
$ogG.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$ogG.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

# Draw dark gradient background
$rect = New-Object System.Drawing.Rectangle(0, 0, 1200, 630)
$brush = New-Object System.Drawing.Drawing2D.LinearGradientBrush($rect, [System.Drawing.Color]::FromArgb(8, 13, 27), [System.Drawing.Color]::FromArgb(17, 26, 45), 45.0)
$ogG.FillRectangle($brush, $rect)

# Draw cyan accent glow border
$cyanPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(103, 232, 249), 4)
$ogG.DrawRectangle($cyanPen, 20, 20, 1160, 590)

# Draw profile image if available
if (Test-Path "src\images\optimized\divya profile.jpg") {
    $profImg = [System.Drawing.Image]::FromFile("src\images\optimized\divya profile.jpg")
    $ogG.DrawImage($profImg, 820, 140, 320, 320)
    $profImg.Dispose()
}

# Draw text
$titleFont = New-Object System.Drawing.Font("Arial", 46, [System.Drawing.FontStyle]::Bold)
$subFont = New-Object System.Drawing.Font("Arial", 26, [System.Drawing.FontStyle]::Bold)
$bodyFont = New-Object System.Drawing.Font("Arial", 20, [System.Drawing.FontStyle]::Regular)
$whiteBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(245, 247, 255))
$cyanBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(103, 232, 249))
$grayBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(170, 181, 201))

$ogG.DrawString("Divya Koshti", $titleFont, $whiteBrush, 80, 150)
$ogG.DrawString("React & Frontend Developer in Ahmedabad", $subFont, $cyanBrush, 80, 240)
$ogG.DrawString("MERN Stack | JavaScript | Tailwind CSS | REST APIs", $bodyFont, $grayBrush, 80, 310)
$ogG.DrawString("Explore projects, technical skills & experience", $bodyFont, $whiteBrush, 80, 420)
$ogG.DrawString("divya-koshti.netlify.app", $bodyFont, $cyanBrush, 80, 480)

$ogBmp.Save("public\og-image.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)

# Clean up
$brush.Dispose()
$cyanPen.Dispose()
$titleFont.Dispose()
$subFont.Dispose()
$bodyFont.Dispose()
$whiteBrush.Dispose()
$cyanBrush.Dispose()
$grayBrush.Dispose()
$ogBmp.Dispose()
$ogG.Dispose()

Get-Item "src\assets\D_logo_opt.png", "public\favicon.png", "public\apple-touch-icon.png", "public\og-image.jpg" | Select-Object Name, Length

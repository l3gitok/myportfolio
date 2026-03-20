if (Test-Path .env) {
    Write-Host "⚠️ .env already exists. Skipping copy." -ForegroundColor Yellow
} else {
    Copy-Item .env.example .env
    Write-Host "✅ Created .env from .env.example" -ForegroundColor Green
}

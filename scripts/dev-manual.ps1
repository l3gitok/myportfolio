Write-Host " Installing Frontend Dependencies..." -ForegroundColor Cyan
cd apps/frontend
npm install
Write-Host " Installing Backend Dependencies..." -ForegroundColor Cyan
cd ../backend
npm install
Write-Host " Starting Backend (NestJS)..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "npm run start:dev" -WorkingDirectory (Get-Item .).FullName
Write-Host " Starting Frontend (Next.js)..." -ForegroundColor Green
cd ../frontend
npm run dev

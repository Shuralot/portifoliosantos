param (
    [string]$Username = "shuralot"
)

Write-Host "==============================================" -ForegroundColor Purple
Write-Host " Next.js Portfolio Docker Build & Push Helper" -ForegroundColor Purple
Write-Host "==============================================" -ForegroundColor Purple

# 1. Check if Docker Daemon is running
Write-Host "Verificando se o serviço do Docker está rodando..." -ForegroundColor Yellow
$maxRetries = 12
$retryCount = 0
$dockerOnline = $false

while (-not $dockerOnline -and $retryCount -lt $maxRetries) {
    docker info > $null 2>&1
    if ($LASTEXITCODE -eq 0) {
        $dockerOnline = $true
        Write-Host "[OK] Docker está online e pronto!" -ForegroundColor Green
    } else {
        $retryCount++
        Write-Host "Docker ainda está iniciando (tentativa $retryCount de $maxRetries). Aguardando 10 segundos..." -ForegroundColor Cyan
        Start-Sleep -Seconds 10
    }
}

if (-not $dockerOnline) {
    Write-Error "O Docker Daemon não iniciou a tempo. Certifique-se de que o Docker Desktop esteja aberto e rodando."
    exit 1
}

# 2. Confirm username
Write-Host ""
Write-Host "Seu nome de usuário do Docker Hub é: '$Username'" -ForegroundColor Yellow
$inputUser = Read-Host "Pressione ENTER para confirmar ou digite outro nome de usuário"
if ($inputUser -ne "") {
    $Username = $inputUser
}

$imageName = "$Username/portifoliosantos:latest"

# 3. Build the Image
Write-Host ""
Write-Host "----------------------------------------------" -ForegroundColor Purple
Write-Host "Construindo imagem otimizada: $imageName" -ForegroundColor Purple
Write-Host "----------------------------------------------" -ForegroundColor Purple
docker build -t $imageName .

if ($LASTEXITCODE -ne 0) {
    Write-Error "Falha na compilação da imagem Docker."
    exit 1
}
Write-Host "[OK] Imagem compilada com sucesso!" -ForegroundColor Green

# 4. Push to Docker Hub
Write-Host ""
Write-Host "----------------------------------------------" -ForegroundColor Purple
Write-Host "Enviando imagem para o Docker Hub: $imageName" -ForegroundColor Purple
Write-Host "----------------------------------------------" -ForegroundColor Purple
Write-Host "Nota: Certifique-se de ter rodado 'docker login' previamente se receber erro de autenticação." -ForegroundColor Yellow

docker push $imageName

if ($LASTEXITCODE -ne 0) {
    Write-Error "Falha ao enviar a imagem para o Docker Hub. Verifique sua conexão e autenticação."
    exit 1
}

Write-Host ""
Write-Host "==============================================" -ForegroundColor Green
Write-Host " Sucesso! Imagem enviada ao Docker Hub!" -ForegroundColor Green
Write-Host " Para rodar na sua VPS, use o comando:" -ForegroundColor Yellow
Write-Host " docker run -d -p 3000:3000 --name portifolio $imageName" -ForegroundColor Cyan
Write-Host "==============================================" -ForegroundColor Green

# 音乐文件夹清洗脚本
# 用法: .\clean_music.ps1 -Path "E:\个人主页\音乐" [-DryRun]
# DryRun 模式只预览，不实际删除

param(
    [string]$Path = "E:\个人主页\音乐",
    [switch]$DryRun = $true
)

# 只保留: .mp3 .jpg .jpeg .png .lrc .krc
$keepExtensions = @('.mp3', '.jpg', '.jpeg', '.png', '.lrc', '.krc')

Write-Host "=== 音乐文件清洗 ===" -ForegroundColor Cyan
Write-Host "目录: $Path"
Write-Host "模式: $(if ($DryRun) { '预览（不删除）' } else { '实际删除' })" -ForegroundColor $(if ($DryRun) { 'Yellow' } else { 'Red' })
Write-Host ""

$toDelete = Get-ChildItem $Path -Recurse -File | Where-Object { $keepExtensions -notcontains $_.Extension.ToLower() }

$totalSize = ($toDelete | Measure-Object -Property Length -Sum).Sum
$totalMB = [math]::Round($totalSize / 1MB, 1)

Write-Host "待删除文件: $($toDelete.Count) 个，共 $totalMB MB" -ForegroundColor $(if ($DryRun) { 'Yellow' } else { 'Red' })
Write-Host ""

# 按类型汇总
$toDelete | Group-Object Extension | ForEach-Object {
    $sz = [math]::Round(($_.Group | Measure-Object -Property Length -Sum).Sum / 1MB, 1)
    Write-Host "  $($_.Name.PadRight(8)) $($_.Count.ToString().PadLeft(4)) 个   $sz MB"
}

Write-Host ""

if ($DryRun) {
    Write-Host ">>> 这是预览模式，未实际删除。" -ForegroundColor Yellow
    Write-Host ">>> 确认无误后，用 -DryRun:`$false 参数重新运行以实际删除。" -ForegroundColor Yellow
} else {
    $confirm = Read-Host "确认删除以上 $($toDelete.Count) 个文件？(输入 YES 确认)"
    if ($confirm -eq 'YES') {
        $toDelete | Remove-Item -Force
        Write-Host "已删除 $($toDelete.Count) 个文件，释放 $totalMB MB。" -ForegroundColor Green
    } else {
        Write-Host "已取消，未删除任何文件。" -ForegroundColor Gray
    }
}

Write-Host ""
Write-Host "=== 清洗后剩余统计 ===" -ForegroundColor Cyan
Get-ChildItem $Path -Recurse -File | Group-Object Extension | ForEach-Object {
    $sz = [math]::Round(($_.Group | Measure-Object -Property Length -Sum).Sum / 1MB, 1)
    [PSCustomObject]@{ 类型 = $_.Name; 数量 = $_.Count; 大小MB = $sz }
} | Sort-Object 大小MB -Descending | Format-Table -AutoSize

$remaining = (Get-ChildItem $Path -Recurse -File | Measure-Object -Property Length -Sum).Sum
Write-Host "剩余总大小: $([math]::Round($remaining/1MB, 1)) MB  ($([math]::Round($remaining/1GB, 2)) GB)"

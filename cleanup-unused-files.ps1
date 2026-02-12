# Script to remove unused UI components and files
# Created: February 12, 2026
# Purpose: Clean up Lovable-generated files that are not used in the project

Write-Host "Starting cleanup of unused files..." -ForegroundColor Cyan
Write-Host ""

$rootPath = $PSScriptRoot
$deletedCount = 0
$failedCount = 0

# Array of files to delete (relative to project root)
$filesToDelete = @(
    "src/components/ui/accordion.tsx",
    "src/components/ui/alert-dialog.tsx",
    "src/components/ui/alert.tsx",
    "src/components/ui/aspect-ratio.tsx",
    "src/components/ui/avatar.tsx",
    "src/components/ui/badge.tsx",
    "src/components/ui/calendar.tsx",
    "src/components/ui/card.tsx",
    "src/components/ui/carousel.tsx",
    "src/components/ui/chart.tsx",
    "src/components/ui/checkbox.tsx",
    "src/components/ui/collapsible.tsx",
    "src/components/ui/command.tsx",
    "src/components/ui/context-menu.tsx",
    "src/components/ui/drawer.tsx",
    "src/components/ui/dropdown-menu.tsx",
    "src/components/ui/form.tsx",
    "src/components/ui/hover-card.tsx",
    "src/components/ui/input-otp.tsx",
    "src/components/ui/input.tsx",
    "src/components/ui/label.tsx",
    "src/components/ui/menubar.tsx",
    "src/components/ui/navigation-menu.tsx",
    "src/components/ui/pagination.tsx",
    "src/components/ui/popover.tsx",
    "src/components/ui/progress.tsx",
    "src/components/ui/radio-group.tsx",
    "src/components/ui/resizable.tsx",
    "src/components/ui/scroll-area.tsx",
    "src/components/ui/select.tsx",
    "src/components/ui/separator.tsx",
    "src/components/ui/sheet.tsx",
    "src/components/ui/sidebar.tsx",
    "src/components/ui/skeleton.tsx",
    "src/components/ui/slider.tsx",
    "src/components/ui/switch.tsx",
    "src/components/ui/table.tsx",
    "src/components/ui/tabs.tsx",
    "src/components/ui/textarea.tsx",
    "src/components/ui/toggle-group.tsx",
    "src/components/ui/toggle.tsx",
    "src/components/ui/animatedComponents/hyperSpeed.tsx"
)

Write-Host "Files to be deleted: $($filesToDelete.Count)" -ForegroundColor Yellow
Write-Host ""

foreach ($file in $filesToDelete) {
    $fullPath = Join-Path $rootPath $file
    
    if (Test-Path $fullPath) {
        try {
            Remove-Item $fullPath -Force
            Write-Host "[OK] Deleted: $file" -ForegroundColor Green
            $deletedCount++
        }
        catch {
            Write-Host "[ERROR] Failed to delete: $file" -ForegroundColor Red
            Write-Host "   Error: $($_.Exception.Message)" -ForegroundColor Red
            $failedCount++
        }
    }
    else {
        Write-Host "[SKIP] Not found (already deleted?): $file" -ForegroundColor DarkGray
    }
}

Write-Host ""
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "Cleanup Summary" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "Successfully deleted: $deletedCount files" -ForegroundColor Green
if ($failedCount -gt 0) {
    Write-Host "Failed to delete: $failedCount files" -ForegroundColor Red
}
Write-Host ""

if ($deletedCount -gt 0) {
    Write-Host "Recommendations:" -ForegroundColor Yellow
    Write-Host "   1. Run npm run build to ensure everything still works" -ForegroundColor White
    Write-Host "   2. Test your application thoroughly" -ForegroundColor White
    Write-Host "   3. Commit these changes to version control" -ForegroundColor White
    Write-Host ""
}

Write-Host "Cleanup complete!" -ForegroundColor Green

Add-Type -AssemblyName System.IO.Compression.FileSystem

$docxFile = "c:\Users\shahe\Downloads\Yes Sme\YES SME.docx"
$tempFolder = "c:\Users\shahe\Downloads\Yes Sme\temp_docx"
$outputFile = "c:\Users\shahe\Downloads\Yes Sme\extracted_doc_text.txt"

if (Test-Path $tempFolder) {
    Remove-Item -Recurse -Force $tempFolder
}

[System.IO.Compression.ZipFile]::ExtractToDirectory($docxFile, $tempFolder)

$docXml = Join-Path $tempFolder "word\document.xml"
if (Test-Path $docXml) {
    [xml]$xml = Get-Content -Path $docXml -Encoding UTF8
    $ns = New-Object System.Xml.XmlNamespaceManager($xml.NameTable)
    $ns.AddNamespace("w", "http://schemas.openxmlformats.org/wordprocessingml/2006/main")
    
    $pNodes = $xml.SelectNodes("//w:p", $ns)
    $lines = [System.Collections.Generic.List[string]]::new()
    
    foreach ($p in $pNodes) {
        $textNodes = $p.SelectNodes(".//w:t", $ns)
        $pText = ""
        foreach ($t in $textNodes) {
            $pText += $t.InnerText
        }
        if (-not [string]::IsNullOrWhiteSpace($pText)) {
            $lines.Add($pText.Trim())
        }
    }
    
    [System.IO.File]::WriteAllLines($outputFile, $lines, [System.Text.Encoding]::UTF8)
    Write-Host "Extracted $($lines.Count) lines to $outputFile"
} else {
    Write-Host "document.xml not found!"
}

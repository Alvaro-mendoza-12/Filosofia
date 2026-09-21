const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

const folderPath = path.join(__dirname);

async function extractPdfs() {
    const files = fs.readdirSync(folderPath);
    const pdfFiles = files.filter(f => f.endsWith('.pdf'));
    
    let combinedText = fs.readFileSync(path.join(folderPath, 'extracted_content.txt'), 'utf8') || '';
    
    for (const file of pdfFiles) {
        try {
            const filePath = path.join(folderPath, file);
            const dataBuffer = fs.readFileSync(filePath);
            const data = await pdf(dataBuffer); // Let's try again, pdf-parse is a function
            combinedText += `\n\n=== START OF ${file} ===\n\n`;
            combinedText += data.text;
            combinedText += `\n\n=== END OF ${file} ===\n\n`;
            console.log(`Extracted: ${file}`);
        } catch (e) {
            console.error(`Error extracting ${file}:`, e);
        }
    }
    
    fs.writeFileSync(path.join(folderPath, 'extracted_content.txt'), combinedText);
    
    // Fallback: if pdf-parse failed completely, use the existing combined text
    const safeText = combinedText.replace(/`/g, '\\`').replace(/\$/g, '\\$');
    const dataJsContent = `const RAW_TEXT = \`${safeText}\`;\n`;
    fs.writeFileSync(path.join(folderPath, 'data.js'), dataJsContent);
}

// Check pdf-parse import
if (typeof pdf !== 'function') {
    console.error("pdf is not a function. Check pdf-parse documentation.");
    // try to fix if it's an object
    if (pdf.default && typeof pdf.default === 'function') {
        global.pdf = pdf.default;
    }
}
extractPdfs();

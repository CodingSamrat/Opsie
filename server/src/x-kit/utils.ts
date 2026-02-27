import os from "os";
import crypto from "crypto";

export function getNetworkIp(): string {
    const interfaces = os.networkInterfaces();
    for (const iface of Object.values(interfaces)) {
        if (iface) {
            for (const alias of iface) {
                if (alias.family === "IPv4" && !alias.internal) {
                    return alias.address;
                }
            }
        }
    }
    return "127.0.0.1";
};



export function generateHex(length: number = 24): string {
    return crypto.randomBytes(length / 2).toString("hex");
}

// Time ...
export function dayToMillisecond(day: number): number { return day * 86400000 }
export function dayToSecond(day: number): number { return day * 86400 }



// String ...
export function generateSlug(input: string): string {
    return input
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')      // remove non-word characters except space/hyphen
        .replace(/\s+/g, '-')          // replace spaces with hyphens
        .replace(/-+/g, '-')           // collapse multiple hyphens
        .replace(/^-+|-+$/g, '');      // remove leading/trailing hyphens
}


// Array ...
export function findByProperty<T, K extends keyof T>(array: T[], key: K, value: T[K]): T | undefined {
    return array.find(item => item[key] === value);
}



// EJS - Template ---------------------------------------------------------------------------------------
// import ejs from 'ejs';
// import path from 'path';

// export async function renderTemplate(templateName: string, data: Record<string, any> = {}): Promise<string> {
//     try {
//         const filePath = path.join(__dirname, '../templates', `${templateName}.ejs`);
//         const html = await ejs.renderFile(filePath, data, { async: true });
//         return html;
//     } catch (error) {
//         console.error('❌ Failed to render template:', error);
//         throw error;
//     }
// };



// // PDF ---
// import puppeteer from 'puppeteer';

// export async function generatePdfFromHtml(html: string): Promise<Buffer> {
//     const browser = await puppeteer.launch({
//         headless: true,
//         args: ['--no-sandbox', '--disable-setuid-sandbox'],
//     });
//     const page = await browser.newPage();

//     await page.setContent(html, { waitUntil: 'networkidle0' });
//     const pdfBuffer = await page.pdf({
//         format: 'A4',
//         printBackground: true,
//     });

//     await browser.close();
//     return Buffer.from(pdfBuffer);;
// };

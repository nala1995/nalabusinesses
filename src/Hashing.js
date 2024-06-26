export default async function generateHash(integrityKey, priceCOP, currencyCOP, reference) {
    const cadenaConcatenada = `${integrityKey}${priceCOP}${currencyCOP}${reference}`;
    console.log("Cadena concatenada:", cadenaConcatenada);
    const encodedText = new TextEncoder().encode(cadenaConcatenada);
    const hashBuffer = await crypto.subtle.digest("SHA-256", encodedText);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
    console.log("Hash generado:", hashHex);
    return hashHex;
}

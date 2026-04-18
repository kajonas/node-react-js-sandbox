export async function callEndpoint(path) {
    const res = await fetch(`http://localhost:3001${path}`);
    const text = await res.text();

    if (!res.ok) {
        throw new Error(`Request to ${path} failed (${res.status} ${res.statusText}): ${text}`);
    }

    return text;
}
export async function callEndpoint(path) {
    const res = await fetch(`http://localhost:3001${path}`);
    return res.text();
}
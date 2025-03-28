import { writeJSON, readJSON } from '$lib/stores/io';
import { randomBytes } from 'crypto';

export function readCookieMap() {
    return readJSON('userByCookie').catch(() => ({})) as Promise<{ [k: string]: string }>;
}
export async function addCookie(user: string, cookie: string) {
    const cookieMap = await readCookieMap();

    return writeJSON('userByCookie', {
        [cookie]: user,
        ...cookieMap
    });
}

export function createRandomCookie() {
    const buffer = randomBytes(48);
    const token = buffer.toString('hex');
    return token;
}
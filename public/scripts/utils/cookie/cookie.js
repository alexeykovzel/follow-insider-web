export class CookieUtils {

    static set(name, value, expiryMinutes) {
        let expires = '';
        if (expiryMinutes) {
            const date = new Date();
            date.setTime(date.getTime() + expiryMinutes * 60 * 1000);
            expires = '; expires=' + date.toUTCString();
        }
        document.cookie = `${name}=${value || ''}${expires}; path=/`;
    }

    static get(name) {
        let nameEQ = `${name}=`;
        let ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
    }

    static erase(name) {
        document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }

}
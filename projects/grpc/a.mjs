import fetch from "node-fetch";

(async () => {
    for (let i = 0; i < 100; i++) {
        await fetch("https://archie.danielraybone.com/write_message.php", {
            headers: {
                accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "accept-language": "en-US,en;q=0.9",
                "cache-control": "max-age=0",
                "content-type": "application/x-www-form-urlencoded",
                "sec-ch-ua": '"Not?A_Brand";v="8", "Chromium";v="108", "Google Chrome";v="108"',
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": '"Windows"',
                "sec-fetch-dest": "document",
                "sec-fetch-mode": "navigate",
                "sec-fetch-site": "same-origin",
                "sec-fetch-user": "?1",
                "upgrade-insecure-requests": "1",
                cookie: "PHPSESSID=7gdriqh4fv6sjlah2ji1hs815l",
                Referer: "https://archie.danielraybone.com/chat.php",
                "Referrer-Policy": "strict-origin-when-cross-origin",
            },
            body: "user_message=dwad",
            method: "POST",
        });
    }
})();


const base_url = "https://ww1.mangakakalot.tv"

function parseData(text) {
    const doc = HTMLParser.parse(text);
    let h1 = doc.querySelector(".manga-info-top ul li h1");
    let title = h1.text.trim();

    let h2 = doc.querySelector(".manga-info-top ul li h2");
    let subtitle = h2.text.trim();
    
    let summary = doc.querySelector("#noidungm").innerText.trim();

    let list = [];
    let nodes = doc.querySelectorAll('.chapter-list div');
    for (let node of nodes) {
        let anode = node.querySelector('span a');
        let name = anode.text.trim();
        list.push({
            title: name.replace(/new$/, ''),
            link: base_url + anode.getAttribute('href'),
        });
    }
    return {
        title: title,
        subtitle: subtitle,
        summary: summary,
        list: list.reverse(),
    };
}

module.exports = async function(url) {
    let res = await fetch(url, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Mobile Safari/537.36',
            'Accept-Language': 'en-US,en;q=0.9',
        }
    });
    let text = await res.text();

    return parseData(text);
}
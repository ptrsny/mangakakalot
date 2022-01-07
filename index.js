class IndexController extends Controller {
    load() {
        this.data = {
            tabs: [
                {
                    "title": "Latest",
                    "id": "last_release",
                    "url": "https://ww1.mangakakalot.tv/manga_list/?type=latest&category=all&state=all&page={0}"
                },
                {
                    "title": "Hot",
                    "id": "hot_manga",
                    "url": "https://ww1.mangakakalot.tv/manga_list/?type=topview&category=all&state=all&page={0}"
                },
                {
                    "title": "New",
                    "id": "new_manga",
                    "url": "https://ww1.mangakakalot.tv/manga_list/?type=newest&category=all&state=all&page={0}"
                },
                {
                    "title": "Completed",
                    "id": "completed_manga",
                    "url": "https://ww1.mangakakalot.tv/manga_list/?type=newest&category=all&state=Completed&page={0}"
                },
            ]
        };
    }
}

module.exports = IndexController;
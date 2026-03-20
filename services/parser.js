import Parser from 'rss-parser'
const parser = new Parser({
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0 Win64 x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  },
})

export const parse = async () => {
    const url = 'https://www.xda-developers.com/feed/tag/rss/'
    try {
        const feed = await parser.parseURL(url)
        return feed.items
    } catch (error) {
        console.error("Parsing Error:", error.message)
        throw error
    }
}
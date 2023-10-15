import fs from 'fs'
import {create} from 'xmlbuilder2'

const pages = [
  {
    url: '/',
    changefreq: 'daily',
    priority: 1.0,
  },

  // up this sitemap if below pages are available
]

const root = create({version: '1.0', encoding: 'UTF-8'}).ele('urlset', {
  xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9',
})

pages.forEach(page => {
  root.ele('url')
    .ele('loc')
    .txt(`https://asaromi.biz.id${page.url}`)
    .up()
    .ele('changefreq')
    .txt(page.changefreq)
    .up()
    .ele('priority')
    .txt(page.priority)
    .up()
})

const xml = root.end({prettyPrint: true})

fs.writeFile('public/sitemap.xml', xml, (err) => {
  if (err) throw err
})


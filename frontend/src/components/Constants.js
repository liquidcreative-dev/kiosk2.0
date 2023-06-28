const production = {
    //url: 'https://whale-app-krfpv.ondigitalocean.app/strapi'
    url: 'https://lobster-app-6xzrh.ondigitalocean.app/strapi'
}

const dev = {
    url: 'http://localhost:1337'
}

export const config = process.env.NODE_ENV === 'production' ? dev: production;
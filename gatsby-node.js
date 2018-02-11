exports.onCreatePage = async ({ page, boundActionCreators }) => {
    const { createPage } = boundActionCreators

    return new Promise((resolve, reject) => {
        if (page.path.match(/^\/colors/)) {
            page.layout = `colors`
            createPage(page)
        }

        resolve()
    })
}

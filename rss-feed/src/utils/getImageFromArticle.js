
export const getImageFromArticle = (article) => {
    var imgRegex = /<img[^>]*>/g
    var match = article.match(imgRegex)
    var imgTag = "<p>No hay imagen del artículo</p>"
    if (match) { imgTag = match[0] }
    return imgTag
}

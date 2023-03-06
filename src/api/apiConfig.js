const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '71c7221a9a408014c9a43fbc9440e087',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;

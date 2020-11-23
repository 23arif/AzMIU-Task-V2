function changeTab(type,t) {
    if (type === 'news') {
        document.getElementById('announcement-container').classList.add('hide');
        document.getElementById('news-container').classList.remove('hide')
        document.getElementById('news').classList.add('active')
        document.getElementById('announcement').classList.remove('active')
    } else {
        document.getElementById('news-container').classList.add('hide')
        document.getElementById('announcement-container').classList.remove('hide')
        document.getElementById('announcement').classList.add('active')
        document.getElementById('news').classList.remove('active')
    }

}


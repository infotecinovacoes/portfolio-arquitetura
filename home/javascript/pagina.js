window.onload = function () {
    window.scrollTo(0, 0);
};

if (!sessionStorage.getItem('reloaded')) {
    sessionStorage.setItem('reloaded', 'true');
    window.location.reload();
} else {
    sessionStorage.removeItem('reloaded');
}

// window.addEventListener('beforeunload', function () {
//     window.scrollTo(0, 0);
// });

// window.addEventListener('beforeunload', function () {
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//     });
// });
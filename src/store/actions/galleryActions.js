export const FETCHING_GALLERY = 'FETCHING_GALLERY';
export const SUCCESS_GALLERY = 'SUCCESS_GALLERY';
export const FAILED_GALLERY = 'FAILED_GALLERY';

export const fetchingGallery = () => ({type: 'FETCHING_GALLERY'});
export const successGalleryData = (data) => ({
    type: 'SUCCESS_GALLERY',
    payload: data,
});
export const failedGalleryData = (error) => ({
    type: 'FAILED_GALLERY',
    payload: error,
});

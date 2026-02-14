export interface GalleryItem {
  id: number;
  imageUrl: string;
  alt: string;
}

export const galleryData: GalleryItem[] = [
  {
    id: 1,
    imageUrl: 'https://github.com/mitwenx/Freelancing-/blob/c8d140c39d6563bc14a49fb87b10d22bbfa89a9c/images/gallery/one.png',
    alt: 'Tech Thumbnail'
  },
  {
    id: 2,
    imageUrl: 'images/gallery/two.png',
    alt: 'Tutorial Thumbnail'
  },
  {
    id: 3,
    imageUrl: 'images/gallery/three.png',
    alt: 'Bot Thumbnail'
  },
  {
    id: 4,
    imageUrl: 'images/gallery/four.png',
    alt: 'Tutorial Thumbnail'
  }
];

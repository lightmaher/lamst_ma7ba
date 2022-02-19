import { Evt } from './Evt';

export class Place{
    placeId: number;
    title: string;
    description: string;
    url: string;
    events: Evt[];
    placeGalleries: PlaceGallery[];
}

export class PlaceGallery{
    id: number;
    name: string;
    url: string;
}

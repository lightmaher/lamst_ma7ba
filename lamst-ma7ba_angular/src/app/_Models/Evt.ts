import { Place } from './place';

export interface Evt {
id: number;
title: string;
description: string;
url: string;
date: string;
placeId: number;
location: Place;
number: number;
needs: string;
}

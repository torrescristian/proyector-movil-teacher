import { Slide } from './slide.interface';

export interface ManageSlideState {
    slides: Slide[];
    activeSlide: Slide;
    displayedImageIndex: number;
}
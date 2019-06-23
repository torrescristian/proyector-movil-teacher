import { Slide } from './slide.interface';

export interface RootState {
    // ManageSlidesModule
    slides: Slide[],
    activeSlide: Slide,
    displayedImageIndex: number,
    // TemplateModule
    title: string,
    // AnalyticsModule
    maxAmountOfStudents: number,
}
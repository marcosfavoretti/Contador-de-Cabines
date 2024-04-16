import { animate, animation, style } from "@angular/animations";

export const transitionAnimation = animation([
    style({
        opacity: 1,
        transform: 'translateY(0%)' // Aqui está a correção
    }),
    animate('{{ time }}', style({
        opacity: 0,
        transform: 'translateY(100%)' // Aqui está a correção
    }))
]);